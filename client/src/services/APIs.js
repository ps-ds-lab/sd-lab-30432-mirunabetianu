import axios from 'axios';

export function addProductApi(product){
    return axios.post(' https://localhost:5001/api/products', product);
}

export function updateProductApi(product){
    return axios.put(`https://localhost:5001/api/products/${product.id}`,product);
}

export function deleteAdApi(id){
    return axios.delete( `https://localhost:5001/api/ads/${id}`,{headers: { "Authorization": "***" }})
}

export function addAdApi(ad){
    return axios.post(' https://localhost:5001/api/ads', ad);
}

export function addOrderApi(order){
    return axios.post('https://localhost:5001/api/orders',order);
}

export function addCategoryApi(category){
    return axios.post('https://localhost:5001/api/categories',category);
}

export function addAdvertiserApi(advertiser){
    return axios.post('https://localhost:5001/api/advertisers', advertiser);
}

export function deleteCategoryApi(id){
    return axios.delete( `https://localhost:5001/api/categories/${id}`,{headers: { "Authorization": "***" }})
}

export function updateCategoryApi(category){
    return axios.put(`https://localhost:5001/api/categories/${category.id}`,category);
}

export function signInApi(authentication){
    console.log(authentication.role);
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