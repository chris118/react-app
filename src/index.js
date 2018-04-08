import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

import App from './App';
import Step1 from './step1';
import Home from './home';

import registerServiceWorker from './step1/registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/step1' component={Step1}/>
            <Route path='/Home' component={Home}/>
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
