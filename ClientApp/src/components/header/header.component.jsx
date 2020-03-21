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
            <Link className='link-container' to="/explore">
                <div className='option'>EXPLORE</div>
            </Link>
            <Link className='link-container' to="/contact">
                <div className='option'>CONTACT</div>
            </Link>
            <Link className='link-container' to="/signin">
                <div className='option'>MY ACCOUNT</div>
            </Link>
        </div>
    </div>
);

export default Header;
