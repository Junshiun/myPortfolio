import '../css/project.css'
import { VscGithub, VscArrowDown } from 'react-icons/vsc'
import { BiExpandAlt } from 'react-icons/bi'

import { useState, useEffect, useRef } from 'react';

export const Project = (props) => {

    const {project} = props;

    const [expand, setexpand] = useState(false);

    const  containerRef = useRef();

    const [visible, setvisible] = useState(false);

    const [progress, setprogress] = useState({
        "--width": "0%"
    });

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const [entry] = entries;
            if (entry.isIntersecting){
                setvisible(true);
                observer.unobserve(containerRef.current);
            }
        })
    
        observer.observe(containerRef.current);

        if (project.State!==undefined)
            setprogress({"--width": (project.Progress===undefined)?  "0%" : project.Progress})
            
    }, [])

    const ProjectLink = (props) => {
        return (
            <div className={props.class}>
                <a className="liveBox" href={props.live} target="_blank" rel="noreferrer">
                                View Project
                </a>
                <a className="gitBox" href={props.github} target="_blank" rel="noreferrer">
                    <VscGithub style={{marginRight: "10px"}}></VscGithub>GitHub
                </a>
            </div>
        )
    }

    return (
        (project.State!==undefined)?
        <div id={project.Title} className={"projectWrap comingSoon " + ((visible===true)? "visible":"hide")} ref={containerRef}>
            <div className="comingSoonTitle">
                coming soon
                <div className="comingSoonBar" style={progress}>
                </div>
            </div>
            <div className="commingSoonSkills">
                {project.Skills.map((skill) => {
                    return (
                        <div className="comingSoonSkill" key={project.Title + "-skills-" + skill}>
                            {skill}
                        </div>
                    )
                })}
            </div>
        </div>
        :
        <div id={project.Title} className={"projectWrap " + ((visible===true)? "visible":"hide")} ref={containerRef}>
            <div className="projectMain">
                <div className="projectScreenshot">
                    <img src={project.Image} alt={project.AltImage}></img>
                </div>
                <div className="projectDescriptionWrap">
                    <div className={"projectDescription " + (expand===true? "expand":"collapse")}>
                        <div className="projectTitle">{project.Title}</div>
                        {/*<span className="skillsTitle">skills:
                        </span>*/}
                        <div className="projectSkills">
                            {project.Skills.map((skill)=> {return (
                                <div className="eachSkill" key={skill}>{skill}</div>
                            )})}
                        </div>
                        <div className="projectOverview">
                            <p>&nbsp; {project.Overview}</p>
                        </div>
                        <ProjectLink class="projectLink" live={project.Live} github={project.Github}/>
                        <div className="fadeBox"></div>
                        <button className="openDescription" onClick={() => {setexpand(!expand)}}>{expand===true? <VscArrowDown></VscArrowDown>
                        :
                        <BiExpandAlt></BiExpandAlt>}</button>
                    </div>
                </div>
            </div>
            <ProjectLink class="projectLinkMobile" live={project.Live} github={project.Github}/>
        </div>
    )
}