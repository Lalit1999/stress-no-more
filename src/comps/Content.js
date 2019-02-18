import React from 'react' ;

const Content = (props) => {
	return (
		<div className="left">
			<h3><strong> {props.heading} </strong></h3>
			<p> {props.desc} </p>
		</div>
		) ; 
}

export default Content ;