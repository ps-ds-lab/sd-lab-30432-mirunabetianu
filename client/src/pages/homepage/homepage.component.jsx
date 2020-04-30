import React, {useEffect, useState} from 'react';

import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";
import {fetchAdsStart, fetchCategoriesStart} from "../../redux/directory/directory.actions";
import {connect} from "react-redux";
import Carousel from 'react-bootstrap/Carousel'
import {createStructuredSelector} from "reselect";
import {selectDirectoryAds} from "../../redux/directory/directory.selectors";


const Homepage = ({fetchCategoriesStart, fetchAdsStart,ads}) => {
    const [index, setIndex] = useState(0);

    useEffect(() =>
       { fetchCategoriesStart();
           fetchAdsStart();
    },[fetchCategoriesStart,fetchAdsStart]);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <div className='homepage-container'>
            <Directory/>
            <div className='carousel-container'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    ads.map(
                        ad =>
                            <Carousel.Item key={ad.id}>
                                <img
                                    className="d-block w-100"
                                    src={ad.imageUrl}
                                    alt="slide"
                                />
                                <Carousel.Caption>
                                    <h3>{ad.name}</h3>
                                    <a href={ad.linkUrl} target="_blank" rel="noopener noreferrer">Click here for additional info</a>
                                </Carousel.Caption>
                            </Carousel.Item>
                    )
                }
            </Carousel>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    ads: selectDirectoryAds
});

const mapDispatchToProps = dispatch => ({
    fetchCategoriesStart: () => dispatch(fetchCategoriesStart()),
    fetchAdsStart: () => dispatch(fetchAdsStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);