import React from 'react';

import './collection.styles.scss';

import {connect} from 'react-redux';


import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollectionsFromSection} from "../../redux/directory/directory.selectors";
import {createStructuredSelector} from "reselect";

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return(
        <div className='collection-page'>
            <h2 className={title}>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} product={item}/>)
                }
            </div>
        </div>
    );
};

export const mapStateToProps = createStructuredSelector({
    collection: id => selectCollectionsFromSection(id)
});


export default connect(mapStateToProps)(CollectionPage);