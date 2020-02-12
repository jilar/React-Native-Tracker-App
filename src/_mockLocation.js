import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation =increment =>{
  return {
    timesstamp:1000000,
    coords:{
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitude: 5,
      longitude:-121.29407005 +increment *tenMetersWithDegrees,
      latitude: 37.80950511 +increment *tenMetersWithDegrees
    }
  };
};

let counter =0;
//every second user will move
//code only for testing purposes
setInterval(()=>{
   Location.EventEmitter.emit('Expo.locationChanged',{
     watchId: Location._getCurrentWatchId(),
     location: getLocation(counter)
   })
   counter++
},1000);
