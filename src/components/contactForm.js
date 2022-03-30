import "../css/contactForm.css"
import { useState, useEffect, useRef } from "react";
import { AiFillCloseCircle, AiOutlineLoading, AiFillMessage} from "react-icons/ai"

export const ContactForm = () => {

    const [visible, setvisible] = useState(false);
    const [sendClick, setsendClick] = useState(false);
    const [sendSuccess, setsendSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const containerRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const [entry] = entries;
            if (entry.isIntersecting){
                setvisible(true);
                observer.unobserve(containerRef.current);
            }
        })
    
        observer.observe(containerRef.current);
    }, [])

    async function submitForm(e) {
        e.preventDefault();

        setLoading(true);

        let form = document.getElementById('formToSubmit').elements

        let name = form.sender.value;
        let email = form.email.value;
        let subject = form.subject.value
        let message = form.message.value;

        let formData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }

         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        const response = await fetch('https://blooming-badlands-87075.herokuapp.com/email', requestOptions).then((res) => {
            if (res.ok)
                return (res.json())
            else
                throw new Error(res.status);
        })
        .then((res) => {
            if (res.success){
                setsendSuccess(true);
            }
            else{
                setsendSuccess(false);
            }
        })
        .catch(() => {
            setsendSuccess(false);
        })
        .finally(() => {
            setsendClick(true);
            setLoading(false);

            /*
            setTimeout(() => {
                document.getElementById("messageBoxWrap").classList.add("boxShow")
            }, 10)
            */
 
        })
    }

    return (
        <div id="ContactForm" className={((visible===true)? "visible":"hide")} ref={containerRef}>
            <h1 className="Title">send me A <AiFillMessage className="messageIcon"></AiFillMessage><span className="type">message</span></h1>
            <div className="formWrap">
                <form id="formToSubmit" onSubmit={(e) => {submitForm(e)}}>
                    <div className="formPart">
                        <label htmlFor="sender" required>Name</label>
                        <input id="sender" type="text" required></input>
                    </div>
                    <div className="formPart">
                        <label htmlFor="email" required>Email</label>
                        <input id="email" required></input>
                    </div>
                    <div className="formPart">
                        <label htmlFor="subject">Subject</label>
                        <input id="subject" type="text"></input>
                    </div>
                    <div className="formPart">
                        <label htmlFor="message" required>Message</label>
                        <textarea id="message" required></textarea>
                    </div>
                    {(loading==true)? <div className="loadingButton"><AiOutlineLoading className="loadingIcon"></AiOutlineLoading></div>:<button type="submit">Send</button>}   
                    <div className="formBackground"></div>         
                </form>
            </div>
            <div id="messageBoxWrap" className={"messageBoxWrap " + (sendClick===true? "sendClick":"noSend")}>
                <div className={"messageBox " + (sendSuccess===true? "sendSuccess":"sendFail")}>
                    <div className="messageClose" onClick={() => {
                        setsendClick(false);
                        document.getElementById("messageBoxWrap").classList.remove("boxShow")}}>
                        <AiFillCloseCircle style={{fontSize:"24px"}}></AiFillCloseCircle>
                    </div>
                    <div className="messageText">
                        {(sendSuccess===true? 
                        "Message sent, thanks for your message"
                        :
                        "Unable to send message, please try again")}
                    </div>
                </div>
            </div>
        </div>
    )
}