import React from 'react';

import './product.styles.scss';

const Product = (props) => (
    <div className='product-container'>
        <div className='product-image-container'>
             <img alt='product-image' src={props.url}/>
        </div>
        <div className='product-info-container'>
            
        </div>
    </div>
);

export default Product;