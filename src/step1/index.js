import React, { Component } from 'react';

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

class Step1 extends Component {
    render() {
        return (
            <div>
                <Clock/>
                <Toggle/>
                <Popper/>
                <LoginControl/>
                <Warning/>
                <Blogs/>
                <NameForm/>
                <EssayForm/>
                <FlavorForm/>
                <Reservation/>
                <NameForm2/>
                <Calculator/>
                <SignUpDialog/>
                <FilterTable/>
            </div>
        );
    }
}

export default Step1;