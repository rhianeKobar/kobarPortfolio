import "./global.scss"
import Intro from "./components/intro/Intro"
import Sticky from "./components/sticky/Sticky"
import Connect from "./components/connect/Connect"
import Projects from "./components/projects/Projects"
import About from "./components/about/About"

function App() {
  return (
    <div id='app' className="App">
			<Sticky/>	
			<div className="sections">
				<Intro/>
				<Projects/>
				<About/>
				<Connect/>
			</div>
    </div>
  );
}

export default App;
