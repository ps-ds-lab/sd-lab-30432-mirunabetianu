import React, { Component } from 'react';

import './custom.css'

import Header from './components/header/header.component';
import Homepage from "./pages/homepage/homepage.component";

const App = () => (
    <div>
        <Header/>
        <Homepage/>
    </div>
);

export default App;