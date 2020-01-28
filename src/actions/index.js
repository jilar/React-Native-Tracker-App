import{
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  SIGN_ERR,
  CLEAR_ERR
}from './types'
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

export const signUp= (userInfo) =>async(dispatch)=>{
    try{
      const response =await trackerApi.post('/signup', userInfo);
      dispatch({
        type: SIGN_UP,
        payload:response.data
      });
      navigate('mainFlow');
    }catch(err){
      dispatch({
        type: SIGN_ERR,
        payload:"Username in use. Try a different one."
      });
    }
}

export const signIn= (userInfo) =>async(dispatch)=>{
  try{
    const response =await trackerApi.post('/signin', userInfo);
    dispatch({
      type: SIGN_UP,
      payload:response.data
    });
    navigate('mainFlow');
  }catch(err){
    dispatch({
      type: SIGN_ERR,
      payload:"Incorrect username or password. Try again."
    });
  }
}

export const clearError =()=>{
  return{
    type:CLEAR_ERR
  };
};

export const signOut =()=>{
  return{
    type:SIGN_OUT
  };
};
