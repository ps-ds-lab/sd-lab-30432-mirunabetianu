import React from 'react';

import  './sign-in.styles.scss';

import '../form-input/form-input.component'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import axios from "axios";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {connect} from "react-redux";
import {setCurrentUser} from "../../redux/user/user.actions";

class SignIn extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }
    

    handleSubmit = async event => {
        event.preventDefault();

        const {username, password} = this.state;

        try{
            const authentication = {
                 username: username,
                 password: password
            };
            
            axios.post(' https://localhost:5001/api/signin', authentication)
                 .then(res => {
                     const token = res.data.token;
                     localStorage.setItem("token", token);
                     setCurrentUser(token);
                 })
                 .catch(() => {
                     alert("Incorrect password/username. Try again!")
                 });

            this.setState({username:'',password:''});
        }catch(error)
        {
            console.log(error);
        }

        this.setState({username: '', password: ''})
    };

    handleChange = event => {
        const {value,name} = event.target;

        this.setState({[name]: value})
    };

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in  with your username and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name="username"
                        value={this.state.username}
                        required
                        handleChange={this.handleChange}
                        label="Username"
                    >
                    </FormInput>

                    <FormInput
                        type='password'
                        name="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label="Password">
                    </FormInput>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                    </div>
                </form>
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


export default connect(mapStateToProps,mapDispatchToProps())(SignIn);