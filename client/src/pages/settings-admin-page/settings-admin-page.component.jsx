import React, {useEffect, useState} from 'react';

import './settings-admin-page.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
    addAdvertiser,
    addCategory,
    deleteCategory,
    fetchCategoriesStart,
    updateCategory
} from "../../redux/directory/directory.actions";
import {connect} from "react-redux";

const AdminPage = ({sections,fetchCategoriesStart,addCategory,deleteCategory,updateCategory, addAdvertiser}) =>{
    const [category, setCategory] = useState({name:'',imageUrl:''});
    const [editField,setEditField] = useState({nameEdit:'',imageUrlEdit:''});
    const [auxCategory, setAuxCategory] = useState({id:0,name:editField.nameEdit,imageUrl:editField.imageUrlEdit});
    const [advertiser, setAdvertiser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        username: '',
        password: '',
    });

    const handleSubmitAdvertiser = async event => {
        event.preventDefault();
        
        addAdvertiser(advertiser);
    };

    const handleChangeAdvertiser = event => {
        const {name, value} = event.target;

        setAdvertiser({...advertiser, [name]: value});
    };

    const {firstName, lastName, phone, email, username, password} = advertiser;
    
    useEffect(() =>{
        fetchCategoriesStart();
    },[fetchCategoriesStart]);

    const handleSubmit = async event => {
        event.preventDefault();

        addCategory(category);
    };

    const handleDelete = async event =>{
        event.preventDefault();

        const id = document.getElementById("id-cat").value;

        deleteCategory(id);
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setCategory({ ...category, [name]: value})
    };
    
    const handleEditField = event => {
        const {value,name} = event.target;
        
        setAuxCategory({...auxCategory,[name]:value});
    };
    
    const handleEdit = async event =>{
        event.preventDefault();

        const idX = document.getElementById("id-cat").value - 1;
        
        setAuxCategory({...auxCategory,id:idX+1});
        
        if(sections[idX] != null) {

            const field = {
                nameEdit: sections[idX].name,
                imageUrlEdit: sections[idX].imageUrl
            };

            setEditField(field);
        }
        else alert("Choose an id");
    };
    
    const handleSubmitEdit = async event =>{
        event.preventDefault();
        
        if(auxCategory.name === "") auxCategory.name = editField.nameEdit; 
        if(auxCategory.imageUrl === "") auxCategory.imageUrl = editField.imageUrlEdit;
        
        console.log(auxCategory);
        
        updateCategory(auxCategory);
    };

    const {name, imageUrl} = category;
    const {nameEdit, imageUrlEdit} = editField;

    return (
        <div className='admin-page-container'>
            <div className='add-category-container'>
                <div className='title-container'>
                    <h4>Add an category</h4>
                </div>
                <form className='form-container' onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name="name"
                        value={name}
                        required
                        handleChange={handleChange}
                        label="Name"
                    >
                    </FormInput>

                    <FormInput
                        type='text'
                        name="imageUrl"
                        value={imageUrl}
                        required
                        handleChange={handleChange}
                        label="ImageUrl"
                    >
                    </FormInput>
                    
                    <div className='buttons'>
                        <CustomButton type='submit'>SUBMIT</CustomButton>
                    </div>
                </form>
            </div>
            <div className='current-categories-container'>
                <h4>Current active categories</h4>
                <div className="categories-container">
                    {
                        sections.map(
                            section =>
                            <div className="category-details" key={section.id}>
                                <span>{section.id}</span>
                                <img className='category-image' src={section.imageUrl} alt="logo"/>
                                <span>{section.name}</span>
                            </div>
                        )
                    }
                </div>
                <div className='cat-delete'>
                    <input type='number'
                           id="id-cat"
                           name="cat"
                           min="1"
                           required/>
                    <button type='submit' onClick={handleDelete}>DELETE</button>
                    <button onClick={handleEdit}>EDIT</button>
                </div>
            </div>
            <div className='category-container-edit' >
                <form className='form-container' onSubmit={handleSubmitEdit}>
                    <FormInput
                        type='text'
                        name="name"
                        value={auxCategory.name}
                        handleChange={handleEditField}
                        label={nameEdit}
                    >
                    </FormInput>

                    <FormInput
                        type='text'
                        name="imageUrl"
                        value={auxCategory.imageUrl}
                        handleChange={handleEditField}
                        label={imageUrlEdit}
                    >
                    </FormInput>
                    <div className='buttons'>
                        <CustomButton type='submit'>FINISH EDITING</CustomButton>
                    </div>
                </form>
            </div>
            <div className='sign-up'>
                <h4 className='title'>Register an advertiser</h4>
                <form className='sign-up-form' onSubmit={handleSubmitAdvertiser}>
                    <FormInput
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={handleChangeAdvertiser}
                        label='First Name'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={handleChangeAdvertiser}
                        label='Last Name'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='text'
                        name='email'
                        value={email}
                        onChange={handleChangeAdvertiser}
                        label='Email'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='text'
                        name='phone'
                        value={phone}
                        onChange={handleChangeAdvertiser}
                        label='Phone'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='text'
                        name='username'
                        value={username}
                        onChange={handleChangeAdvertiser}
                        label='Username'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChangeAdvertiser}
                        label='Password'
                        required
                    >
                    </FormInput>
                    <div className='buttons'>
                        <CustomButton type='submit'>REGISTER THIS ADVERTISER</CustomButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

const mapDispatchToProps = dispatch => ({
    fetchCategoriesStart: () => dispatch(fetchCategoriesStart()),
    addCategory: category => dispatch(addCategory(category)),
    deleteCategory: id => dispatch(deleteCategory(id)),
    updateCategory: category => dispatch(updateCategory(category)),
    addAdvertiser: advertiser => dispatch(addAdvertiser(advertiser))
});

export default connect(mapStateToProps,mapDispatchToProps)(AdminPage);