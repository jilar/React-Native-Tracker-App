import React from 'react';
import {View,StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {signUp,clearError} from '../actions';
import {connect} from 'react-redux';

const SignupScreen= ({navigation,signUp,clearError})=>{
  return(
  <View style={styles.container}>
    <NavigationEvents
      onWillBlur={clearError}
    />
    <AuthForm headerText="Sign Up for Tracker" buttonText="Sign Up" onSubmit={signUp}/>
    <NavLink textMessage="Already have an account? Sign in here" routeName="Signin"/>
  </View>
)};

SignupScreen.navigationOptions = () =>{
  return{
    header:null
  };
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom: 250
  },
});


export default connect(null,{signUp,clearError})(SignupScreen);
