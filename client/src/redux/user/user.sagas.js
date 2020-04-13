import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
} from './user.actions';
import {signInApi, signUpApi} from "../../services/APIs";



function* signIn({ payload: { username, password }}) {
    try{
        const authentication = {
            username: username,
            password: password
        };

        let user = yield call(signInApi,authentication);

        localStorage.setItem("token", user.data.token);
        
        yield put(signInSuccess(authentication));
    }catch(error){
        yield put(signInFailure(error.message));
    }
}

function* onSignInStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

function* isUserAuthenticated() {
    localStorage.getItem("token") ?
        yield put(signInSuccess())
        :
        yield put(signInFailure('no user found'));
}

function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* signOut() {
    localStorage.removeItem("token");
    
    localStorage.getItem("token") ?
        yield put(signOutFailure('not signed out'))
        :
        yield put(signOutSuccess());
}

function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

function* signUp({payload: {firstName, lastName, email, phone,username,password}}) {
    const user = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Phone: phone,
        Username: username,
        Password: password,
        IsSeller: 0,
        IsBuyer: 0
    };
    try {
        yield call(signUpApi,user);
        
        yield put(signUpSuccess(user));
    }catch(error){
        yield put(signUpFailure(error.message));
    }
}

function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
    yield all([
        call(onSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ]);
}