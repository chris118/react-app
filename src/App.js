import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import Clock from './Clock';
import Toggle from './Toggle';
import Popper from './Popper';
import LoginControl from './LoginControl';
import Warning from './Warning';
import Blogs from './Blogs';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import NameForm2 from './NameForm2';
import Calculator from './Calculator';
import SignUpDialog from './SignUpDialog';
import FilterTable from './FilterTable/FilterTable';
import Demo from './Demo';
import Demo2 from './Demo2';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo"/>*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<hr/>*/}


        {/*<Clock/>*/}
        {/*<Toggle/>*/}
        {/*<Popper/>*/}
        {/*<LoginControl/>*/}
        {/*<Warning/>*/}
        {/*<Blogs/>*/}
        {/*<NameForm/>*/}
        {/*<EssayForm/>*/}
        {/*<FlavorForm/>*/}
        {/*<Reservation/>*/}
        {/*<NameForm2/>*/}
        {/*<Calculator/>*/}
        {/*<SignUpDialog/>*/}
        {/*<FilterTable/>*/}
        <Demo/>
        <Demo2 messages={[{text: '111'},{text:'222'}]}/>
      </div>
    );
  }
}

export default App;
