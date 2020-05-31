import DirectoryActionTypes from "./directory.types";
import {
    addProduct,
    addAd,
    deleteAd,
    addOrder,
    addCategory,
    deleteCategory,
    updateCategory,
    addAdvertiser,
    updateProduct
} from "./directory.utils";
const INITIAL_STATE = {
    sections: [],
    isFetching: false,
    error: undefined,
    isProductAdded: false,
    isAdAdded: false,
    isAdDeleted:false,
    isOrderAdded: false,
    isCategoryAdded: false,
    isCategoryDeleted: false,
    isCategoryUpdated: false,
    isAdvertiserAdded: false,
    isProductUpdated: false,
    ads: []
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type)
    {
        case DirectoryActionTypes.FETCH_CATEGORIES_START:
        case DirectoryActionTypes.FETCH_ADS_START:    
            return{
                ...state,
                isFetching: true
            };
        case DirectoryActionTypes.FETCH_CATEGORIES_SUCCESS:
            return{
                ...state,
                isFetching: false,
                sections: action.payload
            };
        case DirectoryActionTypes.FETCH_ADS_SUCCESS:
            return {
                ...state,
                ads: action.payload
            };    
        case DirectoryActionTypes.FETCH_CATEGORIES_FAILURE:
        case DirectoryActionTypes.FETCH_ADS_FAILURE:    
            return{
                ...state,
                isFetching: false,
                error: action.payload
            };
        case DirectoryActionTypes.ADD_PRODUCT:
            return{
                ...state,
                isProductAdded: addProduct(action.payload)
            };
        case DirectoryActionTypes.ADD_AD:
            return{
                ...state,
                isAdAdded: addAd(action.payload)
            };
        case DirectoryActionTypes.DELETE_AD:
            return{
                ...state,
                isAdDeleted: deleteAd(action.payload) 
            };
        case DirectoryActionTypes.ADD_ORDER:
            return{
                ...state,
                isOrderAdded: addOrder(action.payload)
            };
        case DirectoryActionTypes.ADD_CATEGORY:
            return{
                ...state,
                isCategoryAdded: addCategory(action.payload)
            };
        case DirectoryActionTypes.DELETE_CATEGORY:
            return{
                ...state,
                isCategoryAdded: deleteCategory(action.payload)
            }; 
        case DirectoryActionTypes.UPDATE_CATEGORY:
            return{
                ...state,
                isCategoryUpdated: updateCategory(action.payload)
            };
        case DirectoryActionTypes.ADD_ADVERTISER:
            return{
                ...state,
                isAdvertiserAdded: addAdvertiser(action.payload)
            };
        case DirectoryActionTypes.UPDATE_PRODUCT:
            return{
                ...state,
                isProductUpdated: updateProduct(action.payload)
            };
        default:
            return state;
    }
};

export default directoryReducer;