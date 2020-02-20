import React,{useState} from 'react';
import {Input,Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {startRecording,stopRecording,saveTrack} from '../actions';
import Spacer from '../components/Spacer'
import useLocation from '../hooks/useLocation';

const TrackForm =({startRecording,LocationState,stopRecording,saveTrack,Tracks}) =>{
  const [title, setTitle]=useState('');
  console.log(Tracks.length);
  return <>
    <Spacer>
      <Input placeholder="Track Title" value={title} onChangeText={setTitle} autoCorrect ={false}/>
    </Spacer>
    {!LocationState.recording
      ? <><Spacer>
          <Button title="Start Recording" onPress={()=>startRecording()}/>
        </Spacer>
          {LocationState.locations.length>0 ? <Spacer>
              <Button title="Save Recording" onPress={()=>saveTrack(title)}/>
            </Spacer> :null}</>
      : <Spacer>
          <Button title="Stop " onPress={()=>stopRecording()}/>
        </Spacer>
    }
  </>
};

const mapStateToProps=(state)=>{
  return{
    LocationState:state.Location
    Tracks:state.TrackList
  }
}


export default connect(mapStateToProps,{startRecording,stopRecording,saveTrack})(TrackForm);
