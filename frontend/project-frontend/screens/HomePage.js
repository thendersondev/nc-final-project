import { Text, View, Button } from 'react-native';
import styles from '../styles/HomeStyles';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';
import NavBar from '../navigation/NavBar';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>gamePare - buy. swap. shop</Text>
      {/* <Button
        title="Go to games"
        onPress={() => navigation.navigate("Games")}
      />
      <Text>
        Current User :{" "}
        {auth.currentUser ? auth.currentUser?.email : "Not Signed In"}
      </Text>
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}
