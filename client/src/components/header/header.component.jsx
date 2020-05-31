import React from 'react';

import {ReactComponent as Logo} from '../../assets/olx-logo.svg';

import {Link} from 'react-router-dom';

import './header.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {connect} from "react-redux";
import { signOutStart } from '../../redux/user/user.actions';


const Header = ({currentUser,signOutStart}) => (
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
            <div className='link-container'>
                {
                    currentUser ?
                        (<div className='option' onClick={signOutStart}>SIGN OUT</div>)
                        :
                       ( <Link className='link-container' to="/signin">SIGN IN</Link>)
                }
            </div>
            <div className='link-container'>
                {
                    currentUser && currentUser.role === 'user'?
                        (<Link className='link-container' to="/product">ADD PRODUCT</Link>)
                        :
                        null
                }
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
