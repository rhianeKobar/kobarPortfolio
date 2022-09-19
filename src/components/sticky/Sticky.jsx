import "./sticky.scss";
import "../intro/Intro.jsx"
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef} from "react";

export default function Sticky() {

	const homeBtn = useRef(null)
	const projectsBtn = useRef(null)
	const aboutBtn = useRef(null)
	const connectBtn = useRef(null)

	const[activeTab,setActiveTab] = useState(0)
	

	// const handleTabClick = (index) => {
	// 	setActiveTab(index)
	// }

	useEffect(()=>{},[homeBtn,projectsBtn,aboutBtn,connectBtn])

	return (
		<nav id='nav' className='navbar'>
			<NavLink exact to="/" ref={homeBtn} onClick={()=> setActiveTab(1)} className={activeTab === 1?'active link':'link'}><div>Home</div></NavLink>
			<NavLink to="/projects" ref={projectsBtn} onClick={()=> setActiveTab(2)} className={activeTab === 2?'active link':'link'}><div>Projects</div></NavLink>
			<NavLink to="/about" ref={aboutBtn} onClick={()=> setActiveTab(3)} className={activeTab === 3?'active link':'link'}><div>About</div></NavLink>
			<NavLink to="/connect" ref={connectBtn} onClick={()=> setActiveTab(4)} className={activeTab === 4?'active link':'link'}><div>Connect</div></NavLink>
		</nav>
	);
}
