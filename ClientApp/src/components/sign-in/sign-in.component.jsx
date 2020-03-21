import React from 'react';

import  './sign-in.styles.scss';

import '../form-input/form-input.component'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignIn extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            
        }catch(error)
        {
            console.log(error);
        }

        this.setState({email: '', password: ''})
    };

    handleChange = event => {
        const {value,name} = event.target;

        this.setState({[name]: value})
    };

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in  with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label="email"
                    >
                    </FormInput>

                    <FormInput
                        type='password'
                        name="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label="password">
                    </FormInput>
                    <div className='radio-buttons-container'>
                        <div className='radio-button'>
                            <input type="radio" value="Admin" name="user"/>
                            <span> Admin</span>
                        </div>
                        <div className='radio-button'>
                            <input type="radio" value="Buyer" name="user"/>
                            <span> Buyer</span>
                        </div>
                        <div className='radio-button'>
                            <input type="radio" value="Seller" name="user"/>
                            <span> Seller</span>
                        </div>
                    </div>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;