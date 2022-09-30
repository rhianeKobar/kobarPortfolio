import React from 'react'
import './section.scss'


export default function Section(props) {
	return (
		<div className='section'>
			<h3>{props.header}<span role="img" aria-label={props.aria}>{props.emojii}</span></h3>
			<p>{props.content}</p>
		</div>
	)
}