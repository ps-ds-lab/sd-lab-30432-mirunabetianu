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

export const addAd = ad => ({
    type: DirectoryActionTypes.ADD_AD,
    payload: ad
});

export const deleteAd = id => ({
    type:DirectoryActionTypes.DELETE_AD,
    payload: id
});

export const addOrder = order =>({
    type: DirectoryActionTypes.ADD_ORDER,
    payload: order
});

export const addCategory = category =>({
    type: DirectoryActionTypes.ADD_CATEGORY,
    payload: category
});

export const deleteCategory = id =>({
    type: DirectoryActionTypes.DELETE_CATEGORY,
    payload: id
});

export const updateCategory = category => ({
    type: DirectoryActionTypes.UPDATE_CATEGORY,
    payload: category
});

export const addAdvertiser = advertiser => ({
    type: DirectoryActionTypes.ADD_ADVERTISER,
    payload: advertiser
});

export const updateProduct = product =>({
    type: DirectoryActionTypes.UPDATE_PRODUCT,
    payload: product
});
