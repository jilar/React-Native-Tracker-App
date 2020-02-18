import React from 'react';
import {Input,Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {startRecording,stopRecording} from '../actions';
import Spacer from '../components/Spacer'
import useLocation from '../hooks/useLocation';

const TrackForm =({startRecording,LocationState, stopRecording}) =>{
  return <>
    <Spacer>
      <Input placeholder="Track Title"/>
    </Spacer>
    {!LocationState.recording
      ? <><Spacer>
          <Button title="Start Recording" onPress={()=>startRecording()}/>
        </Spacer>
          {LocationState.locations.length>0 ? <Spacer>
              <Button title="Save Recording" onPress={()=>startRecording()}/>
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
  }
}


export default connect(mapStateToProps,{startRecording,stopRecording})(TrackForm);
