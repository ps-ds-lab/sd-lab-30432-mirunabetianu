import React from 'react';
import emailjs from 'emailjs-com';

import './contact.styles.scss';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";


class Contact extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            email: '',
            subject: '',
            message: ''
        }
    }

    handleSubmit = () => {

        emailjs.sendForm('default_service', 'template_OviKN1PO', this.state, 'user_4vGqjGZ0GgBKIowDcV8sM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    handleChange = event => {
        const {value,name} = event.target;

        this.setState({[name]: value})
    };

    render(){
        return(
            <div className='contact-container'>
                <h2>CONTACT</h2>
                
                <span>If you have any concerns or if you want to become an advertiser, contact us using the form below</span>
                
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
                        type='text'
                        name="subject"
                        value={this.state.subject}
                        required
                        handleChange={this.handleChange}
                        label="subject"
                    >
                    </FormInput>

                    <FormInput
                        type='text'
                        name="message"
                        value={this.state.message}
                        required
                        handleChange={this.handleChange}
                        label="message"
                    >
                    </FormInput>
                    
                    <div className='buttons'>
                        <CustomButton type='submit'>Contact Us</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;