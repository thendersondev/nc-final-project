import { Text, View, Button, FlatList } from "react-native";
import styles from "../styles/CompareGamesStyles";
import { StatusBar } from "expo-status-bar";
import { GameCard } from "../Components/GameCard";
import { v4 as uuidv4 } from "uuid";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { fetchItems } from "../models/model_items";
import { TextInput } from "react-native-gesture-handler";

export default function CompareGamesPage({ navigation }) {
  const mockObject = {
    "Fortnite The Last Laugh Bundle": {
      title: "Fortnite The Last Laugh Bundle",
      platform: "PS5",
      imgUrl: "https://img.game.co.uk/ml2/8/0/1/4/801468_gen_b.png",
      price: { 365: "199.99", game: "17.99", box: "199.99" },
      bestPrice: "17.99",
      bestStore: "game",
    },
    "Mortal Kombat 11 Ultimate": {
      title: "Mortal Kombat 11 Ultimate",
      platform: "PS5",
      imgUrl: "https://img.game.co.uk/ml2/8/0/1/9/801916_gen_b.png",
      price: { 365: "199.99", game: "24.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    Ghostrunner: {
      title: "Ghostrunner",
      platform: "PS5",
      imgUrl: "https://img.game.co.uk/ml2/8/0/6/3/806360_gen_b.png",
      price: { 365: "199.99", game: "24.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Farming Simulator 22": {
      title: "Farming Simulator 22",
      platform: "PS5",
      imgUrl: "https://img.game.co.uk/ml2/8/0/6/4/806416_gen_b.png",
      price: { 365: "199.99", game: "44.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Forspoken GAME Exclusive": {
      title: "Forspoken GAME Exclusive",
      platform: "PS5",
      imgUrl: "https://img.game.co.uk/ml2/8/1/1/6/811667_gen_b.png",
      price: { 365: "199.99", game: "59.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    Rustler: {
      title: "Rustler",
      platform: "PS5",
      imgUrl: "https://img.game.co.uk/ml2/8/0/5/6/805683_gen_b.png",
      price: { 365: "199.99", game: "9.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Poker Club": {
      title: "Poker Club",
      platform: "PS5",
      imgUrl: "https://img.game.co.uk/ml2/8/1/0/6/810658_gen_b.png",
      price: { 365: "199.99", game: "9.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Death Stranding Directors Cut": {
      title: "Death Stranding Directors Cut",
      platform: "PS5",
      imgUrl: "https://img.game.co.uk/ml2/8/0/7/7/807797_gen_b.png",
      price: { 365: "199.99", game: "42.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "In Sound Mind Deluxe Edition": {
      title: "In Sound Mind Deluxe Edition",
      platform: "PS5",
      imgUrl: "https://img.game.co.uk/ml2/8/0/5/1/805157_gen_b.png",
      price: { 365: "199.99", game: "12.99", box: "199.99" },
      bestPrice: "12.99",
      bestStore: "game",
    },
    "MXGP 2020 The Official Motocross Videogame": {
      title: "MXGP 2020 The Official Motocross Videogame",
      platform: "PS5",
      imgUrl: "https://img.game.co.uk/ml2/8/0/1/5/801514_gen_b.png",
      price: { 365: "199.99", game: "17.99", box: "199.99" },
      bestPrice: "17.99",
      bestStore: "game",
    },
    "WWI Tannenberg Eastern Front": {
      title: "WWI Tannenberg Eastern Front",
      platform: "PS5",
      imgUrl: "https://img.game.co.uk/ml2/8/1/1/1/811188_gen_b.png",
      price: { 365: "199.99", game: "17.99", box: "199.99" },
      bestPrice: "17.99",
      bestStore: "game",
    },
    "Astria Ascending": {
      title: "Astria Ascending",
      platform: "PS5",
      imgUrl: "https://img.game.co.uk/ml2/8/0/9/3/809356_gen_b.png",
      price: { 365: "199.99", game: "19.99", box: "199.99" },
      bestPrice: "19.99",
      bestStore: "game",
    },
    Kunai: {
      title: "Kunai",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/7/9/9/4/799482_gen_b.png",
      price: { 365: "199.99", game: "14.99", box: "199.99" },
      bestPrice: "14.99",
      bestStore: "game",
    },
    "Fitness Boxing 2 Rhythm Exercise": {
      title: "Fitness Boxing 2 Rhythm Exercise",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/8/0/2/1/802168_gen_b.png",
      price: { 365: "199.99", game: "32.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Summer In Mara": {
      title: "Summer In Mara",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/8/1/3/4/813468_gen_b.png",
      price: { 365: "199.99", game: "34.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Pokken Tournament DX Battle Pack": {
      title: "Pokken Tournament DX Battle Pack",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/7/2/1/1/721174_gen_b.png",
      price: { 365: "199.99", game: "13.49", box: "199.99" },
      bestPrice: "13.49",
      bestStore: "game",
    },
    "88 Heroes": {
      title: "88 Heroes",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/8/0/2/3/802340_gen_b.png",
      price: { 365: "199.99", game: "9.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Legend of Kay Anniversary Edition": {
      title: "Legend of Kay Anniversary Edition",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/7/2/2/9/722963_gen_b.png",
      price: { 365: "199.99", game: "12.99", box: "199.99" },
      bestPrice: "12.99",
      bestStore: "game",
    },
    "Ministry of Broadcast": {
      title: "Ministry of Broadcast",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/7/6/8/4/768403_gen_b.png",
      price: { 365: "199.99", game: "19.99", box: "199.99" },
      bestPrice: "19.99",
      bestStore: "game",
    },
    "Snipperclips Cut It Out Together Plus Pack": {
      title: "Snipperclips Cut It Out Together Plus Pack",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/7/2/2/9/722987_gen_b.png",
      price: { 365: "199.99", game: "8.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "DDC Super Smash Bros Ultimate Fighters Pass Vol 2": {
      title: "DDC Super Smash Bros Ultimate Fighters Pass Vol 2",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/7/6/8/8/768827_gen_b.png",
      price: { 365: "199.99", game: "26.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Theme Park Simulator Standard Edition": {
      title: "Theme Park Simulator Standard Edition",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/8/0/1/5/801593_gen_b.png",
      price: { 365: "199.99", game: "29.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Alpaca Ball AllStars": {
      title: "Alpaca Ball AllStars",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/8/0/5/0/805063_gen_b.png",
      price: { 365: "199.99", game: "29.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "The Wonderful 101 Remastered": {
      title: "The Wonderful 101 Remastered",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/7/7/0/3/770382_gen_b.png",
      price: { 365: "199.99", game: "19.99", box: "199.99" },
      bestPrice: "19.99",
      bestStore: "game",
    },
    Indivisible: {
      title: "Indivisible",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/7/7/5/4/775447_gen_b.png",
      price: { 365: "199.99", game: "24.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "RIOT Civil Unrest": {
      title: "RIOT Civil Unrest",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/7/2/0/1/720161_gen_b.png",
      price: { 365: "199.99", game: "14.99", box: "199.99" },
      bestPrice: "14.99",
      bestStore: "game",
    },
    "LEGO DisneyPixar The Incredibles Parr Family Vacation Onl": {
      title: "LEGO DisneyPixar The Incredibles Parr Family Vacation Onl",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/7/2/6/2/726237_gen_b.png",
      price: { 365: "199.99", game: "39.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Dead Cells The Prisoners Edition": {
      title: "Dead Cells The Prisoners Edition",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/7/7/1/0/771025_gen_b.png",
      price: { 365: "199.99", game: "99.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "SNK Heroines Tag Team Frenzy": {
      title: "SNK Heroines Tag Team Frenzy",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/7/3/1/7/731733_gen_b.png",
      price: { 365: "199.99", game: "12.99", box: "199.99" },
      bestPrice: "12.99",
      bestStore: "game",
    },
    "Metroid Prime 4": {
      title: "Metroid Prime 4",
      platform: "Nintendo Switch",
      imgUrl: "https://img.game.co.uk/ml2/6/9/6/1/696148_gen_b.png",
      price: { 365: "199.99", game: "59.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Unknown 9 Awakening": {
      title: "Unknown 9 Awakening",
      platform: "Xbox SeriesX",
      imgUrl: "https://img.game.co.uk/ml2/8/0/5/5/805523_gen_b.png",
      price: { 365: "199.99", game: "59.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Greak Memories Of Azur": {
      title: "Greak Memories Of Azur",
      platform: "Xbox SeriesX",
      imgUrl: "https://img.game.co.uk/ml2/8/0/9/0/809040_gen_b.png",
      price: { 365: "199.99", game: "24.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Unknown 9 Awakening": {
      title: "Unknown 9 Awakening",
      platform: "Xbox SeriesX",
      imgUrl: "https://img.game.co.uk/ml2/8/0/5/5/805523_gen_b.png",
      price: { 365: "199.99", game: "59.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Greak Memories Of Azur": {
      title: "Greak Memories Of Azur",
      platform: "Xbox SeriesX",
      imgUrl: "https://img.game.co.uk/ml2/8/0/9/0/809040_gen_b.png",
      price: { 365: "199.99", game: "24.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Unknown 9 Awakening": {
      title: "Unknown 9 Awakening",
      platform: "Xbox SeriesX",
      imgUrl: "https://img.game.co.uk/ml2/8/0/5/5/805523_gen_b.png",
      price: { 365: "199.99", game: "59.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
    "Greak Memories Of Azur": {
      title: "Greak Memories Of Azur",
      platform: "Xbox SeriesX",
      imgUrl: "https://img.game.co.uk/ml2/8/0/9/0/809040_gen_b.png",
      price: { 365: "199.99", game: "24.99", box: "199.99" },
      bestPrice: "199.99",
      bestStore: "box",
    },
  };
  const mockArray = Object.values(mockObject);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("Xbox SeriesX PS5 Nintendo Switch");
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    fetchItems().then((items) => {
      setData(Object.values(items));
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Compare game prices here!</Text>
      <View>
        <TextInput
          placeholder="Search Here..."
          value={search}
          style={styles.searchBar}
          onChangeText={(text) => {
            setSearch(text);
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
            onPress={() => setQuery("Xbox SeriesX PS5 Nintendo Switch")}
          >
            <Text style={styles.catagoryButtonText}>All</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* uses dummy data */}
      <FlatList
        data={data}
        renderItem={(item, index, separators) => GameCard(item, query, search)}
        extraData={query}
        keyExtractor={uuidv4}
      />

      <StatusBar style="auto" />
    </View>
  );
}
