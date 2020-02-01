import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View,StyleSheet, Button, TextInput,TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {requestPermissionsAsync} from  'expo-location';
import Map from '../components/Map'

const TrackCreateScreen= ()=>{
  const [err,serErr]= useState(null);

  const startWatching=aync ()=>{
    try{
      await requestPermissionsAsync();
    }catch (e){
      setErr(e);
    }
  };

  return (
    <SafeAreaView force Inset={{top: 'always'}}>
      <Text style ={{fontSize:48}}>Create a Track</Text>
      <Map/>
      {err ? <Text>Please enable location services</Text>: null}
    </SafeAreaView>
)};


export default TrackCreateScreen;
