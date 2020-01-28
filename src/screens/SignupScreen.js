import React, {useState} from 'react';
import {View,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import{Text,Input,Button} from 'react-native-elements';
import AuthForm from '../components/AuthForm'
import {signUp} from '../actions';
import {connect} from 'react-redux';

const SignupScreen= ({navigation,Auth,signUp})=>{


  return <View style={styles.container}>
  <AuthForm headerText="test" buttonText="test" onSubmit={signUp}/>
    </View>
};

SignupScreen.navigationOptions = () =>{
  return{
    header:null
  };
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom: 200
  },
});


export default connect(null,{signUp})(SignupScreen);
