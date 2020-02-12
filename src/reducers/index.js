import {combineReducers} from 'redux';
//import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import locationReducer from './locationReducer';

export default combineReducers({
  Auth: authReducer,
  Location: locationReducer
});

//form: formReducer,
