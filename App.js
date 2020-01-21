import React from 'react';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Provider} from 'react-redux';
import{createStore, combineReducers} from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './src/screen/AccountScreen';
import SignupScreen from './src/screen/SignupScreen';
import SigninScreen from './src/screen/SigninScreen';
import TrackCreateScreen from './src/screen/TrackCreateScreen';
import TrackDetailScreen from './src/screen/TrackDetailScreen';
import TrackListScreen from './src/screen/TrackListScreen';
//import reducers from './src/reducers'

const SwitchNavigator=createSwitchNavigator({
  loginFlow:stackNavigator,
  mainFlow: bottomTabNavigator
});

const stackNavigator = createStackNavigator({
  Signin: SigninScreen,
  Signup:SignupScreen,
},{
  initialRouteName:'Signin',
  defaultNavigationOptions:{
    title:'Track App'
  }
});

const bottomTabNavigator= createBottomTabNavigator({
  Account:AccountScreen,
  TrackCreate:TrackCreateScreen,
  trackFlow:createStackNavigator({
    TrackDetail:TrackDetailScreen,
    TrackList:TrackListScreen
  })
})


export default createAppContainer(switchNavigator);
