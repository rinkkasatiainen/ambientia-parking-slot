import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './actions/saga'
import {composeWithDevTools} from 'redux-devtools-extension'

const defaultState = {
    reservedToday : false
}


const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, 
   defaultState, 
   composeWithDevTools ( applyMiddleware(sagaMiddleware)) );

sagaMiddleware.run(rootSaga);


export const action = type => store.dispatch({type})

export default store
