import React from 'react';
import {FlatList,Text, Button, TextInput,TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import {fetchTracks} from '../actions';
import {navigation, NavigationEvents} from 'react-navigation';

const TrackListScreen= ({navigation,fetchTracks,TrackList})=>{
  console.log(TrackList.tracks.length);
  return(
    <>
      <NavigationEvents onWillFocus={fetchTracks} />

      <FlatList
        data={TrackList.tracks}
        keyExtractor={item =>item._id}
        renderItem={({item}) =>{
         return(  <TouchableOpacity onPress={()=>
             navigation.navigate('TrackDetail',{_id:item._id})
             }
           >
           <ListItem chevron title={item.name}/>
          </TouchableOpacity>)
        }}
       />
    </>
)};

TrackListScreen.navigationOptions={
  title:'Tracks'
}

const mapStateToProps=(state)=>{
  return {
    TrackList:state.TrackList
  }
}

export default connect(mapStateToProps,{fetchTracks})(TrackListScreen);
