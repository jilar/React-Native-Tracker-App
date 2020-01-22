import React from 'react';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Provider} from 'react-redux';
import{createStore, combineReducers} from 'redux';
import reducers from './src/reducers'
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

let store = createStore(reducers);

const stackNavigator = createStackNavigator({
  Signup:SignupScreen,
  Signin: SigninScreen
});

const bottomTabNavigator= createBottomTabNavigator({
  Account:AccountScreen,
  TrackCreate:TrackCreateScreen,
  trackFlow:createStackNavigator({
    TrackDetail:TrackDetailScreen,
    TrackList:TrackListScreen
  })
})

const switchNavigator=createSwitchNavigator({
  loginFlow:stackNavigator,
  mainFlow: bottomTabNavigator
});

const App= createAppContainer(switchNavigator);
//export default createAppContainer(switchNavigator);

export default () =>{
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
};
