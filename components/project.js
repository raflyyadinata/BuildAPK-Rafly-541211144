import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { DislikeButton } from './dislike';
import { LikeButton } from './like';

function Project({image, title, desc}) {
  return (
    <View style={styles.container}>
      <View style={styles.projectContainer}>
        <Image
          style={styles.content}
          source={image}
        />
        <View style={styles.fixToText}>
          <View>
            <Text style={styles.header2}>{title}</Text>
            <Text style={styles.header3}>{desc}</Text>
          </View>
          <View
            style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <DislikeButton />
            <LikeButton />
          </View>
        </View>
      </View>
    </View>
  );
}

export { Project };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ecf0f1',
    padding: 0,
    paddingTop: 50,
  },
  projectContainer: {
    padding: 5,
  },
  header2: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 10,
  },
  header3: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 10,
  },
  content: {
    width: 275,
    height: 200,
    resizeMode: 'stretch',
    alignSelf: 'center',
    borderRadius: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});