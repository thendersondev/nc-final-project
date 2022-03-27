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
import UserPage from "../Components/UserPage";
import MessagePage from "../Components/MessagePage";

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
  const [profile, setProfile] = useState({ on: false });
  const [message, setMessage] = useState({ on: false });

  useEffect(() => {
    // fetch trade items
    // setTradeables
    // flatList tradeables
  }, []);

  const onPress = (e) => {
    switch (e) {
      case "post":
        setLoadPost(true);
        setLoadTrade(false);
        break;
      case "back":
        setProfile({ on: false });
        setMessage({ on: false });
        setLoadPost(false);
        setLoadTrade(true);
        break;
    }
  };

  if (message.on)
    return (
      <View style={styles.container}>
        <MessagePage
          props={[message.username, setProfile, setMessage]}
        ></MessagePage>
        <TouchableOpacity style={styles.button} onPress={() => onPress("back")}>
          <Text style={styles.text}>Go back to trades</Text>
        </TouchableOpacity>
      </View>
    );
  else if (profile.on) {
    return (
      <View style={styles.container}>
        <UserPage props={[profile.username, setMessage]}></UserPage>
        <TouchableOpacity style={styles.button} onPress={() => onPress("back")}>
          <Text style={styles.text}>Go back to trades</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {!loadPost && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => onPress("post")}
          >
            <Text style={styles.text}>Post an item</Text>
          </TouchableOpacity>
        )}

        {loadPost && (
          <View>
            <PostTrade />
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
              renderItem={(item, index, separators) =>
                TradeGameCard(item, setProfile, setMessage)
              }
              keyExtractor={uuidv4}
            />
            <StatusBar style="auto" />
            {/* </View> */}
          </View>
        )}
      </View>
    );
  }
}
