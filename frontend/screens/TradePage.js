import { Text, View, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/TradeStyles";
import { StatusBar } from "expo-status-bar";
import { TradeGameCard } from "../Components/TradeGameCard";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function TradePage() {
  const navigation = useNavigation();
  const mockTradeData = [
    {
      uid: "gB0QwbWBU7coZslWOXVmKBycMYp2",
      username: "test1",
      title: "Pokemon Shining Pearl",
      platform: "Nintendo Switch",
      location: "Glasgow",
      price: "£23.99",
    },
    {
      uid: "F1KzoQUobUMbR2c5K0WrejYGJpw1",
      username: "test2",
      title: "Nintendo Super Smash Bros Ultimate",
      platform: "Xbox SeriesX",
      location: "Leeds",
      condition: "scuffed",
      price: "£15",
    },
    {
      uid: "fX5XTxQ8xiUI1rtZSw5s9mGvV292",
      username: "test3",
      title: "Call of Duty 4",
      platform: "Nintendo Switch",
      location: "Glasgow",
      price: "£12.99",
    },
    {
      uid: "yvsEiUH7Sdcc29MX3PLpqKuG4Uw1",
      username: "test4",
      title: "Nintendo Super Smash Bros Ultimate",
      platform: "PS5",
      location: "Leeds",
      condition: "scuffed",
      price: "£15",
    },
  ];
  const [tradeables, setTradebles] = useState();
  const [query, setQuery] = useState("Xbox SeriesX PS5 Nintendo Switch");

  useEffect(() => {
    // fetch trade items
    // setTradeables
    // flatList tradeables
  }, []);

  return (
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
          data={mockTradeData}
          renderItem={(item) => (
            <TradeGameCard item={item} navigation={navigation} />
          )}
          keyExtractor={uuidv4}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
