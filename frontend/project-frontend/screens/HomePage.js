import { Text, View, Button } from 'react-native';
import styles from '../styles/HomeStyles';
import { StatusBar } from 'expo-status-bar';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>gamePare - buy. swap. shop</Text>
      {/* <Button
        title="Go to games"
        onPress={() => navigation.navigate("Games")}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}
