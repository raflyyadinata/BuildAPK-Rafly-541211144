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
  ScrollView,
} from 'react-native';
import React from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Custominput from './custominput';
import Custombutton from './custombutton';
import Customwhitebtn from './customwhitebtn';

export default function Dasbord({navigation}) {

   const  Bayar = () => {
    navigation.navigate ('Bayar')
  };
   const  Tagihan = () => {
    navigation.navigate ('Tagihan')
  };
   const  Histori = () => {
    navigation.navigate ('Histori')
  };
   const  Login = () => {
    navigation.navigate ('Login')
  };
  return (
    <ScrollView style={styles.kontaner}>
      <View style={styles.container}>
        <View style={styles.flex}>
          <Text style={styles.text1}>Hai Rafly!</Text>
          <Image style={styles.avatar1} source={require('../assets/sd.png')} />
        </View>
        <Text style={styles.text2}>Silahkan pilih yang anda butuhkan</Text>

        <View style={styles.flex}>
          <Custombutton label="Bayar SPP" 
          onPress={Bayar}/>
          <Custombutton label="Tagihan SPP"
          onPress={Tagihan} />
          <Custombutton label="Histori Pembayaran" 
          onPress={Histori}/>
          <Customwhitebtn label="Logout"
          onPress={Login}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  kontaner: {
    flex: 6,
    paddingBottom: 100,
  },
  flex: {
    display: 'flex',
  },
  text1: {
    marginLeft: -10,
    fontSize: 30,
  },
  avatar1: {
    width: 50,
    height: 50,
    marginTop: -40,
    marginLeft: 230,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 24,
  },
});
