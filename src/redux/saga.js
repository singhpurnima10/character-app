import { delay } from 'redux-saga';
import {ADD_USER_ASYNC, ADD_USER} from '../redux/constant';
import {takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';

const url = {url:'https://rickandmortyapi.com/api/character/', method:'GET'};

function* addUserAsyc(){
    //yield delay(4000);
    // console.log('saga won');
    const data = yield call(axios, url);
    // console.log('data',data);
    yield put({type: ADD_USER, value: data});
}

export function* addUserfn(){
    yield takeEvery(ADD_USER_ASYNC, addUserAsyc);
}