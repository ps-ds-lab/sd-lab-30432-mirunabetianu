import React from 'react';

import {ReactComponent as Logo} from '../../assets/olx-logo.svg';

import {Link} from 'react-router-dom';

import './header.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {connect} from "react-redux";

const Header = ({currentUser}) => (
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
                {
                    currentUser != null ? 
                    <div className='option' onClick={localStorage.removeItem("token")}>SIGN OUT</div> : <div className='option'>SIGN IN</div>   
                }
            </Link>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
