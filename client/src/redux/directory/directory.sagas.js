import {takeLatest, call, put, all} from 'redux-saga/effects';
import DirectoryActionTypes from "./directory.types";

import {
    fetchCategoriesSuccess,
    fetchCategoriesFailure, 
    fetchAdsFailure, 
    fetchAdsSuccess
} from './directory.actions'
import {getAdsAPI, getCategoriesAPI, getProductsAPI} from "../../services/APIs";

async function fetchProductsAsync(id){ 
    return await getProductsAPI(id);
}

function* fetchCategoriesAsync() {
    try {
        const categories = yield call(getCategoriesAPI);
        
        yield Promise.all( categories.map(
            category => {
                 return fetchProductsAsync(category.id).then(res=> {category.products = res;});
            }
        ));
        
        yield put(fetchCategoriesSuccess(categories));
    
    } catch (error) {
        yield put(fetchCategoriesFailure(error.message));
    }
}

export function* fetchCategoriesStart(){
    yield takeLatest(DirectoryActionTypes.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

function* fetchAdsAsync() {
    try{
        const ads = yield call(getAdsAPI);
        yield put(fetchAdsSuccess(ads));
        
    }catch(error){
        yield put(fetchAdsFailure(error.message))
    }
    
}

export function* fetchAdsStart(){
    yield takeLatest(DirectoryActionTypes.FETCH_ADS_START, fetchAdsAsync)
}
export function* directorySagas(){
    yield all([call(fetchCategoriesStart),
                call(fetchAdsStart)])
}