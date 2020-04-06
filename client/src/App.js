import React from 'react';

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

import { selectCurrentUser } from './redux/user/user.selectors';
import {createStructuredSelector} from "reselect";
import {setCurrentUser} from "./redux/user/user.actions";

class App extends React.Component {

    componentDidMount() {
        const { setCurrentUser } = this.props;

        const token = localStorage.getItem("token");
        console.log(token);

        token ? setCurrentUser(token) : setCurrentUser();
    }
    
    render() {
        
       return(
           <div>
               <Header/>

               <Switch>
                   <Route exact path="/" component={Homepage}/>
                   <Route exact path='/signin' render= {()=> this.props.currentUser ? (<Redirect to='/'/>): (<SignInAndOut/>)}/>
                   <Route path="/contact" component={Contact}/>
                   <Route path="/explore" component={Explore}/>
                   <Route path="/admin" component={Admin}/>
                   <Route path="/advertiser" component={Advertiser}/>
               </Switch>

           </div>
       );
   }
   
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
