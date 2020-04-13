import React, {useState} from 'react';

import './sign-in.styles.scss';

import '../form-input/form-input.component'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {connect} from "react-redux";

import {signInStart} from '../../redux/user/user.actions';

const SignIn = ({signInStart}) => {
    const [user, setUser] = useState({username: '', password: ''});

    const handleSubmit = async event => {
        event.preventDefault();
        
        console.log(user);
        
        signInStart(user);
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setUser({ ...user, [name]: value });
    };

    const {username, password} = user;

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in  with your username and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name="username"
                    value={username}
                    required
                    handleChange={handleChange}
                    label="Username"
                >
                </FormInput>

                <FormInput
                    type='password'
                    name="password"
                    value={password}
                    required
                    handleChange={handleChange}
                    label="Password">
                </FormInput>
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                </div>
            </form>
        </div>
    );

};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    signInStart: (username, password) => dispatch(signInStart(username,password))
});


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);