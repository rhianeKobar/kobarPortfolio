import "./global.scss";
import {
  BrowserRouter as Router,
	Routes,
  Route,
	Navigate,
} from "react-router-dom";
import Intro from "./components/intro/Intro"
import Sticky from "./components/sticky/Sticky"
import Connect from "./components/connect/Connect"
import Projects from "./components/projects/Projects"
import About from "./components/about/About"

function App() {
  return (
		<Router>
			<div id='app' className="App">
				<Sticky/>	
				<div className="sections">
						<Routes>
							<Route exact path="/" element={<Navigate to="/home"/>}/>
							<Route exact path="/home" element={<Intro/>}/>
							<Route path="/projects" element={<Projects/>}/>
							<Route path="/about" element={<About/>}/>
							<Route path="/connect" element={<Connect/>}/>
						</Routes>
				</div>
			</div>
		</Router>
  );
}

export default App;
