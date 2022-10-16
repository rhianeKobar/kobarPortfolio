import React from 'react'
import './section.scss'


export default function Section(props) {
	return (
		<div className='about-section' title={props.title}>
			<h3>{props.title}<span role="img" aria-label={props.aria}>{props.emojii}</span></h3>
			<p>{props.content}</p>
		</div>
	)
}