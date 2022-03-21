import '../css/contact.css'

import { MdEmail } from "react-icons/md"
import { ImLinkedin } from "react-icons/im"
import { FaGithubSquare } from "react-icons/fa"

export const Contact = () => {
    return (
        <div id="Contact">
            <h1 className="Title">Get in Touch</h1>
            <div className="contactInfo">
                <div className="contactInfoBox">
                    <MdEmail></MdEmail>
                    <a href="mailto:junshiun@gmail.com">junshiun@gmail.com</a>
                </div>
                <div className="contactInfoBox">
                    <ImLinkedin></ImLinkedin>
                    <a href="https://www.linkedin.com/in/jun-shiun-lim/" target="_blank">Jun Shiun Lim</a>
                </div>
                <div className="contactInfoBox">
                    <FaGithubSquare></FaGithubSquare>
                    <a href="https://github.com/Junshiun" target="_blank">JunShiun</a>
                </div>
            </div>
        </div>
    )
}