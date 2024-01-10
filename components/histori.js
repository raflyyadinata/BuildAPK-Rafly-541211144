import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Div,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { Card, ListItem, Button } from 'react-native-elements';

// You can import supported modules from npm
import Custominput from './custominput';
import Custombutton from './custombutton';
import Customwhitebtn from './customwhitebtn';
import DropDownPicker from 'react-native-dropdown-picker';


// or any files within the Snack

export default function Histori ({ navigation }) {
  const Login = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.kontaner}>
      <View style={styles.container}>
      <Card>
        <Card.Title>Histori Pembayaran</Card.Title>
        <Card.Divider />
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Lunas</ListItem.Title>
            <ListItem.Subtitle>Rp. 1.000.000</ListItem.Subtitle>
            <ListItem.Subtitle>11/12/2023</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <Card.Divider />
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Lunas</ListItem.Title>
            <ListItem.Subtitle>Rp. 1.000.000</ListItem.Subtitle>
            <ListItem.Subtitle>11/01/2023</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <Card.Divider />
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Lunas</ListItem.Title>
            <ListItem.Subtitle>Rp. 1.000.000</ListItem.Subtitle>
            <ListItem.Subtitle>11/02/2023</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
       
        {/* Tambahkan item atau informasi lainnya sesuai kebutuhan */}
      </Card>
      <Custombutton label="Hapus Histori" />

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
 
});
