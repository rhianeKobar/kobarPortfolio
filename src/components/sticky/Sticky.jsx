import "./sticky.scss";
import "../intro/Intro.jsx"
import { useEffect, useState, useRef } from "react";

export default function Sticky() {

	const homeBtn = useRef(null)
	const projectsBtn = useRef(null)
	const aboutBtn = useRef(null)
	const connectBtn = useRef(null)

	const[activeTab,setActiveTab] = useState(0)
	

	const handleTabClick = (index) => {
		setActiveTab(index)
	}

	useEffect(()=>{},[homeBtn,projectsBtn,aboutBtn,connectBtn])
	return (
		<nav id='nav' className='navbar'>
			<a href="#intro" ref={homeBtn} id="homeBtn" onClick={()=> handleTabClick(1)} className={activeTab === 1?'active':''}>Home</a>
			<a href="#projects" ref={projectsBtn} id="projectsBtn" onClick={()=> handleTabClick(2)} className={activeTab === 2?'active':''}>Projects</a>
			<a href="#about" ref={aboutBtn} id="connectBtn" onClick={()=> handleTabClick(3)} className={activeTab === 3?'active':''}>About</a>
			<a href="#connect" ref={connectBtn} id="connectBtn" onClick={()=> handleTabClick(4)} className={activeTab === 4?'active':''}>Connect</a>
		</nav>
	);
}
