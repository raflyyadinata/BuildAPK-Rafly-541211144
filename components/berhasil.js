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
import React, { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Custominput from './custominput';
import Custombutton from './custombutton';
import Customwhitebtn from './customwhitebtn';
import DropDownPicker from 'react-native-dropdown-picker';

// or any files within the Snack

export default function Berhasil({ navigation }) {
  const Login = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title1}
    onPress={Login}
    >Pembayaran Berhasil</Text>
    
<Image style={styles.cek} source={require('../assets/Checklist-Logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems: 'center',
    backgroundColor :'#c61d1f',
    
  },
  cek :{
    width : 200,
    height : 200,
    marginTop : 100
  },
  title1 :{
    color:'white',
    fontWeight : 800,
    marginTop : 40

  }
 
});
