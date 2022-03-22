import { Text, View, Button } from "react-native";
import styles from "../styles/CompareGamesStyles";
import { StatusBar } from "expo-status-bar";

export default function Basket({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Your Basket:</Text>
      {/* <Button title="Go to home" onPress={() => navigation.navigate('Home')} /> */}
      <StatusBar style="auto" />
    </View>
  );
}
