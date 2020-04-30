import {addProductApi} from "../../services/APIs";

export const addProduct = async (product) => {
    try {
        await addProductApi(product);
        return true;
    } catch (error) {
        return error.message;
    }
};