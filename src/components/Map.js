import React from 'react';
import {StyleSheet,Text} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
import {connect} from 'react-redux';

const Map =({LocationState})=>{
  // let points =[];
  //
  // for (let i =0; i<20 ;i++){
  //   points.push({
  //     latitude: 37.33233 + i * 0.001,
  //     longitude: -122.03121 +i *0.001
  //   });
  // };
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
