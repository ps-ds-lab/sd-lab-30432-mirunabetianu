import React, {useState} from 'react';

import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import Dropdown from "react-bootstrap/Dropdown";
import {DropdownItem} from "react-bootstrap";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {addOrder, updateProduct} from "../../redux/directory/directory.actions";
import {connect} from "react-redux";

const CollectionItem = ({product,addOrder,currentUser,updateProduct}) => {
    const [rating, setRating] = useState(0);
    const [message,setMessage] = useState('Leave a rating');
    
    const handleBuy = async event =>{
        event.preventDefault();
        
        if(currentUser != null) {
            const order = {
                total: product.price,
                orderBuyerId: currentUser.username,
                orderSellerId: product.seller,
                orderProductId: product.id.toString()
            };

            addOrder(order);
            alert("Order placed!");
        }else
            alert("You must be logged in!");
    };
    
    const handleDropdown = event => {
        console.log(event.target.textContent);
        setMessage(event.target.textContent);
        setRating(event.target.textContent);
    }; 
    
    const handleRating = async event => {
        event.preventDefault();
        
        const rate = (parseFloat(rating) + product.rating)/2;

        product.rating = Math.ceil(rate);
        
        console.log(product);
        
        updateProduct(product);
    };
    
    const sections = [0,1,2,3,4,5];
    
    return(
    <div className='item-container'>
        <div className='item-image-container'>
             <img alt='product' src={product.imageUrl}/>
             <CustomButton className='buy-button' inverted onClick={handleBuy}>BUY</CustomButton>
        </div>
        <div className='item-info-container'>
            <div>Name: {product.name}</div>
            <div>Price: {product.price} &#8364;</div>
            <div>Description: {product.description}</div>
            <div>Current rating: {product.rating}</div>
            <div>Sold by: {product.seller}</div>
            <div>
                <Dropdown  className='dropdown-container'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic"  className='rating-dropdown-container'>
                        {message}
                    </Dropdown.Toggle>

                    <Dropdown.Menu  className='rating-dropdown-container'>
                        {
                            sections.map(
                                section => <DropdownItem id="selected-item" key={section} onClick={handleDropdown}>{section} </DropdownItem>
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
                <button className='button' onClick={handleRating}>SUBMIT</button>
            </div>
        </div>
    </div>
)};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    addOrder: order => dispatch(addOrder(order)),
    updateProduct: product => dispatch(updateProduct(product))
});


export default connect(mapStateToProps,mapDispatchToProps)(CollectionItem);