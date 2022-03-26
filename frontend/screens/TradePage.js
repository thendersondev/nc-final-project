import {
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import styles from "../styles/TradeStyles";
import { StatusBar } from "expo-status-bar";
import { TradeGameCard } from "../Components/TradeGameCard";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import PostTrade from "../Components/PostTrade";

export default function TradePage() {
  const mockTradeData = [
    {
      user: "Jeff Bezos",
      title: "Pokemon Shining Pearl",
      platform: "Nintendo Switch",
      location: "Glasgow",
      condition: "pristine",
      price: "£100000",
    },
    {
      user: "Mark 'ZUCC' Zuccerberg",
      title: "Nintendo Super Smash Bros Ultimate",
      platform: "Nintendo Switch",
      location: "Leeds",
      condition: "scuffed",
      price: "£15",
    },
    {
      user: "Jeff Bezos",
      title: "Pokemon Shining Pearl",
      platform: "Nintendo Switch",
      location: "Glasgow",
      condition: "pristine",
      price: "£100000",
    },
    {
      user: "Mark 'ZUCC' Zuccerberg",
      title: "Nintendo Super Smash Bros Ultimate",
      platform: "Nintendo Switch",
      location: "Leeds",
      condition: "scuffed",
      price: "£15",
    },
    {
      user: "Jeff Bezos",
      title: "Pokemon Shining Pearl",
      platform: "Nintendo Switch",
      location: "Glasgow",
      condition: "pristine",
      price: "£100000",
    },
    {
      user: "Mark 'ZUCC' Zuccerberg",
      title: "Nintendo Super Smash Bros Ultimate",
      platform: "Nintendo Switch",
      location: "Leeds",
      condition: "scuffed",
      price: "£15",
    },
    {
      user: "Jeff Bezos",
      title: "Pokemon Shining Pearl",
      platform: "Nintendo Switch",
      location: "Glasgow",
      condition: "pristine",
      price: "£100000",
    },
    {
      user: "Mark 'ZUCC' Zuccerberg",
      title: "Nintendo Super Smash Bros Ultimate",
      platform: "Nintendo Switch",
      location: "Leeds",
      condition: "scuffed",
      price: "£15",
    },
  ];

  return (
    <>
      <PostTrade />
      <View style={styles.container}>
        <Text>Games available for trading:</Text>
        {/* <View> */}
        <FlatList
          data={mockTradeData}
          renderItem={(item, index, separators) => TradeGameCard(item)}
          keyExtractor={uuidv4}
        />
        <StatusBar style="auto" />
        {/* </View> */}
      </View>
    </>
  );
}
