import React, {useEffect, useState} from 'react';

import './settings-advertiser-page.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectDirectoryAds} from "../../redux/directory/directory.selectors";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {addAd, deleteAd, fetchAdsStart} from "../../redux/directory/directory.actions";
import {connect} from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import {DropdownItem} from "react-bootstrap";

const AdvertiserPage = ({ads,fetchAdsStart,addAd,deleteAd}) =>{
    const [ad, setAd] = useState({name:'',imageUrl:'',linkUrl:''});
    
    useEffect(() =>{
        fetchAdsStart();
    },[fetchAdsStart]);

    const handleSubmit = async event => {
        event.preventDefault();

        addAd(ad);
    };
    
    const handleDelete = async event =>{
        event.preventDefault();
        
        const id = document.getElementById("id-ad").value;
        
        deleteAd(id);
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setAd({ ...ad, [name]: value})
    };
    
    const {name, imageUrl, linkUrl} = ad;

    return (
        <div className='advertiser-page-container'>
            <div className='add-ad-container'>
                <div className='title-container'>
                    <h2>Add an ad</h2>
                    <h3>Fill in the form below if you have new ads</h3>
                    <span>All the information is regarding the ad</span>
                </div>
                <form className='form-container' onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name="name"
                        value={name}
                        required
                        handleChange={handleChange}
                        label="Name"
                    >
                    </FormInput>

                    <FormInput
                        type='text'
                        name="imageUrl"
                        value={imageUrl}
                        required
                        handleChange={handleChange}
                        label="ImageUrl"
                    >
                    </FormInput>

                    <FormInput
                        type='text'
                        name="linkUrl"
                        value={linkUrl}
                        required
                        handleChange={handleChange}
                        label="LinkUrl"
                    >
                    </FormInput>

                    <div className='buttons'>
                        <CustomButton type='submit'>SUBMIT</CustomButton>
                    </div>
                </form>
            </div>
            <div className='current-ads-container'>
                <h2>Current active ads</h2>
                <div>
                {
                    ads.map(ad =>
                        <Dropdown className='dropdown-container' key={ad.id}>

                            <Dropdown.Toggle variant="success" id="dropdown-basic"
                                             className='rating-dropdown-container'>
                                {ad.id}. {ad.name}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='rating-dropdown-container'>
                                <DropdownItem>LINK URL: {ad.linkUrl}</DropdownItem>
                                <DropdownItem>IMAGE URL: {ad.imageUrl}</DropdownItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </div>
                <div className='ad-delete'>
                    <h6>AD ID</h6>
                    <input type='number'
                           id="id-ad"
                           name="ad-ad"
                           min="1"
                           required/>
                    <button type='submit' onClick={handleDelete}>DELETE</button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    ads: selectDirectoryAds
});

const mapDispatchToProps = dispatch => ({
    fetchAdsStart: () => dispatch(fetchAdsStart()),
    addAd: ad => dispatch(addAd(ad)),
    deleteAd: id => dispatch(deleteAd(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(AdvertiserPage);