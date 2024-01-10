import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const Custombutton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} style={styles.button}>
        <Text style={styles.buttonText}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 20,
  },
  button: {
    borderRadius: 10,
    height: 40,
    width: 280,
    backgroundColor: '#c61d1f',
    justifyContent: 'center', // Untuk mengatur teks di tengah tombol
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
});

export default Custombutton;
