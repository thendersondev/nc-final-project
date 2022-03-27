import {
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/TradeStyles";
import { StatusBar } from "expo-status-bar";
import { TradeGameCard } from "../Components/TradeGameCard";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import PostTrade from "../Components/PostTrade";

export default function TradePage() {
  const mockTradeData = [
    {
      username: "MrAmazon247",
      title: "Pokemon Shining Pearl",
      platform: "Nintendo Switch",
      location: "Glasgow",
      condition: "pristine",
      price: "£23.99",
    },
    {
      username: "RandomUser",
      title: "Nintendo Super Smash Bros Ultimate",
      platform: "Xbox SeriesX",
      location: "Leeds",
      condition: "scuffed",
      price: "£15",
    },
    {
      username: "MrAmazon247",
      title: "Call of Duty 4",
      platform: "Nintendo Switch",
      location: "Glasgow",
      condition: "pristine",
      price: "£12.99",
    },
    {
      username: "RandomUser",
      title: "Nintendo Super Smash Bros Ultimate",
      platform: "PS5",
      location: "Leeds",
      condition: "scuffed",
      price: "£15",
    },
    {
      username: "MrAmazon247",
      title: "Pokemon Shining Pearl",
      platform: "Nintendo Switch",
      location: "Glasgow",
      condition: "pristine",
      price: "£27.99",
    },
    {
      username: "RandomUser",
      title: "Nintendo Super Smash Bros Ultimate",
      platform: "Nintendo Switch",
      location: "Leeds",
      condition: "scuffed",
      price: "£15",
    },
    {
      username: "MrAmazon247",
      title: "Pokemon Shining Pearl",
      platform: "Nintendo Switch",
      location: "Glasgow",
      condition: "pristine",
      price: "£4.99",
    },
    {
      username: "RandomUser",
      title: "Nintendo Super Smash Bros Ultimate",
      platform: "Nintendo Switch",
      location: "Leeds",
      condition: "scuffed",
      price: "£15",
    },
  ];
  const [tradeables, setTradebles] = useState();
  const [query, setQuery] = useState("Xbox SeriesX PS5 Nintendo Switch");
  const [loadPost, setLoadPost] = useState(false);
  const [loadTrade, setLoadTrade] = useState(true);
  const [back, setBack] = useState(false);

  useEffect(() => {
    // fetch trade items
    // setTradeables
  }, []);

  const onPress = (e) => {
    switch (e) {
      case "post":
        setLoadPost(true);
        setLoadTrade(false);
        setBack(true);
        break;
      case "back":
        setLoadPost(false);
        setLoadTrade(true);
        setBack(false);
        break;
    }
  };

  return (
    <View style={styles.container}>
      {!loadPost && (
        <TouchableOpacity style={styles.button} onPress={() => onPress("post")}>
          <Text style={styles.text}>Post an item</Text>
        </TouchableOpacity>
      )}
      {loadPost && (
        <View>
          <PostTrade />{" "}
          <TouchableOpacity
            style={styles.button}
            onPress={() => onPress("back")}
          >
            <Text style={styles.text}>Go back</Text>
          </TouchableOpacity>
        </View>
      )}

      {loadTrade && (
        <View style={styles.container}>
          <Text style={styles.pageTitle}>Trade games here!</Text>
          {/* <View> */}
          <FlatList
            data={mockTradeData}
            renderItem={(item, index, separators) => TradeGameCard(item)}
            keyExtractor={uuidv4}
          />
          <StatusBar style="auto" />
          {/* </View> */}
        </View>
      )}
    </View>
  );
}
