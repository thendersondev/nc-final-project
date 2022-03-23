import { Text, View, Button } from "react-native";
import styles from "../styles/CompareGamesStyles";
import { StatusBar } from "expo-status-bar";

export default function Account(props) {
  console.log(props);

  return (
    <View style={styles.container}>
      <Text>Here are your account details</Text>
      {/* <Button title="Go to home" onPress={() => navigation.navigate('Home')} /> */}
      <StatusBar style="auto" />
    </View>
  );
}
