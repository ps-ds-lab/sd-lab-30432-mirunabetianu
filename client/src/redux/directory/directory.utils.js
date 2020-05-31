import {
    addAdApi, addAdvertiserApi,
    addCategoryApi,
    addOrderApi,
    addProductApi,
    deleteAdApi,
    deleteCategoryApi, updateCategoryApi, updateProductApi
} from "../../services/APIs";

export const addProduct = async (product) => {
    try {
        await addProductApi(product);
        return true;
    } catch (error) {
        return error.message;
    }
};

export const addAd = async (ad) => {
   try{
       await addAdApi(ad);
       return true;
   }catch(error)
   {
       return error.message;
   }    
};

export const deleteAd = async (id) =>{
    try{
        await deleteAdApi(id);
        return true;
    }catch(error)
    {
        return error.message;
    }
};

export const addOrder = async (order) =>{
    try{
        await addOrderApi(order);
        return true;
    }catch(error)
    {
        return error.message;
    }
};

export const addCategory = async (category) =>{
    try{
        await addCategoryApi(category);
        return true;
    }catch(error)
    {
        return error.message;
    }
};

export const deleteCategory = async (id) =>{
    try{
        await deleteCategoryApi(id);
        return true;
    }catch(error)
    {
        return error.message;
    }
};

export const updateCategory = async (category) =>{
    try{
        await updateCategoryApi(category);
        return true;
    }catch(error){
        return error.message;
    }
};

export const addAdvertiser = async (advertiser) =>{
    try{
        await addAdvertiserApi(advertiser);
        return true;
    }catch(error)
    {
        return error.message;
    }
};

export const updateProduct = async (product) =>{
    try{
        await updateProductApi(product);
        return true;
    }catch(error){
        return error.message;
    }
};

