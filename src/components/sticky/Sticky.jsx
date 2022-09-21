import "./sticky.scss";
import "../intro/Intro.jsx"
import { NavLink } from 'react-router-dom';
import { useState} from "react";

export default function Sticky() {

	const[activeTab,setActiveTab] = useState(0)

	return (
		<nav id='nav' className='navbar'>
			<NavLink to="/home" onClick={()=> setActiveTab(1)} className={activeTab === 1?'link active':'link'}><div>Home</div></NavLink>
			<NavLink to="/projects" onClick={()=> setActiveTab(2)} className={activeTab === 2?'link active':'link'}><div>Projects</div></NavLink>
			<NavLink to="/about" onClick={()=> setActiveTab(3)} className={activeTab === 3?'link active':'link'}><div>About</div></NavLink>
			<NavLink to="/connect" onClick={()=> setActiveTab(4)} className={activeTab === 4?'link active':'link'}><div>Connect</div></NavLink>
		</nav>
	);
}
