import { call, takeEvery, takeLatest, take } from 'redux-saga/effects'
import { makeReservation, login } from '../base.js'

export function* reserveSlot( action ){
  yield  call( makeReservation ) 
}

function* reserveSlotx( action ){
  yield take( 'RESERVE', reserveSlot )
}


export function* loginFlow() {
	while (true) {
		const {email, password} = yield take('LOGIN')
		const {uid, error, ...rest} = yield call (login, email, password )
		console.log('login', uid, error, rest);
	}    
}
export default function* rootSaga() {
    yield [
        loginFlow(),
        reserveSlotx(),
    ]
}
