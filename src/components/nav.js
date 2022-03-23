import '../css/nav.css'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { useState } from 'react'

export const Nav = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <div className={"navMain " + (showNav? "show":"hide")}>
            <div className={"navBar " + (showNav? "show":"hide")}>
                <a href="#Projects">Recent Works</a>
                <a href="#ContactForm">Send Me a Message</a>
                <a href="#Contact">Contact</a>
                <a className="resume" href="#Contact"><AiOutlineFilePdf className="resumeIcon"></AiOutlineFilePdf>Resume</a>
            </div>
            <div className="navIcon" onClick={() => {setShowNav(!showNav)}}>
                <HiMenuAlt3 style={{fontSize: "24px", color: "#0c343d"}}></HiMenuAlt3>
            </div>
        </div>
    )
}