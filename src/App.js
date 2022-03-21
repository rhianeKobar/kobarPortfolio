import "./global.scss"
import Intro from "./components/intro/Intro"
import Sticky from "./components/sticky/Sticky"
import Connect from "./components/connect/Connect"
import Projects from "./components/projects/Projects"

function App() {
  return (
    <div id='app' className="App">
			<Sticky/>	
			<div className="sections">
				<Intro/>
				<Projects/>
				<Connect/>
			</div>
    </div>
  );
}

export default App;
