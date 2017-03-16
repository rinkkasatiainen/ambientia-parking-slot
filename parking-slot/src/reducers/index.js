import {combineReducers} from 'redux'
function reservedToday(state = false, action){
  switch(action.type) {
    case 'RESERVE_PARKINGSLOT':
      console.log(action, state);
      return !state;
    default:
      return state;
  }
}

function reservedFor(state = '', action) {
  switch (action.type) {
    case 'RESERVE_PARKINGSLOT':
      return action.payload.name;
    default:
      return state;
  }
  return state;
}

const rootReducer = combineReducers( { 
  reservedToday ,
  reservedFor
})

export default rootReducer
