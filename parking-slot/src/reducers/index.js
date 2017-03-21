import { combineReducers } from 'redux';

function reservedToday(state = false, action){
    return state;
}

const rootReducer = combineReducers({
    reservedToday
});

export default rootReducer;