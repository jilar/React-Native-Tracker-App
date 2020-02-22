import {START_RECORDING,STOP_RECORDING,ADD_LOCATION, ADD_CURRENT_LOCATION,CLEAR_LOCATION} from '../actions/types'

//default aruguement
const INITIAL_STATE={
  recording:false,
  locations:[],
  currentLocation:null
}

export default (state= INITIAL_STATE, action)=>{
  switch(action.type){
    case START_RECORDING:
      return {...state, recording:true}
    case STOP_RECORDING:
      return {...state, recording:false}
    case ADD_CURRENT_LOCATION:
      return {...state, currentLocation:action.payload}
    case ADD_LOCATION:
      return {...state, locations:[...state.locations, action.payload]}
    case CLEAR_LOCATION:
      return {...state, locations:[]}
    default:
      return state;
  }
}
