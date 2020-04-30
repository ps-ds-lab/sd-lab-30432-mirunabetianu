import React from 'react';

import './collection.styles.scss';

import {connect} from 'react-redux';


import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollectionsFromSection} from "../../redux/directory/directory.selectors";

const CollectionPage = ({section}) => {
    const {name,products} = section;
    return(
        <div className='collection-page'>
            <h2 className='title'>{name}</h2>
            <div className='items'>
                {
                    products.map(item => (<CollectionItem key={item.id} product={item}/>))
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) =>({
    section: selectCollectionsFromSection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CollectionPage);