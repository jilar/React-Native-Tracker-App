import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';
import MapView from 'react-native-maps';

const Map =()=>{
  return(
      <MapView  style ={styles.map}
      initialRegion={{
        latitude: 37.33233,
        longitude:-122.03121,
        latitudeDelta:0.01,
        longitdeData:0.01
      }}
      />
)};

const styles=Stylesheet.create({
  map:{
    height:3000
  }
});

export default Map;
