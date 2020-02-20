import {SAVE_TRACK,FETCH_TRACK} from '../actions/types'
//{title:string, locations:[]}
const INITIAL_STATE={
  tracks:[]
}

export default (state= INITIAL_STATE, action)=>{
  switch(action.type){
    case SAVE_TRACK:
      return {tracks: [...state, action.payload]};
    case FETCH_TRACK:
      return {tracks: [...state, action.payload]};
    default:
      return state;
  }
}
