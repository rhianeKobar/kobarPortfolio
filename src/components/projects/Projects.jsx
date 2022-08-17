import "./projects.scss";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import FeatherIcon from 'feather-icons-react';
import thermostatImg from "../../Resources/thermostat.png"
import typingGameImg from "../../Resources/typingGame.png"
import iobookImg from "../../Resources/iobookImg.png"
import kickaboutImg from "../../Resources/kickabout.png"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'

export default function Projects() {

	const [index,setIndex] = useState(false);
	const [showInfo, setShowInfo] = useState(false);

	// const thermo = useRef(null)
	// const typingGame = useRef(null)
	// const iobook = useRef(null)
	// const kickabout= useRef(null)

	// const toggleInfo = (index) => {
	// 	console.log(index)
	// 	setIndex(index)
	// }
	// useEffect(()=>{},[thermo,typingGame,iobook,kickabout])
	const handleHover = (index) => {
		setIndex(index)
		// setShowInfo(true)
	}

	const handleMouseOut = () => {
		setIndex(0)
		// setShowInfo(false)
	}

	function Project(props){
		return(
			
				<div className={index === props.index ? "hover hover-enter" : "hover hover-exit"}>
					<img src={props.img} alt={props.name} className="preview" />
					<CSSTransition in={true} timeout={500} classNames="hover">
							<div className="description" onMouseOver={() => handleHover(props.index)} onMouseOut={() => handleMouseOut()} onClick={() => handleHover(props.index)}>
								<h3>{props.name}</h3>
								<p>{props.description}</p>
							</div>
					</CSSTransition>
					<Tippy content="View code">
						<button className="btn" onClick={()=> window.open(props.url)} title='view project code'>
							<FeatherIcon icon='code'/>	
						</button>
					</Tippy>
				</div>	
			
		);
	}

	return (
		<div className="projects" id="projects">
			
			<Project 
				name="IOBook" 
				description="An social media platform for developers!"
				img={iobookImg}
				url="https://github.com/tomal02/iobook"
				// ref={iobook}
				index={1}
			/>
			<Project 
				name="QTIPoC Typing Game" 
				description="An educational typing game that helps you learn phrases related to the QTIPoC(Queer, Trans, Intersex, People of Colour) community and also give your typing speed and average typing speed of all the phrases you've typed. Inspired by being black and queer."
				img={typingGameImg}
				url="https://github.com/rhianeKobar/QTIPoC-phrases-typing-game"
				// ref={typingGame}
				index={2}
			/>
			<Project 
				name="KickAbout" 
				description="A webapp to make football more accessible to everyone outside of a traditional male audience. Creating community through sport."
				img={kickaboutImg}
				url="https://github.com/lildann/kickabout"
				// ref={kickabout}
				index={3}
			/>
			<Project 
				name="Thermostat" 
				description="A thermostat app that allows you to check the temperature in your chosen city using the Open Weather API and adjust the thermostat accordingly."
				img={thermostatImg}
				url="https://github.com/rhianeKobar/thermostat"
				// ref={thermo}
				index={4}
			/>
		</div>
	);
}
