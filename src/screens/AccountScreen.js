import React from 'react';
import {View,StyleSheet,Text,TextInput} from 'react-native';
import{Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {connect} from 'react-redux';
import {signOut} from '../actions';
import {FontAwesome} from '@expo/vector-icons'

const AccountScreen= ({signOut})=>{
  return(
  <SafeAreaView forceInset={{top: 'always'}}>
     <Text style ={{fontSize:48}}>AccountScreen</Text>
     <Button title = "Sign Out" onPress={signOut}/>
  </SafeAreaView>
)};

AccountScreen.navigationOptions={
  title:'Account',
  tabBarIcon: <FontAwesome name ="gear" size={20} />
}

const styles = StyleSheet.create({});

export default connect(null,{signOut})(AccountScreen);
