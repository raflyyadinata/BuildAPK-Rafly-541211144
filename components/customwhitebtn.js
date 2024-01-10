import { Text, View, StyleSheet, Image,TextInput,Button,TouchableOpacity } from 'react-native';

export default function Customwhitebtn(props) {
  return (
    <View style={styles.container}>
     <TouchableOpacity color ="red"
      style={styles.buton}
      onPress = {props.onPress}
    >
      <Text  style={styles.buttonText1}>{props.label}</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
   input: {
    height: 40,
    width : 280,
    borderRadius : 10,
    margin: 6,
    borderWidth: 1,
    padding: 10,
    backgroundColor : 'white'
  },
  buton: {
    borderRadius: 10,
    height: 40,
    width : 280,
    borderWidth: 1,

  },
  buttonText1: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding : 10,
  },

});
