import '../_mockLocation';
import React, {useEffect, useState} from 'react';
import {View,StyleSheet, Button, TextInput,TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from  'expo-location';
import Map from '../components/Map'
import {connect} from 'react-redux';
import {addLocation} from '../actions';

const TrackCreateScreen= ({addLocation})=>{
  const [err,setErr]= useState(null);

  const startWatching=async ()=>{
    try{
      await requestPermissionsAsync();
      //watch users
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval:1000,
          distanceInterval:10
        },
        (location) =>{
            addLocation(location);
        }
    )}catch(e){
      setErr(e);
    }
  };

//runs once when component is first rendered
  useEffect(()=>{
    startWatching();
  },[]);

  return (
    <SafeAreaView force Inset={{top: 'always'}}>
      <Text style ={{fontSize:48}}>Create a Track</Text>
      <Map/>
      {err ? <Text>Please enable location services</Text>: null}
    </SafeAreaView>
)};


export default connect(null,{addLocation})(TrackCreateScreen);
