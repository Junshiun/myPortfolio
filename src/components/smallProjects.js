import Quote from "./quote";
import { Calculator } from "./calculator";
import { Drum } from "./drum";
import '../css/smallProjects.css'
import { SmallProject } from "./smallProject";
import { useState, useEffect } from "react"

const projects = [
    {
        title: "Random Quote Machine",
        component: Quote,
        skills: ["React", "Javascript", "HTML", "CSS"],
        github: "https://github.com/Junshiun/random-quote-machine"
    },
    {
        title: "Calculator",
        component: Calculator,
        skills: ["React", "Javascript", "HTML", "CSS"],
        github: ""
    },
    {
        title: "Drum Machine",
        component: Drum,
        skills: ["React", "Javascript", "HTML", "CSS"],
        github: ""
    }
]

export const SmallProjects = () => {

    const [showMore, setShowMore] = useState(false);

    //const [height, setHeight] = useState(0);

    const showFunction = () => {
        setShowMore(!showMore);

        //document.querySelector(".smallProjectsWrap").style.height = height + "px";
    }

    useEffect(() => {

        document.querySelector(".smallProjectsWrap").style.height =  document.querySelector(".smallProjectsHeight").clientHeight + "px";

        window.addEventListener("resize", () => {
            let measured = document.querySelector(".smallProjectsHeight").clientHeight;

            document.querySelector(".smallProjectsWrap").style.height = document.querySelector(".smallProjectsHeight").clientHeight + "px";

            //console.log(document.querySelector(".smallProjectsHeight").clientHeight)
        })
    }, [])

    return (
        <div className="smallProjects">
            <div className={"smallProjectsWrap " + ((showMore===true)? "show" : "hide")}>
                <div className="smallProjectsHeight">
                    {projects.map((project) => {
                    
                        return <SmallProject component={project.component} key={project.title} project={project}/>
                    })}
                </div>
            </div>
            <div className="showMore">
                <button className="showMoreBtn" onClick={showFunction}>{(showMore===true)? "Show Less":"Show More"}</button>
            </div>
        </div>
    )
}