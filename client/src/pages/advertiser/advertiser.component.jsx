import React,{useState} from 'react';

import './advertiser.styles.scss';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {signInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";

const Advertiser = ({signInStart}) => {
    const [advertiser,setAdvertiser] = useState({username:'',password:'',role:'advertiser'});

    const handleSubmit = async event => {
        event.preventDefault();
        signInStart(advertiser);
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setAdvertiser({...advertiser,[name]: value});
    };
    
    const {username, password} = advertiser;
    return (
        <div className='advertiser-container'>
            <h2>ADVERTISER ONLY</h2>
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
                <CustomButton type='submit' onClick={handleSubmit}>Sign in</CustomButton>
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


export default connect(mapStateToProps, mapDispatchToProps)(Advertiser);