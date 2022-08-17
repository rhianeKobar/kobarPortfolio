import "./telly.scss";
import React from 'react'
import Axios  from "axios"
import Wave from "../../Resources/blackHandWave.png"
import { useState,useRef, useEffect} from "react"
import FeatherIcon from 'feather-icons-react'
import giphyBadge from "../../Resources/Poweredby_640px_Badge.gif"

export default function Telly() {
	const [clicked, setClicked] = useState(false)
	const [altDescription, setAltDescription] = useState(false)
	const [imgs, setImgs] = useState([Wave])
	const [channel, setChannel] = useState(0)

	const prevBtn = useRef(null)
	const nextBtn = useRef(null)

	const getGif = () => {
		const giphyAPIKey = 'Y1ZiOjpPWYQ5YZNYfkupuzx7e72ekLZa'
		const giphyURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyAPIKey}&tag=hello&rating=g`

		return Axios.get(giphyURL).then(response =>{
			return response.data.data.images.original.url
		}).catch(e => alert("If you wanna see what happens you'll have to disable your adblocker..it's totally worth it!"))
	}
	
	const pushGifUrl = (gifUrl) => {
		if(gifUrl != null){
			setImgs(prevImgs => [...prevImgs, gifUrl])
			nextChannel()
			setAltDescription(true)
  		setClicked(true)	
		}
	}

	const nextChannel = () =>{
		setChannel(prevChannel => prevChannel + 1)
	}

	const prevChannel = () =>{
		setChannel(prevChannel => prevChannel - 1)
	}

	const handleNextBtn = () => {
		if(imgs.length > channel + 1){
			nextChannel()
  		setClicked(true)
		}else{
			getGif().then((res)=>{ 
				pushGifUrl(res)
			})		
		}
	}
	
	const handlePrevBtn = () => {
		prevChannel()
		if(channel === 1){
			setClicked(false)
			setAltDescription(false)
		}	
	}

	useEffect(()=>{},[clicked,altDescription,imgs,channel])
		
	return (
		<div className='telly'>
			<div className="tv-screen">
				<img src={imgs[channel]} alt={altDescription ? "random gif representing 'hello'" : "animated image of the hand waving emoji"} className={clicked ? "fit-image" : "animate"}/>
			</div>
			<div className="tv-buttons">
				<button className="btn" ref={prevBtn} disabled={clicked ? false : true} onClick={handlePrevBtn}  title='previous button'>
					<FeatherIcon icon='chevron-left' size='64' className='featherIcon'/>
				</button>
				<button className="btn" ref={nextBtn} onClick={handleNextBtn} title='next button'>
					<FeatherIcon icon='chevron-right' size='64' className='featherIcon'/>
				</button>
			</div>
			<img src={giphyBadge} alt="powered by giphy gif" className="image"/>
		</div>
	)
}
