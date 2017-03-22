import { combineReducers } from 'redux';

function reservedToday(state = false, action) {
    switch (action.type) {
        case 'RESERVE':
            return !state
        default:
            return state
    }
}

const rootReducer = combineReducers({
    reservedToday,

})

export default rootReducer