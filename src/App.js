import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom' ;

import './App.css';
import Welcome from './comps/Welcome.js'

class App extends Component {
 
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Welcome} />
                          </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;

// <Route path='/test/stress-level' component={StressLevelTest} />
//               <Route path='/test/other' component={StressOther} />
//               <Route path='/login' component={Login} />
//               <Route path='/register' component={Register} />
//               <Route path='/tips' component={Tips} />
