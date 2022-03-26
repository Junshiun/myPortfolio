import "../css/introduction.css"
import self from "../images/JS.jpg"
import { useState } from "react"
import { IoMdHand } from "react-icons/io"

import { useEffect } from "react"

const skills = ["JavaScript", "HTML", "CSS", "React", "Git", "Photoshop", "Illustrator"]

export const Introduction = () => {

    const [animation, setAnimation] = useState(true);
    
    useEffect(() => {
        
        document.getElementsByClassName("tagFront")[0].innerText = "<h1>";

        document.getElementsByClassName("tagEnd")[0].innerText = "</h1>";

        setAnimation(false);
    }, [])

    return (
        <div id="introductionMain">
            <div className={"forAnimation " + (animation? "animate":"")}></div>
            <div className="introductionWrap">
                <div className="introContent">
                    {/*<div className="coverPhoto">
                        <img src={require('../images/test01.jpg')}></img>
                    </div>*/}
                    <div className="selfPhotoWrap">
                        <div className="selfPhotoBox">
                            <img src={self} alt="illustrations of myself" className="selfPhoto"></img>
                        </div>
                        <div className="selfPhotoShadow"></div>
                    </div>
                    <div className="selfIntro">
                        <span>
                            <h2 className="tagFront"></h2>
                            <h1 id="selfIntroHead">Hi<IoMdHand className="wavingHand"></IoMdHand>I am Jun Shiun</h1>
                            <h2 className="tagEnd"></h2>
                        </span>
                        <p>
                            interested in exploring and creating
                        </p>
                    </div>
                </div>
                <div className="aboutMeMain">
                    <div className="aboutMeWrap">
                        <div className="shortIntro">
                             Currently living in KL, Malaysia. A lifelong learner with passion in programming.
                        </div>
                        <div className="mySkills">
                            <span>my skills</span>
                            {skills.map((skill) => {
                                return (
                                    <div className="eachMySkill" key={skill}>{skill}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}