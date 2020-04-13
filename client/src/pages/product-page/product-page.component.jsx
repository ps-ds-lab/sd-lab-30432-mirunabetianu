import React from 'react';

import './product-page.styles.scss';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import axios from "axios";

class ProductPage extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            price: '',
            description: '',
            imageUrl: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {name, price, description, imageUrl} = this.state;
        
        const product = {
            Name: name,
            Price: parseInt(price),
            Description: description,
            Rating: 0,
            ImageUrl: imageUrl,
            ProductCategory: 0,
            SellerId: 0
        };

        axios.post('https://localhost:5001/api/products', product)
             .then(res => {
                 console.log(res);
                 console.log(res.data);
                 alert("Product added successfully!")
             })
             .catch(error => {
                 console.log(error.response);
             });

    };

    handleChange = event => {
        const {value,name} = event.target;

        this.setState({[name]: value})
    };
    
    render() {
        return(
          <div className='product-page-container'>
              <div className='title-container'>
                  <h2>Add a product</h2>
                  <h3>Fill in the form below if you have anything to sell</h3>
                  <span>All the information is regarding the product</span>
              </div>
              <form onSubmit={this.handleSubmit}>
                  <FormInput
                      type='text'
                      name="name"
                      value={this.state.name}
                      required
                      handleChange={this.handleChange}
                      label="Name"
                  >
                  </FormInput>

                  <FormInput
                      type='number'
                      name="price"
                      value={this.state.price}
                      required
                      handleChange={this.handleChange}
                      label="Price">
                  </FormInput>

                  <FormInput
                      type='text'
                      name="description"
                      value={this.state.description}
                      required
                      handleChange={this.handleChange}
                      label="Brief description">
                  </FormInput>
                  <FormInput
                      type='text'
                      name="imageUrl"
                      value={this.state.imageUrl}
                      required
                      handleChange={this.handleChange}
                      label="Image URL">
                  </FormInput>
                  <div className='buttons'>
                      <CustomButton type='submit'>SUBMIT</CustomButton>
                  </div>
              </form>
          </div>  
        );
    }
}

export default ProductPage;