import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/step1"> step1 </Link>
        <Link to="/home"> home </Link>
      </div>
    );
  }
}

export default App;
