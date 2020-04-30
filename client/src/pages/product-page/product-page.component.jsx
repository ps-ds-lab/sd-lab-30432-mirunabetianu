import React, {useState} from 'react';

import './product-page.styles.scss';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {connect} from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown'
import {DropdownItem} from "react-bootstrap";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {addProduct} from "../../redux/directory/directory.actions";

const ProductPage = ({sections, currentUser, addProduct}) => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        imageUrl: '',
        productCategoryId: 0,
        seller: currentUser.username
    });
    
    const [message, setMessage] = useState({msg:'Select Category'});

    const handleSubmit = async event => {
        event.preventDefault();
        
        let x = product.price;
        product.price = parseInt(x);
        
        addProduct(product);
        
        console.log(product);
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setProduct({ ...product, [name]: value})
    };
    
    const handleDropdown = event => {
        const selected_message = {
            msg: event.target.textContent.substring(0,event.target.textContent.length-1 )
        };
        
        setMessage(selected_message);
        
        let id = 0;
        sections.forEach(
            section => section.name === selected_message.msg ? id = section.id: null
        );
        
        setProduct({...product, productCategoryId: id})
    };

    const {name, price, description, imageUrl} = product;
    const {msg} = message;

    return (
        <div className='product-page-container'>
            <div className='title-container'>
                <h2>Add a product</h2>
                <h3>Fill in the form below if you have anything to sell</h3>
                <span>All the information is regarding the product</span>
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
                    type='number'
                    name="price"
                    value={price}
                    required
                    handleChange={handleChange}
                    label="Price">
                </FormInput>

                <FormInput
                    type='text'
                    name="description"
                    value={description}
                    required
                    handleChange={handleChange}
                    label="Brief description">
                </FormInput>
                <FormInput
                    type='text'
                    name="imageUrl"
                    value={imageUrl}
                    required
                    handleChange={handleChange}
                    label="Image URL">
                </FormInput>
                <div>
                    <Dropdown  className='dropdown-container'>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic"  className='dropdown-container'>
                            {msg}
                        </Dropdown.Toggle>

                        <Dropdown.Menu  className='dropdown-container'>
                            {
                                sections.map(
                                    section => <DropdownItem id="selected-item" key={section.id} onClick={handleDropdown}>{section.name} </DropdownItem>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='buttons'>
                    <CustomButton type='submit'>SUBMIT</CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
   addProduct: product => dispatch(addProduct(product)) 
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);