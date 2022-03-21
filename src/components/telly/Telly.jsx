import "./telly.scss";
import React from 'react'
import Axios  from "axios"
import Wave from "../../Resources/blackHandWave.png"
import { useState,useRef, useEffect} from "react"
import FeatherIcon from 'feather-icons-react'
import giphyBadge from "../../Resources/Poweredby_640px_Badge.gif"

export default function Telly() {
	const [clicked, setClicked] = useState(false)
	const [imgs, setImgs] = useState([Wave])
	const [channel, setChannel] = useState(0)

	const prevBtn = useRef(null)
	const nextBtn = useRef(null)

	const getGif = () => {
		const giphyAPIKey = 'Y1ZiOjpPWYQ5YZNYfkupuzx7e72ekLZa'
		const giphyURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyAPIKey}&tag=hello&rating=g`
		
		return Axios.get(giphyURL).then(response =>{
			return response.data.data.images.original.url
		})
	}
	
	const pushGifUrl = (gifUrl) => {
		setImgs(prevImgs => [
			...prevImgs, gifUrl
		])
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
		}else{
			getGif().then((res)=>{ 
				pushGifUrl(res)
				nextChannel()
			})
		}
		setClicked(true)
	}
	
	const handlePrevBtn = () => {
		prevChannel()
		if(channel === 1){
			setClicked(false)
		}	
	}

	useEffect(()=>{},[clicked,imgs,channel])
		
	return (
		<div className='telly'>
			<div className="tv-screen">
				<img src={imgs[channel]} alt="black hand waving" className={clicked ? "fit-image" : "animate"}/>
			</div>
			<div className="tv-buttons">
				<button className="btn" ref={prevBtn} disabled={clicked ? false : true} onClick={handlePrevBtn}>
					<FeatherIcon icon='chevron-left' size='64'/>
				</button>
				<button className="btn" ref={nextBtn} onClick={handleNextBtn}>
					<FeatherIcon icon='chevron-right' size='64'/>
				</button>
			</div>
			<img src={giphyBadge} alt="powered by giphy gif" className="image"/>
		</div>
	)
}
