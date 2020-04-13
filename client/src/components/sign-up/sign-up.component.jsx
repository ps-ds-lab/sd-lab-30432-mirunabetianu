import React, {useState} from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signUpStart} from "../../redux/user/user.actions";
import {connect} from 'react-redux';

const SignUp = ({signUpStart}) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();
        
        console.log(user);

        const {password, confirmPassword} = user;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({firstName, lastName, phone, email, username, password});
    };

    const handleChange = event => {
        const {name, value} = event.target;

        setUser({...user, [name]: value});
    };

    const {firstName, lastName, phone, email, username, password, confirmPassword} = user;
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Register completing the form below</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange={handleChange}
                    label='First Name'
                    required
                >
                </FormInput>

                <FormInput
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={handleChange}
                    label='Last Name'
                    required
                >
                </FormInput>

                <FormInput
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                >
                </FormInput>

                <FormInput
                    type='text'
                    name='phone'
                    value={phone}
                    onChange={handleChange}
                    label='Phone'
                    required
                >
                </FormInput>

                <FormInput
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleChange}
                    label='Username'
                    required
                >
                </FormInput>

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                >
                </FormInput>

                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                >
                </FormInput>
                <div className='buttons'>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </div>
            </form>
        </div>
    )

};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);