import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import styles from "../styles/CompareGamesStyles";
import { StatusBar } from "expo-status-bar";
import { GameCard } from "../Components/GameCard";
import { v4 as uuidv4 } from "uuid";
import { fetchItems } from "../models/model_items";

export default function CompareGamesPage({ navigation }) {
  const mockArray = 
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("Xbox SeriesX PS5 Nintendo Switch");
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetchItems().then((items) => {
  //     setData(items);
  //     setLoading(false);
  //   });
  // }, []);

  // if (loading) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>. . . L O A D I N G . . .</Text>
  //     </View>
  //   );
  // } else {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Compare game prices here!</Text>

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
        </View>
      </View>
      {/* uses dummy data */}
      <FlatList
        data={mockArray}
        renderItem={(item, index, separators) => GameCard(item, query)}
        extraData={query}
        keyExtractor={uuidv4}
      />

      <StatusBar style="auto" />
    </View>
  );
}
// }
