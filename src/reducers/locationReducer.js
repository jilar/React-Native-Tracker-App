import {SIGN_IN} from '../actions/types'

//default aruguement
const INITIAL_STATE={
  recording:false,
  locations:[],
  currentLocation:null
}

export default (state= INITIAL_STATE, action)=>{
  switch(action.type){
    case PLACE_HOLDER:
      return {...state, recording:action.recording, locations:[...locations, action.currentLocation]}
    default:
      return state;
  }
}
