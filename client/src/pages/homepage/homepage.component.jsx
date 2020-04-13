import React, {useEffect} from 'react';

import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";
import {fetchCategoriesStart} from "../../redux/directory/directory.actions";
import {connect} from "react-redux";

const Homepage = ({fetchCategoriesStart}) => {
    useEffect(() =>
       { fetchCategoriesStart();
    },[fetchCategoriesStart]);
    
    return (
        <div className='homepage-container'>
            <Directory/>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCategoriesStart: () => dispatch(fetchCategoriesStart())
});

export default connect(null,mapDispatchToProps)(Homepage);