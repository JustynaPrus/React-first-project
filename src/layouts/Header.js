import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../styles/Header.css';

import beach from '../images/beach.jpg';
import buildings from '../images/buildings.jpg';
import italy from '../images/italy.jpg';
import mountains from '../images/mountains.jpg';

const Header = () => {
    return(
        <>
            <Switch>
                <Route path='/' exact render={()=> (
                    <img src={beach} alt="beach" />)}/>
                <Route path='/articles' render={()=> (
                    <img src={buildings} alt="buildings" />)}/>
                <Route path='/opinions' render={()=> (
                    <img src={italy} alt="italy" />)}/>
                <Route path='/contact' render={()=> (
                    <img src={mountains} alt="mountains" />)}/>
                    <Route render={()=> (
                    <img src={beach} alt="beach" />)}/>
            </Switch>   
        </>
    );
}

export default Header;