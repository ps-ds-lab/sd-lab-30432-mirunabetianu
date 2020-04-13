import React from 'react';
import CollectionPreview from "../collection-preview/collection-preview.component";
import {createStructuredSelector} from "reselect";
import {selectCollectionsFromSection} from "../../redux/directory/directory.selectors";
import {connect} from "react-redux";

const CollectionsOverview = ({products}) => {
    return (
        <div className='product-overview-container'>
            {/*{products.map(*/}
            {/*    ({id, ...otherProductProps}) => */}
            {/*        <CollectionPreview key = {id} {...otherProductProps}/>*/}
            {/*)}*/}
            {console.log(products(1))}
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    products: id => selectCollectionsFromSection(id)
});

export default connect(mapStateToProps)(CollectionsOverview);