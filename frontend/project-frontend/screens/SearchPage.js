import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import styles from "../styles/CompareGamesStyles";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SearchPage({ navigation }) {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text>You be searching</Text>
        <TextInput
          style={searchStyles.input}
          placeholder="what you looking for bro?"
        />
        {/* <Button title="Go to home" onPress={() => navigation.navigate('Home')} /> */}
        <StatusBar style="auto" />
      </View>
    </KeyboardAwareScrollView>
  );
}

const searchStyles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "#694fad",
  },
});
