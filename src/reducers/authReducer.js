import {SIGN_IN,SIGN_OUT,SIGN_UP,SIGN_ERR,CLEAR_ERR} from '../actions/types'

//default aruguement
const INITIAL_STATE={
  token:null,
  errorMessage:null
}

export default (state= INITIAL_STATE, action)=>{
  switch(action.type){
    case SIGN_IN:
      return {token:action.payload.token, errorMessage:null };
    case SIGN_UP:
      return {token:action.payload.token, errorMessage:null};
    case SIGN_ERR:
      return {...state,errorMessage:action.payload};
    case CLEAR_ERR:
      return {...state,errorMessage:null};
    // case SIGN_OUT:
    //   return {...state,isSignedIn:false ,userId:null};
    default:
      return state;
  }
}
