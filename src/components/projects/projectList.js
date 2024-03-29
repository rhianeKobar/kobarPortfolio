import thermostatImg from "../../Resources/thermostat.png"
import typingGameImg from "../../Resources/typingGame.png"
import iobookImg from "../../Resources/iobookImg.png"
import kickaboutImg from "../../Resources/kickabout.png"
import todoloolooImg from "../../Resources/todolooloo.png"
import recipeaceImg from "../../Resources/recipeace.gif"
import chitchatImg from "../../Resources/chitchat.png"

const ProjectList = [
	{
		id: 1,
		name:"Recipeace - in progress",
		description: "Have you ever wondered what to cook for dinner and needed some inspiration? This is the webapp for you! Just add the ingredients you have at home and Recipeace will suggest recipes you can make right now!",
		img: recipeaceImg,
		code:"https://github.com/rhianeKobar/todolooloo",
		tools:"ReactJS, Redux, TailwindCSS, Figma, SpoonacularAPI"
	},
	{
		id: 2,
		name:"Chit-chat" ,
		description: "A clone of the app Lex. Ever wanted a social media app that only had your friends on it? Well this is Chit-chat, enjoy! ",
		img: chitchatImg,
		code:"https://github.com/rhianeKobar/QTIPoC-phrases-typing-game",
		tools:"ReactJS, Firebase, TailwindCSS, Figma",
		url:"https://chit-chat-dba64.web.app/"
	},
	{
		id: 3,
		name:"QTIPoC Typing Game" ,
		description: "An educational typing game that helps you learn phrases related to the QTIPoC(Queer, Trans, Intersex, People of Colour) community and also give your typing speed and average typing speed of all the phrases you've typed. This was a project I built for fun and it was inspired by wanting to educate people about my communities.",
		img: typingGameImg,
		code:"https://github.com/rhianeKobar/QTIPoC-phrases-typing-game",
		tools:"JavaScript, HTML, CSS, Figma, Purple Rain Collective glossary",
		url:"https://rhianekobar.github.io/QTIPoC-phrases-typing-game/"
	},
	{
		id: 3,
		name:"KickAbout",
		description: "A webapp to make football more accessible to everyone outside of a traditional male audience. KickAbout is the final project made during my time at Maker's Academy Bootcamp. We build this project as part of an agile team in an effort to create community through sport.",
		img: kickaboutImg,
		code:"https://github.com/lildann/kickabout",
		tools:"Ruby on Rails, SCSS, GoogleMaps API, PostgreSQL, Figma"
	},
	{
		id: 4,
		name:"Thermostat",
		description: "A thermostat app that allows you to check the temperature in your chosen city using the Open Weather API and adjust the thermostat accordingly.",
		img: thermostatImg,
		code:"https://github.com/rhianeKobar/thermostat",
		tools:"JavaScript, HTML, CSS, OpenWeather API",
		url:"https://rhianekobar.github.io/thermostat/"
	},
	{
		id: 5,
		name:"Todolooloo",
		description: "A classic todo webapp that stores the list locally on your device so you can take it on the go!",
		img: todoloolooImg,
		code:"https://github.com/rhianeKobar/todolooloo",
		tools:"ReactJS, Bootstrap, Figma",
		url:"https://rhianekobar.github.io/todolooloo/"
	},
	{
		id: 6,
		name:"IOBook",
		description: "IOBook is a social media platform for developers! This project was build with an Agile team during my time at the Maker's Academy bootcamp.",
		img: iobookImg,
		code:"https://github.com/tomal02/iobook",
		tools: "Ruby on Rails, PostgreSQL, CSS, Figma"
	},
]

export default ProjectList;


