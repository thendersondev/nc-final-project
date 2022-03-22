import { Text, View, Button } from 'react-native';
import styles from '../styles/CompareGamesStyles';
import { StatusBar } from 'expo-status-bar';

export default function SearchPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>You be searching</Text>
      {/* <Button title="Go to home" onPress={() => navigation.navigate('Home')} /> */}
      <StatusBar style="auto" />
    </View>
  );
}
