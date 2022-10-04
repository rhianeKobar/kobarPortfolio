import "./intro.scss";
import Telly from "../telly/Telly";
import giphyBadge from "../../Resources/Poweredby_640px_Badge.gif"


export default function Intro() {
	return (
		<div className="intro" id='intro' data-testid="intro">
			<h1>Welcome to Now IT Works Tech!</h1>
			<Telly/>
			<img src={giphyBadge} alt="powered by giphy gif" className="image"/>
		</div>
	);
}
