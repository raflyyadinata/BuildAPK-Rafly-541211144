import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Div,
  Button,
  TextInput,
  ScrollView
} from 'react-native';
import React from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './AssetExample';
import {Project} from './project'

export default function Porto() {
  return (
    <ScrollView style={styles.kontaner}>
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('../assets/propil.png')} />
      <Text style={styles.title}>Rafly adinata</Text>
      <Text style={styles.titel}>
        {' '}
        halo saya adalah anak ke 2, saya dari batang
      </Text>
      <Button
        title="Contact me"
        // onPress={() => Alert.alert('Simple Button pressed')}
      />

      <Text style={styles.titlee}>Porto saya</Text>
      <Image style={styles.avatar1} source={require('../assets/portofoliolokmas.png')} />
      <Image
        style={styles.avatar1}
        source={require('../assets/portoweb.png')}
      />

      <Project
      image ={require('../assets/portoapps.png')}
      title ="Website" />


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5eec8',
    alignItems: 'center',
    paddingBottom : 100,
  },
  kontaner :{
    flex: 6,
    paddingBottom : 100,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titlee: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  titel: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },

  avatar: {
    width: 200,
    height: 200,
    marginTop: 30,
  },

  avatar1: {
    width: 250,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
