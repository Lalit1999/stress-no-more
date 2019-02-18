import React from 'react' ;

import Content from './Content.js' ;
import './css/stressleveltest.css' ;
import {Contents} from './Contents.js' ;

const contentCreator = () => {
	return Contents.map((cont) => <Content heading={cont.heading} desc={cont.desc} img={cont.img}/> ) ;
}

const Tips = () => {
	return (
		<div> 
			<div className="card" >
				<h1> Tips for a Positive Lifestyle </h1>
				<br/> <br/>
				{ contentCreator() }
			</div>
		</div>
		) ;
}

export default Tips ;