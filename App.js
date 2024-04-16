import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require(".\Users\Paulo Magdalena\Desktop\PROJETO ANDROID\my-app\SRC\ASSETS/images")}>
      style={styles.Image}
      /</Image>
    <Text>tttt</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    marginBottom: 60,
  }
});
