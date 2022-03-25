import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import styles from "../styles/CompareGamesStyles";
import { StatusBar } from "expo-status-bar";
import { GameCard } from "../Components/GameCard";
import { v4 as uuidv4 } from "uuid";
import { fetchItems } from "../models/model_items";

export default function CompareGamesPage({ navigation }) {
  const mockArray = [
    {
      title: "Kirby and the Forgotten Land",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/cb69/1028272.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=5c493a4727e524d9a261b942a54e8637",
      price: "41.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/kirby-and-the-forgotten-land-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Pokemon Legends Arceus",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/54bd/897252.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=bebbbf8723700b66ba154bc3affe2857",
      price: "48.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/pokemon-legends-arceus-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Colors Live",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/ba07/910575.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=6ff061041d8e51eb9066b469762e2ab1",
      price: "36.09",
      url: "https://www.365games.co.uk/nintendo-switch-games/colors-live-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Lego Star Wars The Skywalker Saga",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/1d32/1032340.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=94c68a5bf96f664f8260d35310d70b25",
      price: "37.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/lego-star-wars-the-skywalker-saga-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Paper Mario The Origami King",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/09cf/730088.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=b58fd6ab23a6a7ea9313448056c4db12",
      price: "34.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/paper-mario-the-origami-king-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Dying Light Platinum Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/b329/958241.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=9c54a2228a8dfce36c3a0977db064e8e",
      price: "45.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/dying-light-platinum-edition-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Pokemon Shining Pearl",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/cb13/897241.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=02102f783654c015116d78f2ae255d72",
      price: "38.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/pokemon-shining-pearl-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Neogeo Pocket Color Selection Vol 1",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/2f21/910564.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=d57c1a4fc19d95f3dd3147237ad515c8",
      price: "33.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/neogeo-pocket-color-selection-vol-1-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Chocobo GP",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/b2f3/1028267.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=a370a55ededeeaa60c3994fcbc00e92a",
      price: "35.19",
      url: "https://www.365games.co.uk/nintendo-switch-games/chocobo-gp-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Monster Hunter Generations Ultimate",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/55ab/pc-and-video-games-games-switch-monster-hunter-generations-ultimate-nintendo-2.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8d75e0cdaf8622d0b65f50ed175bfa81",
      price: "27.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/monster-hunter-generations-ultimate-nintendo-switch-game-ntsc-version",
      platform: "Nintendo Switch",
    },
    {
      title: "Street Fighter 30th Anniversary Collection",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/f119/pc-and-video-games-games-switch-street-fighter-30th-anniversary-collection-nintendo-2.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=e2bc81ba1099ed6ec5b0f103714fe7a0",
      price: "23.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/street-fighter-30th-anniversary-collection-nintendo-switch-game-ntsc-version",
      platform: "Nintendo Switch",
    },
    {
      title: "Shin Megami Tensei III Nocturne HD Remaster",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/4730/826500.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=c691f4956f617d693c42751813145971",
      price: "46.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/shin-megami-tensei-iii-nocturne-hd-remaster-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Okami Zekkeiban",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/b15f/779345.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=81c786b36e9357c51b7c687e84adfef7",
      price: "31.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/okami-zekkeiban-nintendo-switch-game-ntsc-j-version",
      platform: "Nintendo Switch",
    },
    {
      title: "Xenoblade Chronicles 2",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/f85c/pc-and-video-games-games-switch-xenoblade-chronicles-2-nintendo.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=acafbbe7d2ca3c98644e2821cafbddac",
      price: "64.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/xenoblade-chronicles-2-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Astral Chain",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/8436/pc-and-video-games-games-switch-astral-chain-nintendo.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=3ddc472e18948f530517c4273ddb8b06",
      price: "55.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/astral-chain-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Streets of Rage 4 Anniversary Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/288a/906431.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=3bde561b776574185aec50ebe1d56090",
      price: "33.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/streets-of-rage-4-anniversary-edition-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Horizon Forbidden West",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/1846/917242.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=7cb4720b14689fdc0a537eb8bd9a47fa",
      price: "53.99",
      url: "https://www.365games.co.uk/ps5-games/horizon-forbidden-west-ps5-game",
      platform: "PS5",
    },
    {
      title: "Gran Turismo 7",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/2b33/953198.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8004d6adc76945355550e303b844d697",
      price: "61.99",
      url: "https://www.365games.co.uk/ps5-games/gran-turismo-7-ps5-game",
      platform: "PS5",
    },
    {
      title: "Dying Light 2 Stay Human",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/fcd2/894692.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=5e3435871a97b0071c1105a16752fc54",
      price: "47.49",
      url: "https://www.365games.co.uk/ps5-games/dying-light-2-stay-human-ps5-game",
      platform: "PS5",
    },
    {
      title: "Far Cry 6",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/7fc1/758256.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=6aa81e585c1f2c0f50a2efd8681575e3",
      price: "29.99",
      url: "https://www.365games.co.uk/ps5-games/far-cry-6-ps5-game",
      platform: "PS5",
    },
    {
      title: "Lego Star Wars The Skywalker Saga",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/2e71/1032212.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=b92da6e0d1801678574837df10477441",
      price: "37.99",
      url: "https://www.365games.co.uk/ps5-games/lego-star-wars-the-skywalker-saga-ps5-game",
      platform: "PS5",
    },
    {
      title: "WWE 2K22",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/e5f2/1025769.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=b69b3cdea91211a3b0dcd45fb413e651",
      price: "52.99",
      url: "https://www.365games.co.uk/ps5-games/wwe-2k22-ps5-game",
      platform: "PS5",
    },
    {
      title: "Uncharted Legacy of Thieves Collection",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/980d/971018.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=402f4516dbeba8a50e134395fbe5a50d",
      price: "33.29",
      url: "https://www.365games.co.uk/ps5-games/uncharted-legacy-of-thieves-collection-ps5-game",
      platform: "PS5",
    },
    {
      title: "Ratchet Clank Rift Apart",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/e2a8/853873.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=565261664dca88a2c7cdf1ce22e21b46",
      price: "42.99",
      url: "https://www.365games.co.uk/ps5-games/ratchet-and-clank-rift-apart-ps5-game",
      platform: "PS5",
    },
    {
      title: "Marvels SpiderMan Miles Morales",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/839d/764198.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=6684399a4b74d60ee42425812f1d44cc",
      price: "38.99",
      url: "https://www.365games.co.uk/ps5-games/marveland039s-spider-man-miles-morales-ps5-game",
      platform: "PS5",
    },
    {
      title: "Marvels Guardians of the Galaxy",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/fc86/897759.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=4aebf69847ae6ece0ef65b541b87c18d",
      price: "56.99",
      url: "https://www.365games.co.uk/ps5-games/marveland039s-guardians-of-the-galaxy-ps5-game",
      platform: "PS5",
    },
    {
      title: "Sackboy A Big Adventure",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/e956/764213.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=ed882cb1cda90a36619b42f2ba50d28b",
      price: "59.49",
      url: "https://www.365games.co.uk/ps5-games/sackboy-a-big-adventure-ps5-game",
      platform: "PS5",
    },
    {
      title: "Final Fantasy VII Remake Intergrade",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/ccab/805427.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=4e24f21bda715dbf5a87c479d2d8162c",
      price: "66.49",
      url: "https://www.365games.co.uk/ps5-games/final-fantasy-vii-remake-intergrade-ps5-game",
      platform: "PS5",
    },
    {
      title: "FIFA 22",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/57e5/958383.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=99a9660346ab8f61a26b41c0366db57c",
      price: "44.69",
      url: "https://www.365games.co.uk/ps5-games/fifa-22-ps5-game",
      platform: "PS5",
    },
    {
      title: "Alan Wake Remastered",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/1cff/919167.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=bd08b2037a21709371a8045901eec9cc",
      price: "16.29",
      url: "https://www.365games.co.uk/ps5-games/alan-wake-remastered-ps5-game",
      platform: "PS5",
    },
    {
      title: "Demons Souls",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/5edf/764188.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=cc40d12916572108f39984b12cc755dd",
      price: "52.99",
      url: "https://www.365games.co.uk/ps5-games/demonand039s-souls-ps5-game",
      platform: "PS5",
    },
    {
      title: "WWE 2K22",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/4bc8/1025789.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=67c8629b33bbc3c49d839c39dfc0a591",
      price: "52.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/wwe-2k22-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Chorus Day One Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/9c87/961135.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=28af3d02615de831655dc0603860d686",
      price: "29.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/chorus-day-one-edition-xbox-one-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Forza Horizon 5",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/692e/918658.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=f75aeb8a16e19f4a8e965fbea1890826",
      price: "49.39",
      url: "https://www.365games.co.uk/xbox-series-x-games/forza-horizon-5-xbox-one-xbox-series-x",
      platform: "Xbox SeriesX",
    },
    {
      title: "Evil West",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/8fa3/1052368.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=56bb7e623a21500c523e8a4f980e2c9c",
      price: "42.79",
      url: "https://www.365games.co.uk/xbox-series-x-games/evil-west-xbox-one-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "A Plague Tale Requiem",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/c527/1052392.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=a37235d941b6e193d41f5350b3af543c",
      price: "42.79",
      url: "https://www.365games.co.uk/xbox-series-x-games/a-plague-tale-requiem-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "STALKER 2 Heart of Chernobyl",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/bf1d/913962.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=c43f7dcdbc69089f0cd749b5daf931fd",
      price: "42.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/s-t-a-l-k-e-r-2-heart-of-chernobyl-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Maneater",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/c1af/767970.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=27b1a85713b1794025af85793ee3b403",
      price: "12.69",
      url: "https://www.365games.co.uk/xbox-series-x-games/maneater-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Dolmen Day One Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/77e9/1034618.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=717f631535fd709fc19ec40c0cbd0ca3",
      price: "31.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/dolmen-day-one-edition-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Tennis World Tour 2",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/426c/794662.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=615985e786cb6b559eb136ffd018a442",
      price: "29.24",
      url: "https://www.365games.co.uk/xbox-series-x-games/tennis-world-tour-2-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Port Royale 4 Extended Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/1d16/912759.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=b52a322007d487d0653c3f5bbdd66d35",
      price: "41.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/port-royale-4-extended-edition-xbox-one-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "NHL 22",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/9277/913818.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=2d0c466e85daf27b1e2d71316c1d5dc5",
      price: "39.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/nhl-22-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Madden 22",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/73da/907088.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=320d9c1f114976293e98c43a8aada9c9",
      price: "46.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/madden-22-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
  ];
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
