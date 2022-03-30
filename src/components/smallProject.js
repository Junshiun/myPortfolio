import { VscGithub } from 'react-icons/vsc';
import { useRef, useState, useEffect} from "react"; 

export const SmallProject = (props) => {

    const {component, project: {Title, Skills, Github}} = props;

    const Project = component;

    const [visible, setvisible] = useState(false);

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

    const ProjectLink = () => {
        return (
            <div className="smallProjectLink">
                <a className="emptyBox">
                </a>
                <a className="gitBox" href={Github} target="_blank">
                    <VscGithub style={{marginRight: "10px"}}></VscGithub>GitHub
                </a>
            </div>
        )
    }

    return (
        <div id={Title} className={"smallProject " + ((visible===true)? "visible":"notvisible")} ref={containerRef}>
            <div className="smallProjectHead">
                <span className="smallProjectTitle">{Title}</span>
                {Skills.map((skill) => {
                    return <div className="eachSkill" key={skill}>{skill}</div>
                })}

                {/*<div className="smallProjectTitle">{title}</div>
                <div className="skillsBar">
                    {skills.map((skill) => {
                        return <div className="eachSkill" key={skill}>{skill}</div>
                    })}
                </div>*/}
            </div>
            <Project />
            <ProjectLink />
        </div>
    )
}