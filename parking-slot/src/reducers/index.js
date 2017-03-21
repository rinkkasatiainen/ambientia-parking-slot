import { combineReducers } from 'redux';

function reservedToday(state = false, action){
    switch(action.type){
        case 'RESERVE_SLOT':
            return !state
        default:
            return state
    }
}

const rootReducer = combineReducers({
    reservedToday
});

export default rootReducer;