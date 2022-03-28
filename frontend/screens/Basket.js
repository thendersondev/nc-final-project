import { Text, View } from 'react-native';
import styles from '../styles/CompareGamesStyles';
import { StatusBar } from 'expo-status-bar';

export default function Basket() {
  return (
    <View style={styles.container}>
      <Text>Your Basket:</Text>

      <StatusBar style="auto" />
    </View>
  );
}
