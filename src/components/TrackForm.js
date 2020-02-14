import React from 'react';
import {Input,Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {startRecording} from '../actions';
import Spacer from '../components/Spacer'
import useLocation from '../hooks/useLocation';

const TrackForm =({startRecording,LocationState}) =>{
  return <>
    <Spacer>
      <Input placeholder="Track Title"/>
    </Spacer>
    <Spacer>
      <Button title="Start Recording" onPress={()=>startRecording()}/>
    </Spacer>
  </>
};

const mapStateToProps=(state)=>{
  return{
    LocationState:state.Location
  }
}


export default connect(null,{startRecording})(TrackForm);
