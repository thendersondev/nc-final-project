import { Text, View, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/TradeStyles";
import { StatusBar } from "expo-status-bar";
import { TradeGameCard } from "../Components/TradeGameCard";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { fetchTrades } from "../models/model_trades";
import { Appbar, Provider } from "react-native-paper";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function TradePage() {
  const navigation = useNavigation();
  const [trades, setTrades] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const collRef = collection(db, "trades");
    const q = query(collRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTrades(
        snapshot.docs.map((doc) => ({
          User: doc.data().User,
          location: doc.data().location,
          platform: doc.data().platform,
          price: doc.data().price,
          title: doc.data().title,
          userUID: doc.data().userUID,
          createdAt: doc.data().createdAt.toDate(),
        }))
      );

      const photoUrls = snapshot.docs.map((doc) => {
        return ref(
          storage,
          `/${doc.data().userUID}-${doc.data().title.replaceAll(" ", "-")}`
        );
      });

      photoUrls.forEach((url) => {
        getDownloadURL(url).then((img) => {
          setUrls((prev) => {
            return [...prev, img];
          });
        });
      });
    });
    setLoading(false);
    return unsubscribe;
  }, []);

  return (
    <Provider>
      <Appbar.Header style={styles.Appbar}>
        <Appbar.Content title="Trades" />
        <Appbar.Action
          icon="message"
          onPress={() => {
            navigation.navigate("Chats");
          }}
        />
      </Appbar.Header>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Post")}
        >
          <Text style={styles.text}>Post an item</Text>
        </TouchableOpacity>
        {!loading && (
          <FlatList
            data={trades}
            renderItem={(item, index, separators) =>
              TradeGameCard(item, refresh, setRefresh, navigation, urls, index)
            }
            keyExtractor={uuidv4}
          />
        )}
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
