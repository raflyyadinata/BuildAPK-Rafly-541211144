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

export default function Tagihan ({ navigation }) {
  const  Bayar = () => {
    navigation.navigate ('Bayar')
  };

  return (
    <ScrollView style={styles.kontaner}>
      <View style={styles.container}>
      <Card>
        <Card.Title>Ringkasan Tagihan</Card.Title>
        <Card.Divider />
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Total Tagihan Belum Dibayar</ListItem.Title>
            <ListItem.Subtitle>Rp. 1.000.000</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Total Tagihan Sudah Dibayar</ListItem.Title>
            <ListItem.Subtitle>Rp. 3.000.000</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        {/* Tambahkan item atau informasi lainnya sesuai kebutuhan */}
      </Card>

    </View>
    <Custombutton label="Bayar" 
      onPress={Bayar}/>
    
    
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
