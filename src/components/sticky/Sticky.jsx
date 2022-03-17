import "./sticky.scss";
import "../intro/Intro.jsx"
import { useEffect, useState } from "react";

export default function Sticky() {
	const[stickyNavbar,setStickyNavbar] = useState(false)
	const stickNavbar = (e) => {
		// let nav = document.getElementById('nav');
		// let navTop = nav.getBoundingClientRect().top
		// let intro = document.getElementById('intro');
		// let introBottom = intro.getBoundingClientRect().bottom
		
	}
	useEffect(()=>{
		window.addEventListener('wheel', stickNavbar);
	});

	

	return (
		<nav id='nav' className={stickyNavbar? 'navbar active':'navbar'}>
			<a href="#projects">Projects</a>
			<a href="#skills">Skills</a>
			<a href="#connect">Connect</a>
		</nav>
	);
}
