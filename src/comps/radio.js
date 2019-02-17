import React from 'react' ;

import './css/radio.css' ;

const Radio = (props) => {
	return (
		<div className="box">
			<div> <input type="radio" name="choice"/> </div>
			<p className="ch"> {props.text} </p>
		</div> 
		) ;
}

export default Radio ;