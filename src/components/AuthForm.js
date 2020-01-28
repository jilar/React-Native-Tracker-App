import React, {useState} from 'react';
import {View,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import{Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer'
import {connect} from 'react-redux';

const AuthForm= ({Auth,onSubmit,buttonText,headerText})=>{
  const [email, setEmail]=useState('');
  const [password,setPassword]= useState('');

  return <>
    <Spacer>
      <Text h3>{headerText}</Text>
    </Spacer>
    <Input label ="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect ={false}/>
    <Spacer />
    <Input  secureTextEntry label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect ={false}/>
    {Auth.errorMessage ? <Text style= {styles.errorMessage}>{Auth.errorMessage}</Text> : null}
    <Spacer>
      <Button title = {buttonText} onPress={()=>onSubmit({email: email,password:password})}/>
    </Spacer>
    </>
};


const styles = StyleSheet.create({
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

export default connect(mapStateToProps)(AuthForm);
