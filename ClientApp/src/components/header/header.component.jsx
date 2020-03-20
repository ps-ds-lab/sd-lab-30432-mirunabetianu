import React from 'react';

import {ReactComponent as Logo} from '../../assets/olx-logo.svg';

import {Link} from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header-container'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <div className='option'>SHOP</div>
            <div className='option'>CONTACT</div>
            <div className='option'>SIGN IN</div>
        </div>
    </div>
);

export default Header;
