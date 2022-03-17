import "./home.scss";
import Intro from "../../components/intro/Intro"
import Sticky from "../../components/sticky/Sticky"
import Links from "../../components/links/Links"

export default function Home() {
	return (
		<div className="home" id="home">
			<div className="navigation">
				<Sticky/>	
				<Links/>
			</div>
			<Intro/>
		</div>
	);
}
