import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import axios from 'axios';

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName:'',
            email: '',
            phone:'',
            username: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {firstName, lastName, email, phone,username,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }


        const user = {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Phone: phone,
            Username: username,
            Password: password,
            IsSeller: 0,
            IsBuyer: 0
        };      

        axios.post('https://localhost:5001/api/users', user)
            .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            .catch(error => {
                    console.log(error.response);
                });

    };

    handleChange = event =>{
        const {name,value} = event.target;

        this.setState({[name]: value});
    };

    render()
    {
        const {firstName,lastName,phone,email,username,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Register completing the form below</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='firstName'
                        value = {firstName}
                        onChange = {this.handleChange}
                        label =  'First Name'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='text'
                        name='lastName'
                        value = {lastName}
                        onChange = {this.handleChange}
                        label =  'Last Name'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='text'
                        name='email'
                        value = {email}
                        onChange = {this.handleChange}
                        label =  'Email'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='text'
                        name='phone'
                        value = {phone}
                        onChange = {this.handleChange}
                        label =  'Phone'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='text'
                        name='username'
                        value = {username}
                        onChange = {this.handleChange}
                        label =  'Username'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='password'
                        name='password'
                        value = {password}
                        onChange = {this.handleChange}
                        label =  'Password'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value = {confirmPassword}
                        onChange = {this.handleChange}
                        label =  'Confirm Password'
                        required
                    >
                    </FormInput>
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN UP</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;