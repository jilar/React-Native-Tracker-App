import React, {useState} from 'react';
import {View,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import{Text,Input,Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {signUp} from '../actions';
import Spacer from '../components/Spacer'

const SignupScreen= ({navigation,Auth,signUp},props)=>{
  const [email, setEmail]=useState('');
  const [password,setPassword]= useState('');

  return <View style={styles.container}>
    <Spacer>
      <Text h3>Sign Up For Tracker</Text>
    </Spacer>
    <Input label ="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect ={false}/>
    <Spacer />
    <Input  secureTextEntry label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect ={false}/>
    {Auth.errorMessage ? <Text style= {styles.errorMessage}>{Auth.errorMessage}</Text> : null}
    <Spacer>
      <Button title = "Sign Up" onPress={()=>signUp({email: email,password:password})}/>
    </Spacer>
    </View>
};

SignupScreen.navigationOptions = () =>{
  return{
    header:null
  };
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom: 200
  },
  errorMessage:{
    fontSize: 16,
    color:'red',
    marginLeft:15,
    marginTop:15
  }
});

const mapStateToProps=(state)=>{
  return {
    Auth: state.Auth
  }
}

export default connect(mapStateToProps,{signUp})(SignupScreen);
