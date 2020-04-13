import React from 'react';

import {withRouter} from "react-router";

import './category.styles.scss';

const Category = ({imageUrl, name,history,match}) => {
    
    return (
        <div className='category-container' onClick={() => history.push(`${match.url}${name}`)}>

            <div className='image-container'>
                <img className='category-image' alt='icon' src={imageUrl}/>
            </div>

            <div className='p-container'>
                <span>{name}</span>
            </div>
        </div>
    );
};

export default withRouter(Category);