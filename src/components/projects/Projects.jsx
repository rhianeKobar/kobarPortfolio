import "./projects.scss";
import React, { useState } from "react";
import ProjectList from "./projectList";
import FeatherIcon from 'feather-icons-react';


export default function Projects() {

	const [modalOpen, setModalOpen] = useState(false);
	const [clickedProject, setClickedProject] = useState({});

	const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

	const handleProjectClick = proj => {
		setClickedProject(proj)
		setModalOpen(true)
	}

	return (
		<div className="projects" title="projects">
			{
				ProjectList.map((project,idx) => {
					return(
						<div title={project.name} key={idx} className={ modalOpen ? "close-container":"" } onClick={()=>{handleProjectClick(project)}} >
							<div className="project-container">
								<h4>{project.name}</h4>
								<div className="project-img-container">
									<img src={project.img} alt={`gif of ${project.name}`} className="project-img" />
								</div>
							</div>
						</div>
					)
				})
			}
			<div title={`${clickedProject.name} modal`} className={ modalOpen ? "project-modal open-modal" : "project-modal" }>
				<div className="modal-header">
					<h3>{clickedProject.name}</h3>			
					<button onClick={()=>{setModalOpen(false)}} className="modal-tippy" title="close box">				
						<FeatherIcon icon="x" size="12px"/>
					</button>
				</div>
				<img src={clickedProject.img} alt={`gif of ${clickedProject.name}`} className="modal-image" />
				<div className="modal-body">
					{clickedProject.description}
					<h5>Tools/Languages:</h5>
					{clickedProject.tools}
				</div>
				<div className="modal-footer">
					<button onClick={()=>{openInNewTab(clickedProject.url)}} className="modal-code-btn">View code</button>
				</div>
			</div>
		</div>
	);
}
