import '../_mockLocation';
import React from 'react';
import {View,StyleSheet, Button, TextInput,TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import Map from '../components/Map'
import {connect} from 'react-redux';
import {addLocation} from '../actions';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen= ({isFocused, addLocation})=>{
  const [err]= useLocation(isFocused, (location)=>addLocation(location));

  return (
    <SafeAreaView force Inset={{top: 'always'}}>
      <Text style ={{fontSize:48}}>Create a Track</Text>
      <Map/>
      {err ? <Text>Please enable location services</Text>: null}
    </SafeAreaView>
)};

const createWrapped= withNavigationFocus(TrackCreateScreen);

export default connect(null,{addLocation})(createWrapped);
