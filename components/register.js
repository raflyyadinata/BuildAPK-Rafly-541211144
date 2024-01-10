import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Div,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Custominput from './custominput';
import Custombutton from './custombutton';
import Customwhitebtn from './customwhitebtn';

// or any files within the Snack

export default function Register({navigation}) {

  const  Login = () => {
    navigation.navigate ('Login')
  };

  
  return (
    <View style={styles.container}>
      <Image style={styles.avatar1} source={require('../assets/sd.png')} />

      <View style={styles.inputt}>
        <Custominput placeholder ='Username' />
        <Custominput placeholder ='Email'/>
        <Custominput placeholder ='No.telepon'/>

        <View style={styles.tess}>
          <Custominput placeholder ='password' />
          <Custominput placeholder ='confirm password'/>
        </View>
      </View>

      <Custombutton label ='Register'
       onPress={Login}/>
      <Text style={styles.title}>already have account?</Text>
      <Customwhitebtn 
      onPress={Login}
      label ='Login' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  tess: {
    marginTop: 40,
  },
  titlee: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },

  avatar1: {
    width: 100,
    height: 100,
    marginTop: 40,
    borderRadius: 10,
  },

  btn: {
    width: 250,
    height: 200,
  },

  inputt: {
    marginTop: 30,
  },

  input: {
    height: 40,
    width: 280,
    borderRadius: 10,
    margin: 6,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },

  button: {
    backgroundColor: '#c61d1f',
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 280,
    marginTop: 20,
  },
  buton: {
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 280,
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonText1: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});
