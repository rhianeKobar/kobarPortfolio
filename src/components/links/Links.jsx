import './links.scss';
import Link from '../link/Link';
import PDF from "../../Resources/SRSalazarCV.pdf"

export default function Links() {
	return ( 
		<div className="links" title="links">
			<Link link="https://www.linkedin.com/in/shakira-salazar-7b82b520/" content="LinkedIn" icon="linkedin" title='link to linkedIn'/>
			<Link link="https://github.com/rhianeKobar" content="Github" icon="github" title='link to GitHub'/>
			<Link link={PDF} content="CV" icon="file"  title='link to cv/resume'/>
		</div>	
	);
}
