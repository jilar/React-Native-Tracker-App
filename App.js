import React from 'react';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/reducers'
import {setNavigator} from './src/navigationRef';
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

let store = createStore(reducers, applyMiddleware(reduxThunk));

const stackNavigator = createStackNavigator({
  Signin: SigninScreen,
  Signup:SignupScreen,
});


const bottomTabNavigator= createBottomTabNavigator({
  TrackList:createStackNavigator({
    TracksList:TrackListScreen,
    TrackDetail:TrackDetailScreen
  }),
  TrackCreate:TrackCreateScreen,
  Account:AccountScreen
})

const switchNavigator=createSwitchNavigator({
  loginFlow:stackNavigator,
  mainFlow:bottomTabNavigator
});

const App= createAppContainer(switchNavigator);
//export default createAppContainer(switchNavigator);

export default () =>{
  return(
    <Provider store={store}>
      <App  ref ={(navigator)=>{setNavigator(navigator)}}/>
    </Provider>
  )
};
