import React from 'react';
import {View,StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {signIn,clearError} from '../actions';
import {connect} from 'react-redux';

const SigninScreen= ({navigation,signIn,clearError})=>{
  return(
  <View style={styles.container}>
    <NavigationEvents
      onWillBlur={clearError}
    />
    <AuthForm headerText="Sign in to Tracker Account" buttonText="Sign In" onSubmit={signIn}/>
    <NavLink textMessage="No Account? Sign up instead" routeName="Signup"/>
  </View>
)};

SigninScreen.navigationOptions = () =>{
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

export default connect(null,{signIn,clearError})(SigninScreen);
