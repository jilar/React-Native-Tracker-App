import React from 'react';
import {StyleSheet,Text} from 'react-native';
import MapView, {Polyline,Circle} from 'react-native-maps';
import {connect} from 'react-redux';

const Map =({LocationState})=>{
  console.log(LocationState.currentLocation);
  return(
    <>
    {LocationState.currentLocation
      ? <MapView  style ={styles.map}
          initialRegion={{
            ...LocationState.currentLocation.coords,
            latitudeDelta:0.01,
            longitudeDelta:0.01
          }}
          region={{
            ...LocationState.currentLocation.coords,
            latitudeDelta:0.01,
            longitudeDelta:0.01
          }}>
          <Circle
            center={LocationState.currentLocation.coords}
            radius={30}
            strokeColor="rgba(158,158,255,1.0)"
            fillColor="rgba(158,158,255,0.3)"
          />
        </MapView>
      : null
    }
    </>
)};

const styles=StyleSheet.create({
  map:{
    height:300
  }
});

const mapStateToProps=(state)=>{
  return{
    LocationState:state.Location
  }
}

export default connect(mapStateToProps)(Map);
