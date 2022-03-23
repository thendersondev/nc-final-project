import { Text, View, Button } from 'react-native';
import styles from '../styles/CompareGamesStyles';
import { StatusBar } from 'expo-status-bar';

export default function TradePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Trade here</Text>
      {/* <Button title="Go to home" onPress={() => navigation.navigate('Home')} /> */}
      <StatusBar style="auto" />
    </View>
  );
}
