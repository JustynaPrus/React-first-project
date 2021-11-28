import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Articles from '../pages/Articles';
import Opinions from '../pages/Opinions';
import Contact from '../pages/Contact';
import Error from '../pages/Error';

const Page = () => {
    return(
        <>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/articles' component={Articles}/>
            <Route path='/opinions' component={Opinions}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/' component={Error}/>
          </Switch>
        </>
    );
}

export default Page;