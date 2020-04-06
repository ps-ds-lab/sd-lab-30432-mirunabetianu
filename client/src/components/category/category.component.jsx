import React from 'react';

import './category.styles.scss';

export const Category = (props) => (
    <div className='category-container'>
        
        <div className='image-container'>
            <img className='category-image' alt='icon' src={props.url}/>
        </div>
       
        <div className='p-container'>
            <span>{props.children}</span>
        </div>
    </div>
);
