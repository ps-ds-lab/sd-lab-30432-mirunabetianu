import {takeLatest, call, put, all} from 'redux-saga/effects';
import DirectoryActionTypes from "./directory.types";

import {
    fetchCategoriesSuccess,
    fetchCategoriesFailure
} from './directory.actions'
import {getCategoriesAPI, getProductsAPI} from "../../services/APIs";

function* fetchCategoriesAsync() {
    try{
        const categories = yield call(getCategoriesAPI);
        
        categories.map(
            category => {getProductsAPI(category.id).then(res => {category.products = res}); return null}
        );
        
        yield put(fetchCategoriesSuccess(categories));
    }catch(error){
        yield put(fetchCategoriesFailure(error.message));
    }
}

export function* fetchCategoriesStart(){
    yield takeLatest(DirectoryActionTypes.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* directorySagas(){
    yield all([call(fetchCategoriesStart)])
}