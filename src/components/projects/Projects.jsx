import "./projects.scss";

export default function Projects() {

	function Project(props){
		return(
			<div className="container">
				<img src={props.img} alt={props.name} className="preview" />
				<p className="description">{props.description}</p>
				<button className="btn" onClick={()=> props.url}>View code</button>
			</div>
		);
	}

	return (
		<div className="projects" id="projects">
		</div>
	);
}
