import {START_RECORDING,STOP_RECORDING,ADD_LOCATION, ADD_CURRENT_LOCATION} from '../actions/types'

//default aruguement
const INITIAL_STATE={
  recording:false,
  title:null,
  locations:[],
  currentLocation:null
}

export default (state= INITIAL_STATE, action)=>{
  switch(action.type){
    case START_RECORDING:
      return {...state, recording:true, title:action.payload}
    case STOP_RECORDING:
      return {...state, recording:false,title:action.payload}
    case ADD_CURRENT_LOCATION:
      return {...state, currentLocation:action.payload}
    case ADD_LOCATION:
      return {...state, locations:[...state.locations, action.payload]}
    default:
      return state;
  }
}
