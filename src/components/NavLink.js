import React from 'react'
import {StyleSheet, TouchableOpacity,Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import Spacer from '../components/Spacer'

const NavLink =({navigation,textMessage,routeName}) => {
  return (
    <TouchableOpacity  onPress={()=>navigation.navigate(routeName)}>
      <Spacer>
       <Text style={styles.Link}>{textMessage}</Text>
      </Spacer>
    </TouchableOpacity>
)};

const styles = StyleSheet.create({
  Link:{
    color:'blue'
  }
});

export default withNavigation(NavLink);
