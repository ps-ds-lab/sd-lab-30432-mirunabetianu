import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import {withRouter} from "react-router";
import {fetchCategoriesStart} from "../../redux/directory/directory.actions";
import {connect} from "react-redux";

const Explore = ({match,fetchCategoriesStart}) => {
    useEffect(() =>
    { fetchCategoriesStart();
    },[fetchCategoriesStart]);

    return (
        <div className='explore-container'>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:categoryId`}
                component={CollectionPageContainer}
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCategoriesStart: () => dispatch(fetchCategoriesStart())
});

export default connect(null,mapDispatchToProps)(withRouter(Explore));