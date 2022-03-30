import '../css/nav.css'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { useState } from 'react'
import { ContentContext } from '../context/context'

export const Nav = () => {

    const { contentState: {resume}} = ContentContext();

    const [showNav, setShowNav] = useState(false); //useState((window.innerWidth >= 700)? true:false);

    return (
        <div className={"navMain " + (showNav? "show":"hide")}>
            <div className={"navBar " + (showNav? "show":"hide")}>
                <a href="#AboutMe">About Me</a>
                <a href="#Projects">Recent Works</a>
                <a href="#ContactForm">Send Me a Message</a>
                <a href="#Contact">Contact</a>
                <a className="resume" href="https://drive.google.com/file/d/1YBbS_8DnUvDjCQJmmden1f8b0aPG0dtX/view?usp=sharing" target="_blank" rel="noreferrer"><AiOutlineFilePdf className="resumeIcon"></AiOutlineFilePdf>Resume</a>
            </div>
            <div className="navIcon" onClick={() => {setShowNav(!showNav)}}>
                <HiMenuAlt3 style={{fontSize: "24px", color: "#0c343d"}}></HiMenuAlt3>
            </div>
        </div>
    )
}