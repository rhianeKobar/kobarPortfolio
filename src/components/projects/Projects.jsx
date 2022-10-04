import "./projects.scss";
import React from "react";
import ProjectList from "./projectList";


export default function Projects() {

	return (
		<div className="projects" id="projects">
			{
				ProjectList.map((project,idx) => {
					return(
						<div key={idx} className="project-container" onClick={()=>{}}>
							<h4>{project.name}</h4>
							<div className="project-img-container">
								<img src={project.img} alt={`gif of ${project.name}`} className="project-img" />
							</div>
						</div>
					)
				})
			}
		</div>
	);
}
