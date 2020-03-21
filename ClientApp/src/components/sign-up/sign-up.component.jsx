import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName:'',
            email: '',
            phone:'',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try{
            
        }catch(error){
            console.error(error);
        }
    };

    handleChange = event =>{
        const {name,value} = event.target;

        this.setState({[name]: value});
    };

    render()
    {
        const {firstName,lastName,phone,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up in order to use the platform</span>

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
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;