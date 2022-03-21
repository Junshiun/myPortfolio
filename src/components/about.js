import "../css/about.css"

const skills = ["JavaScript", "HTML", "CSS", "React", "Git", "Photoshop", "Illustrator"]

export const About = () => {
    return (
        <div id="About">
            <div className="aboutWrap">
                <h1 className="Title">ABOUT ME</h1>
                <div className="aboutMeWrap">
                    <div className="shortIntro">
                        Aim to become a front end developer. Currently living in KL, Malaysia. A lifelong learner with passion in programming and design.
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
    )
}