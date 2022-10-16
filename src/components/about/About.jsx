import React from 'react'
import './about.scss'
import Section from '../section/section'
import technologies from './skillsList'


export default function About() {
	return (
		<div className='about' id="about" title="About">
			<Section 
				title="About me "
				emojii="😁"
				aria="beaming face with smiling eyes"
				content="Hi there, I'm Shakira, a Front-End Software Engineer! I build products that enhance people's lives, spaces and businesses while
				showcasing and developing my skills using TDD and SOLID principles. I've been designing and building websites and web apps for over a year and I've gotten especially 
				good at translating a Figma file to a piece of code. As a collaborator I'm pretty easy going and I like to make sure we both understand the scope of work and what's 
				expected before we start work to put our best foot forward. Outside of coding, I'm big on self care, gardening and getting out into 
				nature."
			/>
			<div className='skillset'>
				<h3>Skillset<span role="img" aria-label="toolbox"> 🧰</span></h3>
				<div className="icons">
					{
						technologies.map((tech,idx) => {
							return(
								<div className='icon' id={idx}>
									<img src={tech.link} alt={tech.icon}/>
									<p>{tech.name}</p>
								</div>
							)
						})
					}	
				</div>
			</div>
			<Section
				title= "Collabs "
				emojii="🙏"
				aria="high five"
				content="I'm open to roles in full-time or contract work and freelance projects. Ideally
				I'd be working remotely as part of a team that recognises the importance of 
				diversity and inclusion especially in tech but I'm open to a variety of environments
				depending on your location."
			/>
			{/* build a modal to show prices */}
		</div>
	)
}
