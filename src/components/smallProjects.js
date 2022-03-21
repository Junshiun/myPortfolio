import Quote from "./quote";
import { Calculator } from "./calculator";
import { Drum } from "./drum";
import '../css/smallProjects.css'
import { SmallProject } from "./smallProject";

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

    return (
        <div className="smallProjects">
            {projects.map((project) => {
            
                return <SmallProject component={project.component} key={project.title} project={project}/>
            })}
        </div>
    )
}