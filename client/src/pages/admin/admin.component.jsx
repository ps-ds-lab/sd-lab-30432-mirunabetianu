import React, {useState} from 'react';

import './admin.styles.scss';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {signInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";

const Admin = ({signInStart}) => {
    const [admin,setAdmin] = useState({username:'',password:'',role:'admin'});

    const handleSubmit = async event => {
        event.preventDefault();

        signInStart(admin);
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setAdmin({...admin,[name]: value});
    };

    const {username, password} = admin;
    return (
        <div className='admin-container'>
            <h2>ADMIN ONLY</h2>
            <span>Sign in  with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name="username"
                    value={username}
                    required
                    handleChange={handleChange}
                    label="username"
                >
                </FormInput>

                <FormInput
                    type='password'
                    name="password"
                    value={password}
                    required
                    handleChange={handleChange}
                    label="password">
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
    signInStart: (username, password,role) => dispatch(signInStart(username,password,role))
});


export default connect(mapStateToProps, mapDispatchToProps)(Admin);