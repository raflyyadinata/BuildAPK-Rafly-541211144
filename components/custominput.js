import { Text, View, StyleSheet, Image,TextInput } from 'react-native';

export default function Custominput(props) {
  return (
    <View style={styles.container}>
     <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
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
    borderWidth: 1,
    padding: 10,
    backgroundColor : 'white'
  },
});
