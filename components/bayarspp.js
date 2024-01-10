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

export default function Bayar({ navigation }) {
  const Berhasil = () => {
    navigation.navigate('Berhasil');
  };

  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={styles.container}>


      <Text style={styles.text3}>Pilih metode pembayaran:</Text>
      <DropDownPicker
        items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        defaultValue={selectedValue}
        containerStyle={{ height: 40 }}
        onChangeItem={(item) => setSelectedValue(item.value)}
      />
      <View style={styles.inputt}>
        <Custominput placeholder="Nama" />
        <Custominput placeholder="Bulan" />
      </View>

      <Custombutton label="Bayar" 
      onPress={Berhasil}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text3: {
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
