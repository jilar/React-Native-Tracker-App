import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;
let lineSwitch=0;
const getLocation =(increment,lineSwitch) =>{
  if(lineSwitch){
    return {
      timesstamp:1000000,
      coords:{
        speed: 0,
        heading: 0,
        accuracy: 5,
        altitude: 5,
        longitude:-121.29407005 +increment*3 *tenMetersWithDegrees,
        latitude: 37.80950511 -5 *tenMetersWithDegrees,
      }
    };
  };
  return {
    timesstamp:1000000,
    coords:{
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitude: 5,
      longitude:-121.29407005 +increment*3 *tenMetersWithDegrees,
      latitude: 37.80950511 +5 *tenMetersWithDegrees
    }
  };
};

let counter =0;
//every second user will move
//code only for testing purposes
setInterval(()=>{
   Location.EventEmitter.emit('Expo.locationChanged',{
     watchId: Location._getCurrentWatchId(),
     location: getLocation(counter,lineSwitch)
   })
   counter++
   lineSwitch=counter %2;
},1000);
