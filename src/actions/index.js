import{
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  SIGN_ERR,
  CLEAR_ERR,
  START_RECORDING,
  STOP_RECORDING,
  ADD_CURRENT_LOCATION,
  ADD_LOCATION,
  SAVE_TRACK,
  FETCH_TRACKS,
  CLEAR_LOCATION
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
  navigate('loginFlow');
  return{
    type:SIGN_OUT
  };
};

export const addLocation= (location) =>async(dispatch,getState)=>{
  dispatch({
    type:ADD_CURRENT_LOCATION,
    payload:location
  });
  if(getState().Location.recording){
    dispatch({
      type:ADD_LOCATION,
      payload:location
    });
  }
}

export const startRecording= (title) =>{
  return{
    type:START_RECORDING,
    payload:title
  }
}

export const stopRecording= (title) =>{
  return{
    type:STOP_RECORDING,
    payload:title
  }
}

export const saveTrack= (title) =>async(dispatch,getState)=>{
  const track ={
    title:title,
    locations:getState.Location.Locations
  }
  dispatch{(
    type:SAVE_TRACK,
    payload:track
  });

}

export const fetchTracks= (location) =>{
  return{
    type:FETCH_TRACKS
  }
}
