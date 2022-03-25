import { Text, View, Image, FlatList, Animated } from "react-native";
import styles from "../styles/HomeStyles";
import { StatusBar } from "expo-status-bar";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FeaturedGames } from "../Components/FeaturedGames";
import FadeInView from "../Components/FadeInView";

export default function HomePage(props) {
  const fakeRandom = [
    {
      title: "Gran Turismo 7",
      imgUrl:
        "https://www.box.co.uk//image?id=4885163&quality=90&quality=90&maxwidth=200&maxHeight=140",
      price: "559920.00",
      url: "https://www.box.co.uk/711719766292-Gran-Turismo-7-PS5_3943882.html",
      platform: "PS5",
    },
    {
      title: "Ys VIII Lacrimosa of DANA",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/8509/645654.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=696d15ce41a2b7ba2c27586e9792c9f4",
      price: "39.39",
      url: "https://www.365games.co.uk/nintendo-switch-games/ys-viii-lacrimosa-of-dana-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "WWE 2K22",
      imgUrl: "https://img.game.co.uk/ml2/8/1/5/3/815354_gen_b.png",
      price: "64.99",
      url: "https://www.game.co.uk/en/wwe-2k22-2876120",
      platform: "PS5",
    },
  ];
  const [featured, setFeatured] = useState(fakeRandom);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   /* QUOTA EXCEEDED BUT THIS IS WHAT WE WANT
  //   const randomiser = Math.ceil(Math.random() * 3);
  //   fetchItemsByShop(randomiser).then((items) => {
  //   setFeatured([Object.values(items).slice(0, 3)]);
  //   }); */
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FadeInView style={styles.mainLogo}>
          <Image source={require("../assets/logo.png")}></Image>
        </FadeInView>
      </View>
    );

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.wrapper}>
        <Text style={styles.bold}>Welcome to gamePare</Text>
        <Text style={styles.textCenter}>
          Your one stop shop to buy and swap.
        </Text>
        <MaterialCommunityIcons
          name="microsoft-xbox-controller"
          color={"#694FAD"}
          size={40}
        >
          <Text style={styles.text}>
            find the best deals on the latest games
          </Text>
        </MaterialCommunityIcons>
        <MaterialCommunityIcons
          name="swap-vertical-variant"
          color={"#694FAD"}
          size={40}
        >
          <Text style={styles.text}>find games to trade in your area</Text>
        </MaterialCommunityIcons>
      </View>
      <Text style={styles.featured}>featured games</Text>
      <FlatList
        data={featured}
        renderItem={FeaturedGames}
        keyExtractor={uuidv4}
      />
      <StatusBar style="auto" />
    </View>
  );
}
