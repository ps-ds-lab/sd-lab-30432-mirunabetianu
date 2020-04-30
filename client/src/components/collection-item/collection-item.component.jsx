import React from 'react';

import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({product}) => (
    <div className='item-container'>
        <div className='item-image-container'>
             <img alt='product' src={product.imageUrl}/>
             <CustomButton className='buy-button' inverted>BUY</CustomButton>
        </div>
        <div className='item-info-container'>
            <div>Name: {product.name}</div>
            <div>Price: {product.price} &#8364;</div>
            <div>Description: {product.description}</div>
            <div>Rating: {product.rating}</div>
            <div>Sold by: {product.seller}</div>
        </div>
    </div>
);

export default CollectionItem;