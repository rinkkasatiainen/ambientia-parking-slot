import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from './reducers/index';

const defaultState = {};
const store = createStore(rootReducer, defaultState);

export default store;
