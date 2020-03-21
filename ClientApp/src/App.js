import React, { Component } from 'react';

import './custom.css'

import Header from './components/header/header.component';
import Homepage from "./pages/homepage/homepage.component";
import {Switch} from "react-router-dom";
import Route from "react-router-dom/Route";
import SignInAndOut from "./pages/sign-in-and-up/sign-in-and-up.component";
import Contact from "./pages/contact/contact.component";
import Explore from "./pages/explore/explore.component";

const App = () => (
    <div>
        <Header/>
        
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/signin' component={SignInAndOut}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/explore' component={Explore}/>
        </Switch>
    </div>
);

export default App;