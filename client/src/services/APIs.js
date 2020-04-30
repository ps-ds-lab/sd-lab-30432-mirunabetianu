import axios from 'axios';

export function addProductApi(product){
    return axios.post(' https://localhost:5001/api/products', product);
}

export function signInApi(authentication){
    return axios.post(' https://localhost:5001/api/signin', authentication);
}

export function signUpApi(user) {
    return axios.post('https://localhost:5001/api/users', user);
}

export async function getProductsAPI(id){
    const result = await axios.get(`https://localhost:5001/api/products?categoryId=${id}`);
    
    return result.data;
}

export async function getAdsAPI(){
    const result = await axios.get('https://localhost:5001/api/ads');

    return result.data;
}

export async function getCategoriesAPI(){
    const result = await axios.get("https://localhost:5001/api/categories");

    const categories = result.data;
    return  categories.map(
        category =>  ({...category, products: []})
    );
}