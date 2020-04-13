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