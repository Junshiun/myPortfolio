import '../css/aboutMe.css'
import { CgProfile, CgWorkAlt } from 'react-icons/cg'
import { GiGraduateCap } from 'react-icons/gi'
import { AboutProfile } from './aboutProfile'
import { AboutWork } from './aboutWork'
import { AboutStudy } from './aboutStudy'
import { useState } from 'react'

export const AboutMe = () => {
    const [showInfo, setShowInfo] = useState("profile");

    return (
        <div id="AboutMe">
            <h1 className="Title">about Me</h1>
            <div className="aboutWrap">
                <div className="infoBox">
                    <AboutProfile showClass={(showInfo==="profile")? "show":"hide"}/>
                    <AboutWork showClass={(showInfo==="work")? "show":"hide"}/>
                    <AboutStudy showClass={(showInfo==="study")? "show":"hide"}/>
                    <AboutNav class="aboutNav" func={setShowInfo}/>
                </div>
                <AboutNav class="aboutNavMobile" func={setShowInfo}/>
            </div>
        </div>
    )
}

const AboutNav = (props) => {
    const { func } = props;

    return (
        <div className={props.class}>
            <div className="aboutNavIconBox" onClick={() => {func("profile")}}>
                <CgProfile className="aboutNavIcon"></CgProfile>
            </div>
            <div className="aboutNavIconBox" onClick={() => {func("work")}}>
                <CgWorkAlt className="aboutNavIcon"></CgWorkAlt>
            </div>
            <div className="aboutNavIconBox" onClick={() => {func("study")}}>
                <GiGraduateCap className="aboutNavIcon"></GiGraduateCap>
            </div>
        </div>
    )
}