import React from 'react';

import './advertiser.styles.scss';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

class Advertiser extends React.Component{
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
            console.log(email + ' ' + password);
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
            <div className='advertiser-container'>
                <h2>ADVERTISER ONLY</h2>
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
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default Advertiser;