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
    "title": "Kirby and the Forgotten Land",
    "imgUrl": "https://d8mkdcmng3.imgix.net/cb69/1028272.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=5c493a4727e524d9a261b942a54e8637",
    "price": "41.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/kirby-and-the-forgotten-land-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Pokemon Legends Arceus",
    "imgUrl": "https://d8mkdcmng3.imgix.net/54bd/897252.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=bebbbf8723700b66ba154bc3affe2857",
    "price": "48.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/pokemon-legends-arceus-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Colors Live",
    "imgUrl": "https://d8mkdcmng3.imgix.net/ba07/910575.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=6ff061041d8e51eb9066b469762e2ab1",
    "price": "36.09",
    "url": "https://www.365games.co.uk/nintendo-switch-games/colors-live-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Lego Star Wars The Skywalker Saga",
    "imgUrl": "https://d8mkdcmng3.imgix.net/1d32/1032340.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=94c68a5bf96f664f8260d35310d70b25",
    "price": "37.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/lego-star-wars-the-skywalker-saga-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Paper Mario The Origami King",
    "imgUrl": "https://d8mkdcmng3.imgix.net/09cf/730088.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=b58fd6ab23a6a7ea9313448056c4db12",
    "price": "34.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/paper-mario-the-origami-king-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Dying Light Platinum Edition",
    "imgUrl": "https://d8mkdcmng3.imgix.net/b329/958241.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=9c54a2228a8dfce36c3a0977db064e8e",
    "price": "45.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/dying-light-platinum-edition-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Pokemon Shining Pearl",
    "imgUrl": "https://d8mkdcmng3.imgix.net/cb13/897241.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=02102f783654c015116d78f2ae255d72",
    "price": "38.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/pokemon-shining-pearl-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Neogeo Pocket Color Selection Vol 1",
    "imgUrl": "https://d8mkdcmng3.imgix.net/2f21/910564.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=d57c1a4fc19d95f3dd3147237ad515c8",
    "price": "33.49",
    "url": "https://www.365games.co.uk/nintendo-switch-games/neogeo-pocket-color-selection-vol-1-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Chocobo GP",
    "imgUrl": "https://d8mkdcmng3.imgix.net/b2f3/1028267.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=a370a55ededeeaa60c3994fcbc00e92a",
    "price": "35.19",
    "url": "https://www.365games.co.uk/nintendo-switch-games/chocobo-gp-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Monster Hunter Generations Ultimate",
    "imgUrl": "https://d8mkdcmng3.imgix.net/55ab/pc-and-video-games-games-switch-monster-hunter-generations-ultimate-nintendo-2.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8d75e0cdaf8622d0b65f50ed175bfa81",
    "price": "27.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/monster-hunter-generations-ultimate-nintendo-switch-game-ntsc-version",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Street Fighter 30th Anniversary Collection",
    "imgUrl": "https://d8mkdcmng3.imgix.net/f119/pc-and-video-games-games-switch-street-fighter-30th-anniversary-collection-nintendo-2.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=e2bc81ba1099ed6ec5b0f103714fe7a0",
    "price": "23.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/street-fighter-30th-anniversary-collection-nintendo-switch-game-ntsc-version",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Shin Megami Tensei III Nocturne HD Remaster",
    "imgUrl": "https://d8mkdcmng3.imgix.net/4730/826500.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=c691f4956f617d693c42751813145971",
    "price": "46.49",
    "url": "https://www.365games.co.uk/nintendo-switch-games/shin-megami-tensei-iii-nocturne-hd-remaster-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Okami Zekkeiban",
    "imgUrl": "https://d8mkdcmng3.imgix.net/b15f/779345.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=81c786b36e9357c51b7c687e84adfef7",
    "price": "31.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/okami-zekkeiban-nintendo-switch-game-ntsc-j-version",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Xenoblade Chronicles 2",
    "imgUrl": "https://d8mkdcmng3.imgix.net/f85c/pc-and-video-games-games-switch-xenoblade-chronicles-2-nintendo.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=acafbbe7d2ca3c98644e2821cafbddac",
    "price": "64.49",
    "url": "https://www.365games.co.uk/nintendo-switch-games/xenoblade-chronicles-2-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Astral Chain",
    "imgUrl": "https://d8mkdcmng3.imgix.net/8436/pc-and-video-games-games-switch-astral-chain-nintendo.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=3ddc472e18948f530517c4273ddb8b06",
    "price": "55.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/astral-chain-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Streets of Rage 4 Anniversary Edition",
    "imgUrl": "https://d8mkdcmng3.imgix.net/288a/906431.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=3bde561b776574185aec50ebe1d56090",
    "price": "33.49",
    "url": "https://www.365games.co.uk/nintendo-switch-games/streets-of-rage-4-anniversary-edition-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Doki Doki Literature Club Plus",
    "imgUrl": "https://d8mkdcmng3.imgix.net/b4fe/908616.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=570776766dc502c89643603b907a5518",
    "price": "29.49",
    "url": "https://www.365games.co.uk/nintendo-switch-games/doki-doki-literature-club-plus-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Gyakuten Saiban 123 Phoenix Wright",
    "imgUrl": "https://d8mkdcmng3.imgix.net/afd1/720418.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=acd73fa99cb545fb9a6d873a63e12e57",
    "price": "33.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/gyakuten-saiban-123-phoenix-wright-nintendo-switch-game-ntsc-j-version",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Sonic Mania Plus",
    "imgUrl": "https://d8mkdcmng3.imgix.net/b074/pc-and-video-games-games-switch-sonic-mania-plus-nintendo-2.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=3473ee3e9964da0b9ec7738b9413d02d",
    "price": "26.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/sonic-mania-plus-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Streets of Rage 4",
    "imgUrl": "https://d8mkdcmng3.imgix.net/a120/727648.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=f1ec7254db6de3febc59dec707f0dd9e",
    "price": "32.49",
    "url": "https://www.365games.co.uk/nintendo-switch-games/streets-of-rage-4-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Untitled Goose Game",
    "imgUrl": "https://d8mkdcmng3.imgix.net/061f/753255.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=3d9c64888d79cad624885a1acab9b343",
    "price": "27.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/untitled-goose-game-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "The Great Ace Attorney Chronicles",
    "imgUrl": "https://d8mkdcmng3.imgix.net/fd21/908463.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=e7aa684c2b70dcacad556d24bf4b99f3",
    "price": "53.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/the-great-ace-attorney-chronicles-nintendo-switch-game-ntsc-version",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Ys VIII Lacrimosa of DANA",
    "imgUrl": "https://d8mkdcmng3.imgix.net/8509/645654.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=696d15ce41a2b7ba2c27586e9792c9f4",
    "price": "39.39",
    "url": "https://www.365games.co.uk/nintendo-switch-games/ys-viii-lacrimosa-of-dana-nintendo-switch-game",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Mega Man ZeroZX Legacy Collection",
    "imgUrl": "https://d8mkdcmng3.imgix.net/80c3/738112.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=7b7a618946d7413a42e57cfa2bcdcba1",
    "price": "24.99",
    "url": "https://www.365games.co.uk/nintendo-switch-games/mega-man-zero-zx-legacy-collection-nintendo-switch-game-ntsc-version",
    "platform": "Nintendo Switch"
  },
  {
    "title": "Collection Of Mana",
    "imgUrl": "https://d8mkdcmng3.imgix.net/f65e/759828.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=bcdde965baaf89ce9a50bc8eb6b93883",
    "price": "25.49",
    "url": "https://www.365games.co.uk/nintendo-switch-games/collection-of-mana-nintendo-switch-game-ntsc-version",
    "platform": "Nintendo Switch"
  }]
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchItems().then((items) => {
      
      setData(items);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>. . . L O A D I N G . . .</Text>
      </View>
    );
  }else{

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Compare game prices here!</Text>

      <View style={styles.catagoriesContainer}>
        <Text style={styles.sortBy}>Sort By:</Text>
        <View style={styles.catagoryButtonsGroup}>
          <TouchableOpacity style={styles.catagoryButton}>
            <Text style={styles.catagoryButtonText}>Xbox</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.catagoryButton}>
            <Text style={styles.catagoryButtonText}>PS5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.catagoryButton}>
            <Text style={styles.catagoryButtonText}>Nintendo</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList data={data} renderItem={GameCard} keyExtractor={uuidv4} />

      <StatusBar style="auto" />
    </View>
  );
}}
