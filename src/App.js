import "./global.scss"
import Home from "./components/home/Home"
import Connect from "./components/connect/Connect"
import Projects from "./components/projects/Projects"

function App() {
  return (
    <div id='app' className="App">
			<Home/>
			<Projects/>
			<Connect/>			
    </div>
  );
}

export default App;
