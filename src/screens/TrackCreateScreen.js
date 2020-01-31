import React from 'react';
import {connect} from 'react-redux';
import {View,StyleSheet,Text, Button, TextInput,TouchableOpacity} from 'react-native';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map'

const TrackCreateScreen= ()=>{
  return (
    <SafeAreaView force Inset={{top: 'always'}}>
      <Text style ={{fontSize:48}}>TrackCreateScreen</Text>;
      <Map/>
    <SafeAreaView/>
)};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
