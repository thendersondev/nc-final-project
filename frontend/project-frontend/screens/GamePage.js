import { Text, View, Button } from "react-native";
import styles from "../styles/GameStyles";
import { StatusBar } from "expo-status-bar";

export default function GamePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>it is workingggg</Text>
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
      <StatusBar style="auto" />
    </View>
  );
}
