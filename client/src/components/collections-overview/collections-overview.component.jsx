import React from 'react';
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {connect} from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";

import './collections-overview.styles.scss';

const CollectionsOverview = ({sections}) => {
    return (
        <div className='product-overview-container'>
            {sections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};

const mapStateToProps = () => {
    return createStructuredSelector({
    sections: selectDirectorySections,
})};

export default connect(mapStateToProps)(CollectionsOverview);