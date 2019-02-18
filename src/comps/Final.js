import React from 'react' ;
import {Link} from 'react-router-dom' ;

import './css/stressleveltest.css' ;

class Final extends React.Component
{
	constructor(props)
	{	super(props) ;
		this.score = 0 ;
	}
	
	choose = (text) => {
		let ct = 0 ;
		switch(text)
		{	case "Mostly" : ct = 5 ;
							break ;
			case 'Never' : ct = 1 ;
							break ;
			case 'Many Times' : ct = 4 ;
							break ;
			case 'Sometimes' : ct = 3 ;
							break ;
			case 'Rarely' : ct = 2 ;
							break ;
			default : ct = 1 ;
		}
		return ct ;
	}

	scoreCalc = () => {
		// console.log(this.props.resp) ;
		let arr = this.props.resp.map( (r) => this.choose(r) ) ;
		for ( let i in arr)
			if ( i % 2 === 0 )
				arr[i] = arr[i]*(-1) ;
		//console.log(arr) ;
		for ( let i in arr)
			this.score += arr[i] ;
		return this.score ;
	}

	scoreMessage = () => {
		if(this.score < -1)
		{
			if (this.score < -10)
			{
				if (this.score < -15)
				{
					return (
						<div>
							<p> You have extraordinarily high stress levels </p>
							<p> You should seek Professional help as soon as possible. </p>
							<p> Keep a Calm Mind ! and Stay Positive </p> 
						</div>
						) ;	
				}
				else
				{
					return (
						<div>
							<p> You have severe stress levels </p>
							<p> You might need Professional help. </p>
							<p> Start a Positive lifestyle today so that your stress does not get worst </p> 
						</div>
						) ;	
				}
			}
			else
			{
				if(this.score < -5)
				{
					return (
						<div>
							<p> You might have upto moderate stress levels </p>
							<p> You should do some Stress-reducing exercises. You can check out our - </p>
							<Link className="tip-btn" to='/tips'> Tips </Link>
						</div>
						) ;
				}
				else
				{
					return (
						<div>
							<p> You might have mild stress levels </p>
							<p> Talking to a loved one(like family, friends, etc) should help.
								 You can check out our - </p>
							<Link className="tip-btn" to='/tips'> Tips </Link>
						</div>
						) ;
				}
			}
		}
		else
		{
			if (this.score < 10)
			{
				if(this.score < 5)
				{
					if(this.score < 1 )
					{
						return (
						<div>
							<p> Hmm! You are on the edge. </p>
							<p> Your lifestyle is neither too Stressful for you nor too positive. </p>
							<p> However this means you fall under the most vulnerable category. Check out our -</p>
							<Link className="tip-btn" to='/tips'> Tips </Link>
						</div>
						) ;
					}
					else
					{
						return (
						<div>
							<p> Nice! Your lifestyle is well-adjusted. </p>
							<p> You have trained yourself to not pay attention to the stress. </p>
							<p> Keep this up. Spread our -</p>
							<Link className="tip-btn" to='/tips'> Tips </Link>
						</div>
						) ;	
					}
				}
				else
				{
					return (
						<div>
							<p> Congratulations! You have a positive personality. </p>
							<p> You have created your lifestyle to keep you stress-free. </p>
							<p> Keep it up and be an inspiration for everyone around you. </p> 
						</div>
						) ; 
				}
			}
			else
			{
				return (
						<div>
							<p> Wow! You have a proactive personality. </p>
							<p> This is an indication of a positive lifestyle. </p>
							<p> Keep it up and be an inspiration for everyone around you. </p> 
						</div>
						) ;
			}
		}
	}

	render()
	{
		return (
			<div> 
				<div className="card" >
					<h1 className="res"> Your Score : </h1>
					<br/> <br/>
					<div className="score">
						{this.scoreCalc()}
					</div>
					<div className="message btn-con">
						{this.scoreMessage()}
					</div>
				</div>
			</div>
			) ;
	}
}

export default Final ;