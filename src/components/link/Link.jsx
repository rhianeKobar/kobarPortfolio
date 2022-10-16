import React from 'react';
import './link.scss'
import FeatherIcon from 'feather-icons-react';

function Link(props){
	return (
		<a href={props.link} rel="noreferrer" className="link" target="_blank" title={props.title}>
			<FeatherIcon icon={props.icon}/>
		</a>
	);
}

export default Link