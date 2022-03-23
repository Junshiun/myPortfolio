import '../css/projects.css'
import { Project } from "./project"
import data from '../json/projects.json'
import { SmallProjects } from "./smallProjects"

export const Projects = () => {

    return (
        <div>
            <h1 id="Projects" className="Title">Recent Works</h1>
            <div className="projectMaster">
                {data.map((project) => {
                    return <Project project={project} key={project.Title} />
                })}
                <SmallProjects />
            </div>
        </div>
    )
}