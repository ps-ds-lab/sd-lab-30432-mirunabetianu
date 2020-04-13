import React from 'react';
import Category from "../category/category.component";
import {createStructuredSelector} from "reselect";
import {selectDirectorySection} from "../../redux/directory/directory.selectors";
import {connect} from "react-redux";

import './directory.styles.scss';

const Directory = ({sections}) => {
    return (
        <div className='directory-container'>
            {
                sections.map(({id,...otherSectionProps}) =>
                    <Category key = {id} {...otherSectionProps}/>
                )
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);