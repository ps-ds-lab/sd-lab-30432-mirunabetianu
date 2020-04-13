import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

const Explore = ({ match }) => {
    return (
        <div className='explore-container'>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    );
};

export default Explore;