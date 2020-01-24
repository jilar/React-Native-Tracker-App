import{
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  SIGN_UP_ERR
}from './types'
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

export const signUp= (userInfo) =>async(dispatch)=>{
  const packet= {email:userInfo.email, password:userInfo.password};
    try{
      const response =await trackerApi.post('/signup', packet);
      dispatch({
        type: SIGN_UP,
        payload:response.data
      });
      navigate('mainFlow');
    }catch(err){
      dispatch({
        type: SIGN_UP_ERR,
        payload:"There was problem trying to sign up. Try again."
      });
    }
}

export const signIn= (userInfo) =>{
  return{
    type:SIGN_IN,
    payload:userInfo
  }
}

export const signOut =()=>{
  return{
    type:SIGN_OUT
  };
};
