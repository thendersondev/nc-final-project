import { Text, View, Button } from 'react-native';
import styles from '../styles/HomeStyles';
import { StatusBar } from 'expo-status-bar';
import 'firebase/auth';
import firebase from 'firebase/app';
import { auth } from '../firebase';
import NavBar from '../navigation/NavBar';
import { fetchItems, fetchItemsByShop } from '../models/model_items';
import { useEffect, useState } from 'react';

export default function HomePage({ navigation }) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchItems().then((items) => {
      console.log(items);
      setGames(items);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <View style={styles.container}>
        <Text> . . . T O M L O V E S P Y T H O N . . . </Text>
        <StatusBar style="auto" />
      </View>
    );
  return (
    <View style={styles.container}>
      <Text>gamePare - buy. swap. shop</Text>
      {Object.keys(games).map((game) => {
        return <Text>{game}</Text>;
      })}
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
