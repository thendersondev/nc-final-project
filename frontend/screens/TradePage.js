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
import { storage } from "../firebase";

export default function TradePage() {
  const navigation = useNavigation();
  const [trades, setTrades] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrades().then((data) => {
      for (const entry in data) {
        data[entry].key = entry;
      }

      setTrades(Object.values(data));

      const photoUrls = Object.values(data).map((entry) => {
        return ref(
          storage,
          `/${entry.userUID}-${entry.title.replaceAll(" ", "-")}`
        );
      });

      // this seems better practice with the next then block
      // return Promise.all(
      //   photoUrls.map((url) => {
      //     return getDownloadURL(url);
      //   })
      // );

      // but this is faster
      photoUrls.forEach((url) => {
        getDownloadURL(url).then((img) => {
          setUrls((prev) => {
            return [...prev, img];
          });
        });
      });

      setLoading(false);
    });
    // .then((images) => {
    //   setUrls(images);
    //   setLoading(false);
    // });
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
        <Text style={styles.pageTitle}>Trade games here!</Text>
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
                TradeGameCard(
                  item,
                  refresh,
                  setRefresh,
                  navigation,
                  urls,
                  index
                )
              }
              keyExtractor={uuidv4}
            />
          )}
          <StatusBar style="auto" />
        </View>
      </View>
    </Provider>
  );
}
