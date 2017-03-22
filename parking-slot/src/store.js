import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './actions/saga'
import rootReducer from './reducers/index';

const defaultState = {
    reservedToday: false
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export const action = type => store.dispatch({type})
export default store;