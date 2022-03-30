<<<<<<< HEAD
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles/TradeStyles';
import { StatusBar } from 'expo-status-bar';
import { TradeGameCard } from '../Components/TradeGameCard';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { fetchTrades } from '../models/model_trades';
import { auth } from '../firebase';
=======
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/TradeStyles";
import { StatusBar } from "expo-status-bar";
import { TradeGameCard } from "../Components/TradeGameCard";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { fetchTrades } from "../models/model_trades";
>>>>>>> f3738dddce5a9ea1f52d47fe792ac71b1eedcbf0

export default function TradePage() {
  const navigation = useNavigation();
  const [trades, setTrades] = useState([]);
  const [tradeables, setTradebles] = useState();
<<<<<<< HEAD
  const [query, setQuery] = useState('Xbox SeriesX PS5 Nintendo Switch');
  const [refresh , setRefresh] = useState(0) 

  useEffect(() => {
    fetchTrades()
    .then((data)=>{
      const keys = Object.keys(data)
      const values = Object.values(data)
      const array = []
      keys.forEach((key)=>{
        data[key].key = key
        array.push(data[key])
      })
      setTrades(array)
    })
  }, [ refresh ]);
=======
  const [query, setQuery] = useState("Xbox SeriesX PS5 Nintendo Switch");

  useEffect(() => {
    fetchTrades().then((data) => {
      const keys = Object.keys(data);
      const values = Object.values(data);
      console.log(values);
      const array = [];
      keys.forEach((key) => {
        data[key].key = key;
        array.push(data[key]);
      });
      setTrades(Object.values(data));
    });
  }, [TradeGameCard]);
>>>>>>> f3738dddce5a9ea1f52d47fe792ac71b1eedcbf0

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
          data={trades}
          renderItem={(item, index, separators) =>
            TradeGameCard(item, refresh, setRefresh, navigation)
          }
          keyExtractor={uuidv4}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
