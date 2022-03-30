import { Text, View, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/TradeStyles";
import { StatusBar } from "expo-status-bar";
import { TradeGameCard } from "../Components/TradeGameCard";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { fetchTrades } from "../models/model_trades";
import { Appbar, Provider } from "react-native-paper";

export default function TradePage() {
  const navigation = useNavigation();
  const [trades, setTrades] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    fetchTrades().then((data) => {
      setTrades(Object.values(data));
    });
  }, [refresh]);

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
          <FlatList
            data={trades}
            renderItem={(item, index, separators) =>
              TradeGameCard(item, refresh, setRefresh, navigation)
            }
            keyExtractor={uuidv4}
          />
          <StatusBar style="auto" />
        </View>
      </View>
    </Provider>
  );
}
