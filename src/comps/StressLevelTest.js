import React from 'react' ;
import { Redirect } from 'react-router-dom' ;

import './css/stressleveltest.css' ;
import Radio from './radio.js' ;

const resp = ['Mostly', 'Many Times', 'Sometimes', 'Rarely', 'Never'] ; 

const ques = [
"Do you to burst into anger/shout when questioned by family or near ones?",
"Do you have to listen to music or meditate or engage in other recreational activites to calm yourself?",
"Do you show violent behaviour(damaging/throwing things, etc) when things don't go your way?",
"Do you exercise/workout till you tire yourself out?",
"Do you want to hurt yourself physically when in distress?",
"Do you reward/ pamper yourself on your good performance?",
"Do you cry in silence?",
"Do you dance or express joy physically when you are happy?" ,
"Do you experience severe headache and/or sleeplessness regularly?",
"Do you sleep peacefully and carefree?"
] ;

class StressLevelTest extends React.Component 
{	constructor()
	{	super() ;
		this.state = {
			resp : [] ,
			count : 0 ,
		}
	}

	RadioDiv = () => {
	return resp.map((str, i) => <Radio key={i} text={str} />)
	}

	onPrevClick = () => {
		let ct  = this.state.count ;
		if (this.state.count > 0)
			{	this.setState({ count : ct-1 }) ;
			}
	}

	onNextClick = () => {
		let ct  = this.state.count ;
		if (this.state.count < 9)
			{	console.log(this.state) ;
				this.setState({count : ct+1 }) ;
			}
	}

	render()
	{	console.log(this.state) ;
		if(this.state.count <10)
		{
			return (
				<div> 
					<div className="card" >
						<h1> {ques[this.state.count]} </h1>
						<br/> <br/>
						<div>
							{this.RadioDiv()}
						</div>
						<div className="btn-con">
							<button onClick={this.onPrevClick} className="ui green button"> &lt;&nbsp;&nbsp; Previous </button>
							<button onClick={this.onNextClick} className="ui green button"> Next&nbsp;&nbsp;&gt;  </button>
						</div>
					</div>
				</div>
				) ;
		}
		else
			return <Redirect push to="/" /> 
	}
}

export default StressLevelTest ;