import React from 'react'
import {View, StyleSheet, TouchableOpacity,Text} from 'react-native';

const Sign =({}) => {
  return (
    <TouchableOpacity style={styles.signIn}  onPress={()=>navigation.navigate('Signin')}>
       <Text>Already have an account? Sign in here.</Text>
    </TouchableOpacity>
)}

const styles = StyleSheet.create({
  signIn:{
    color:'blue'
  }
});

export default Sign;
