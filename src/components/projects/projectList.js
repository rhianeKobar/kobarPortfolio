import thermostatImg from "../../Resources/thermostat.gif"
import typingGameImg from "../../Resources/qtipocTypingGame.gif"
import iobookImg from "../../Resources/iobookImg.png"
import kickaboutImg from "../../Resources/kickabout2.gif"

const ProjectList = [
	{
		id: 1,
		name:"IOBook",
		description: "A social media platform for developers!",
		img: iobookImg,
		url:"https://github.com/tomal02/iobook"
	},
	{
		id: 2,
		name:"QTIPoC Typing Game" ,
		description: "An educational typing game that helps you learn phrases related to the QTIPoC(Queer, Trans, Intersex, People of Colour) community and also give your typing speed and average typing speed of all the phrases you've typed. Inspired by being black and queer.",
		img: typingGameImg,
		url:"https://github.com/rhianeKobar/QTIPoC-phrases-typing-game"
	},
	{
		id: 3,
		name:"KickAbout",
		description: "A webapp to make football more accessible to everyone outside of a traditional male audience. Creating community through sport.",
		img: kickaboutImg,
		url:"https://github.com/lildann/kickabout"
	},
	{
		id: 4,
		name:"Thermostat",
		description: "A thermostat app that allows you to check the temperature in your chosen city using the Open Weather API and adjust the thermostat accordingly.",
		img: thermostatImg,
		url:"https://github.com/rhianeKobar/thermostat"
	},
]

export default ProjectList;