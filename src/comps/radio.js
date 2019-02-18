import React from 'react' ;

import './css/radio.css' ;

class Radio extends React.Component
{	
	onInputClick = () => {
		this.props.record(this.props.text) ;
	}

  	render()
  	{
		return (
			<div className="box">
				<div> <input type="radio" name="choice" onClick={this.onInputClick}/> </div>
				<p className="ch"> {this.props.text} </p>
			</div> 
		) ;
	}
}

export default Radio ;