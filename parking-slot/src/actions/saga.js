import { call, takeEvery, takeLatest, take } from 'redux-saga/effects'
import { makeReservation } from '../base.js'

export function* reserveSlot( action ){
  yield  call( makeReservation ) 
}

function* reserveSlotx( action ){
  yield take( 'RESERVE', reserveSlot )
}


function* loginFlow() {
    
}
export default function* rootSaga() {
    yield [
        loginFlow(),
        reserveSlotx(),
    ]
}
