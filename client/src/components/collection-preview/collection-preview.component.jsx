import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";

import './collection-preview.styles.scss'

const CollectionPreview = ({name, products}) => {
    return (
        <div className='collection-preview-container'>
            <h1 className='title'>{name.toUpperCase()}</h1>
            <div className='preview'>
                {
                    products
                        .filter((product,idx) => idx < 3)
                        .map((product) => (<CollectionItem key = {product.id} product={product}/>))
                }
            </div>
        </div>
    );
};

export default CollectionPreview;