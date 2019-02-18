import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom' ;

import './App.css';
import Header from './comps/Header.js' ;
import Welcome from './comps/Welcome.js' ;
import StressOther from './comps/StressOther.js' ;
import StressLevelTest from './comps/StressLevelTest.js' ;
import Login from './comps/Login.js' ;
import Register from './comps/Register.js' ;
import Tips from './comps/Tips.js' ;

class App extends Component {
 
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <div className="div">
              <Header />
              <Route path='/' exact component={Welcome} />
              <Route path='/test/stress-level' component={StressLevelTest} />
              <Route path='/test/other' component={StressOther} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/tips' component={Tips} />
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;

              