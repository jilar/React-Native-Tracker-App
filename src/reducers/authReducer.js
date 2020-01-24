import {SIGN_IN,SIGN_OUT,SIGN_UP,SIGN_UP_ERR} from '../actions/types'

//default aruguement
const INITIAL_STATE={
  token:null,
  errorMessage:null
}

export default (state= INITIAL_STATE, action)=>{
  switch(action.type){
    // case SIGN_IN:
    //   return {...state,token:action.payload};
    case SIGN_UP:
      return {token:action.payload, errorMessage:null};
    case SIGN_UP_ERR:
      return {...state,errorMessage:action.payload};
    // case SIGN_OUT:
    //   return {...state,isSignedIn:false ,userId:null};
    default:
      return state;
  }
}
