import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Warning from './Warning';
import Blogs from './Blogs';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Calculator';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

         <Clock />
         <Toggle />
         <LoginControl />
         <Warning />
         <Blogs />
         <NameForm />
         <EssayForm />
         <FlavorForm />
         <Reservation />
         <Calculator />
      </div>
    );
  }
}

export default App;
