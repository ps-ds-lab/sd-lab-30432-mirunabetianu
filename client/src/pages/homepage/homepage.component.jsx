import React from 'react';
import {Category} from "../../components/category/category.component";
import axios from 'axios';

import './homepage.styles.scss';

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        }
    }
    
    componentDidMount() {
        const self = this;
        axios.get("https://localhost:5001/api/categories")
            .then(function (response) {
                console.log(response.data);
                self.setState({categories: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    render() {
        return (
            <div className='homepage-container'>
                <div className='items'>
                    {
                        this.state.categories.map(
                            category => <Category key={category.id} url={category.imageUrl} >{category.name}</Category>
                        )
                    }
                </div>
            </div>
        );
    }
}
    


export default Homepage;