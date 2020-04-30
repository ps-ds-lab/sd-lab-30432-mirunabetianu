import DirectoryActionTypes from "./directory.types";

export const fetchCategoriesStart = categoriesMap => ({
    type: DirectoryActionTypes.FETCH_CATEGORIES_START,
    payload: categoriesMap
});

export const fetchCategoriesSuccess = categoriesMap => ({
    type: DirectoryActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: categoriesMap
});

export const fetchCategoriesFailure = errorMessage => ({
    type: DirectoryActionTypes.FETCH_CATEGORIES_FAILURE,
    payload: errorMessage
});

export const addProduct = product => ({
    type: DirectoryActionTypes.ADD_PRODUCT,
    payload: product
});


export const fetchAdsStart = adsMap => ({
    type: DirectoryActionTypes.FETCH_ADS_START,
    payload: adsMap
});

export const fetchAdsSuccess = adsMap => ({
    type: DirectoryActionTypes.FETCH_ADS_SUCCESS,
    payload: adsMap
});

export const fetchAdsFailure = errorMessage => ({
    type: DirectoryActionTypes.FETCH_ADS_FAILURE,
    payload: errorMessage
});
