import styles from "../styles/CompareGamesStyles";
import { Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GameCard } from "../Components/GameCard";
import { v4 as uuidv4 } from "uuid";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { fetchItems } from "../models/model_items";
import { TextInput } from "react-native-gesture-handler";
import { Appbar, Provider } from "react-native-paper";

export default function CompareGamesPage() {
  const [query, setQuery] = useState("PS5");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchItems(query).then((items) => {
      setData(Object.values(items));
    });
  }, [query]);

  return (
    <Provider>
      <Appbar.Header style={styles.Appbar}>
        <Appbar.Content title="Compare" />
      </Appbar.Header>
      <View style={styles.container}>
        <View>
          <TextInput
            placeholderTextColor={"#694fad"}
            placeholder="Search Here..."
            value={search}
            style={styles.searchBar}
            onChangeText={(text) => {
              setSearch(text);
              setQuery("");
            }}
          ></TextInput>
        </View>
        <View style={styles.catagoriesContainer}>
          <Text style={styles.sortBy}>Sort By:</Text>
          <View style={styles.catagoryButtonsGroup}>
            <TouchableOpacity
              style={styles.catagoryButton}
              onPress={() => setQuery("Xbox SeriesX")}
            >
              <Text style={styles.catagoryButtonText}>Xbox</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.catagoryButton}
              onPress={() => setQuery("PS5")}
            >
              <Text style={styles.catagoryButtonText}>PS5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.catagoryButton}
              onPress={() => setQuery("Nintendo Switch")}
            >
              <Text style={styles.catagoryButtonText}>Nintendo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.catagoryButton}
              onPress={() => setQuery("")}
            >
              <Text style={styles.catagoryButtonText}>All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          windowSize={5}
          data={data}
          renderItem={(item) => <GameCard item={item} search={search} />}
          keyExtractor={uuidv4}
        />

        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
