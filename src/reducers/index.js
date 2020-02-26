import {combineReducers} from 'redux';
//import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import locationReducer from './locationReducer';
import trackReducer from './trackReducer';

export default combineReducers({
  Auth: authReducer,
  Location: locationReducer,
  TrackList:trackReducer
});

//form: formReducer,
