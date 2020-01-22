import React from 'react';
import {View,StyleSheet,Text, Button, TextInput,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

const TrackListScreen= ()=>{
  return
    <>
    <Text style ={{fontSize:48}}>TrackListScreen</Text>;
        <Button title ="Go to Track Detail" onPress={(navigation.navigate('TrackDetail'))}/>
    </>
};

const styles = StyleSheet.create({});

export default TrackListScreen;
