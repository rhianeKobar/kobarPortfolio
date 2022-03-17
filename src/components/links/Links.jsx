import './links.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import FeatherIcon from 'feather-icons-react';
import PDF from "../../Resources/SRSalazarCV.pdf"

function Link(props){
	return (
		<Tippy content={props.content} className="tippy">
			<a href={props.link} rel="noreferrer" className="link" target="_blank">
				<FeatherIcon icon={props.icon}/>
			</a>
		</Tippy>
	);
}

export default function Links() {
	return ( 
		<div className="links">
			<Link link="https://www.linkedin.com/in/shakira-salazar-7b82b520/" content="LinkedIn" icon="linkedin"/>
			<Link link="https://github.com/rhianeKobar" content="Github" icon="github"/>
			<Link link={PDF} content="CV" icon="file"/>
		</div>	
	);
}
