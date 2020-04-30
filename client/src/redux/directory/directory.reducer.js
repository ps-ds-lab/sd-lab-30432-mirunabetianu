import DirectoryActionTypes from "./directory.types";
import {addProduct} from "./directory.utils";
const INITIAL_STATE = {
    sections: [],
    isFetching: false,
    error: undefined,
    isProductAdded: false,
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
        default:
            return state;
    }
};

export default directoryReducer;