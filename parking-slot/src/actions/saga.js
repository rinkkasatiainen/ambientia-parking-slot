import {take, fork, task, call} from 'redux-saga/effects'

import base, { login } from '../base'


function* register( email, password ) {
    console.log( email, password)
    try{
        const token = yield call( login, email, password )
    } catch (error) {
        console.log(error)
    }
}

function* loginFlow() {

    while(true){
        const {payload} = yield take( 'LOGIN' )
        const {email, password } = payload;
        const task = yield fork( register, email, password)
    }
}

export default function* rootSaga() {
    yield [
        loginFlow(),
    ]
}