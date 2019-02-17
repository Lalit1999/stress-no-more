import React from 'react' ;
import {Link} from'react-router-dom' ;

import './css/header.css' ;

const Header = () => {
	return (
		<div className="ui secondary pointing menu" id="bar"> 
			<Link to="/" className="item link"> Stress-No-More </Link> 
			<div className = "ui right secondary menu">
				<Link className="item link" to='/'> Home </Link>
				<Link className="item link" to='/tips'> Tips </Link>
				<Link className="item link" to='/tests'> Tests </Link>
			</div>
		</div>
		) ; 
}

export default Header ;