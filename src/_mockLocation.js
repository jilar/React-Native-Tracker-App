import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation =increment =>{
  return {
    timesstamp:1000000,
    coords:{
      speed: 0,
      heading: 0,
      accuract: 5,
      altitude: 5,
      longitude: -122.0312186 +increment *tenMetersWithDegrees,
      latitude: 37.33233141 +increment *tenMetersWithDegrees
    }
  };
};

let counter =0;
//every second user will move
//code only for testing purposes
setInterval(()=>{
   Location.EventEmitter.emit('Expo.locationChanges',{
     watchId: Location._getCurrentWatchId(),
     location: getLocation(counter)
   })
   counter++
},1000);
