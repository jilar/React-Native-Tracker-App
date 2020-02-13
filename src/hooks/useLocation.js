import {useState, useEffect} from 'react';
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err,setErr]= useState(null);
  const [subscriber, setSubsriber]= useState(null);

  const startWatching=async ()=>{
    try{
      await requestPermissionsAsync();
      //watch users
      const sub= await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval:1000,
          distanceInterval:10
        },
        callback
      );
      setSubsriber(sub);
    }catch(e){
      setErr(e);
    }
  };

//runs once when component is first rendered
  useEffect(()=>{
    if(shouldTrack){
      startWatching();
    }else{
      subscriber.remove();
      setSubscriber=null;
    }
  },[shouldTrack]);

  return [err];
};
