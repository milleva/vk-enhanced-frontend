import React, { Component } from 'react';
import logo from './images/badminto.png';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import News from './components/News'
import Contact from './components/Contact'
import Events from './components/Events'
import Sponsors from './components/Sponsors'
import Racketlon from './components/Racketlon'
import Join from './components/Join'
import Training from './components/Training'
import Club from './components/Club'
import Navbar from './components/CustomNavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          <span className="App-title">
              Sulkapalloseura Voittamisen Kulttuuri ry
          </span>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
          <Router>
              <div>
                  <Navbar/>
                  <Route exact path="/" component={Home}/>
                  <Route path="/news" component={News}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/events" component={Events}/>
                  <Route path="/collaborating" component={Sponsors}/>
                  <Route path="/racketlon" component={Racketlon}/>
                  <Route path="/becomeamember" component={Join}/>
                  <Route path="/training" component={Training}/>
                  <Route path="/vkry" component={Club}/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
