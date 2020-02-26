import React from 'react';
import {View,StyleSheet,Text, Button, TextInput,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import MapView, {Polyline,Circle} from 'react-native-maps';

const TrackDetailScreen= ({navigation,TrackList})=>{
  const _id=navigation.getParam('_id');
  const track=TrackList.find(track=>track._id === _id);

  const initialCoords=track.locations[0].coords;
  return(
    <>
      <Text style ={{fontSize:48}}>{track.name}</Text>
      <MapView style={styles.map}
        initialRegion={{
          longitudeDelta:0.01,
          latitudeDelta:0.01,
          ...initialCoords
        }}
      >
        <Polyline coordinates={track.locations.map (locations=>locations.coords)}/>
      </MapView>
    </>
)};

const styles = StyleSheet.create({
  map:{
    height:300
  }
});

const mapStateToProps=(state)=>{
  return {
    TrackList:state.TrackList.tracks
  }
}

export default connect(mapStateToProps)(TrackDetailScreen);
