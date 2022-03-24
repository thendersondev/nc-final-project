import { Text, View, Button, FlatList } from "react-native";
import styles from "../styles/CompareGamesStyles";
import { StatusBar } from "expo-status-bar";
import { GameCard } from "../Components/GameCard";

export default function CompareGamesPage({ navigation }) {
  const mockArray = [
    {
      title: "Sniper Elite 5 Deluxe Edition - GAME Exclusive",
      url: "https://www.game.co.uk/en/sniper-elite-5-deluxe-edition-game-exclusive-2879001",
      price: "£79.99",
      imgUrl: "img.game.co.uk/ml2/8/1/7/3/817385_gen_b.png",
      platform: "PlayStation 5",
    },
    {
      title: "Sniper Elite 3 Deluxe Edition - GAME Exclusive",
      url: "https://www.game.co.uk/en/sniper-elite-5-deluxe-edition-game-exclusive-2879004",
      price: "£79.99",
      imgUrl: "img.game.co.uk/ml2/8/1/7/3/817389_gen_b.png",
      platform: "Xbox Series X",
    },
    {
      title: "Sniper Elite 6 Deluxe Edition - GAME Exclusive",
      url: "https://www.game.co.uk/en/sniper-elite-5-deluxe-edition-game-exclusive-2878998",
      price: "£79.99",
      imgUrl: "img.game.co.uk/ml2/8/1/7/3/817381_ps4_b.png",
      platform: "PlayStation 4",
    },
    {
      title: "Gran Turismo 7",
      url: "https://www.game.co.uk/en/gran-turismo-7-2868055",
      price: "£69.99",
      imgUrl: "img.game.co.uk/ml2/8/1/1/6/811675_gen_b.png",
      platform: "PlayStation 5",
    },
    {
      title: "DualSense Wireless Controller - Galactic Purple",
      url: "https://www.game.co.uk/en/dualsense-wireless-controller-galactic-purple-2871410",
      price: "£64.99",
      imgUrl: "img.game.co.uk/ml2/8/1/3/9/813965_gen_b.png",
      platform: "PlayStation 5",
    },
  ];

  return (
    <View style={styles.container}>
      <Text>Compare game prices here</Text>

      <FlatList
        data={mockArray}
        renderItem={GameCard}
        keyExtractor={(item) => item.title}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}
