import React,{useEffect} from 'react';

import './App.css'

import {Switch, Route, Redirect} from 'react-router';
import {connect} from 'react-redux';

import Header from './components/header/header.component';
import Homepage from "./pages/homepage/homepage.component";
import SignInAndOut from "./pages/sign-in-and-up/sign-in-and-up.component";
import Contact from "./pages/contact/contact.component";
import Explore from "./pages/explore/explore.component";
import Admin from "./pages/admin/admin.component";
import Advertiser from "./pages/advertiser/advertiser.component";
import ProductPage from "./pages/product-page/product-page.component";

import {createStructuredSelector} from "reselect";

import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';
import AdvertiserPage from "./pages/settings-advertiser-page/settings-advertiser-page";
import AdminPage from "./pages/settings-admin-page/settings-admin-page.component";

const App = ({currentUser, checkUserSession}) => {

    useEffect( () => {
        checkUserSession();
    },[checkUserSession]);
    
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/signin" render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndOut/>)}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/explore" component={Explore}/>
                <Route path="/admin" render={() => currentUser ? (<Redirect to='/settings-admin'/>) : (<Admin/>)}/>
                <Route path="/advertiser" render={() => currentUser ? (<Redirect to='/settings-advertiser'/>) : (<Advertiser/>)}/>
                <Route path="/settings-advertiser" render={() => currentUser ?  (<AdvertiserPage/>):(<Redirect to='/'/>)}/>
                <Route path="/settings-admin" render={() => currentUser ?  (<AdminPage/>):(<Redirect to='/'/>)}/>
                <Route path="/product" render={() => currentUser ? (<ProductPage/>) : (<Redirect to='/'/>)}/>
            </Switch>

        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
