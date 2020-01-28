import React from 'react'
import {View, StyleSheet, TouchableOpacity,Text} from 'react-native';

const Sign =({navigation,textMessage}) => {
  return (
    <TouchableOpacity  onPress={()=>navigation.navigate('Signin')}>
       <Text style={styles.signIn}>{textMessage}</Text>
    </TouchableOpacity>
)}

const styles = StyleSheet.create({
  signIn:{
    color:'blue'
  }
});

export default Sign;
