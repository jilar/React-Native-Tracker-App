//purpose of file is allow react navigation to be used outside of react files
import {NavigationActions} from 'react-navigation';

//reminder- let allows you to assign variable sometime in future
let navigator;

export const setNavigator=(nav)=>{
  navigator = nav;
};

export const navigate =(routeName,params)=>{
    navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
};
