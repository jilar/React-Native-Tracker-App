import {START_RECORDING,STOP_RECORDING,ADD_LOCATION} from '../actions/types'

//default aruguement
const INITIAL_STATE={
  recording:false,
  locations:[],
  currentLocation:null
}

export default (state= INITIAL_STATE, action)=>{
  switch(action.type){
    case START_RECORDING:
      return {...state, recording:action.recording, locations:[...state.locations, action.currentLocation]}
    case STOP_RECORDING:
      return {...state, recording:action.recording, locations:[...state.locations, action.currentLocation]}
    case ADD_LOCATION:
      return {...state, currentLocation:action.payload, locations:[...state.locations, action.payload]}
    default:
      return state;
  }
}
