import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, products}) => {
    return (
        <div className='collection-preview-container'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    products
                        .filter((product,idx) => idx < 4)
                        .map((product) => (<CollectionItem key = {product.id} product={product}/>))
                }
            </div>
        </div>
    );
};

export default CollectionPreview;