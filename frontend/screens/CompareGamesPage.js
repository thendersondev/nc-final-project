import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/CompareGamesStyles";
import { StatusBar } from "expo-status-bar";
import { GameCard } from "../Components/GameCard";
import { v4 as uuidv4 } from "uuid";

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
      title: "Doki Doki Literature Club Plus",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/b4fe/908616.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=570776766dc502c89643603b907a5518",
      price: "29.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/doki-doki-literature-club-plus-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Gyakuten Saiban 123 Phoenix Wright",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/afd1/720418.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=acd73fa99cb545fb9a6d873a63e12e57",
      price: "33.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/gyakuten-saiban-123-phoenix-wright-nintendo-switch-game-ntsc-j-version",
      platform: "Nintendo Switch",
    },
    {
      title: "Sonic Mania Plus",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/b074/pc-and-video-games-games-switch-sonic-mania-plus-nintendo-2.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=3473ee3e9964da0b9ec7738b9413d02d",
      price: "26.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/sonic-mania-plus-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Streets of Rage 4",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/a120/727648.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=f1ec7254db6de3febc59dec707f0dd9e",
      price: "32.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/streets-of-rage-4-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Untitled Goose Game",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/061f/753255.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=3d9c64888d79cad624885a1acab9b343",
      price: "27.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/untitled-goose-game-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "The Great Ace Attorney Chronicles",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/fd21/908463.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=e7aa684c2b70dcacad556d24bf4b99f3",
      price: "53.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/the-great-ace-attorney-chronicles-nintendo-switch-game-ntsc-version",
      platform: "Nintendo Switch",
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
      title: "Mega Man ZeroZX Legacy Collection",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/80c3/738112.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=7b7a618946d7413a42e57cfa2bcdcba1",
      price: "24.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/mega-man-zero-zx-legacy-collection-nintendo-switch-game-ntsc-version",
      platform: "Nintendo Switch",
    },
    {
      title: "Collection Of Mana",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/f65e/759828.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=bcdde965baaf89ce9a50bc8eb6b93883",
      price: "25.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/collection-of-mana-nintendo-switch-game-ntsc-version",
      platform: "Nintendo Switch",
    },
    {
      title: "The Legend Of Zelda Breath Of The Wild",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/a398/pc-and-video-games-games-switch-the-legend-of-zelda-breath-of-the-wild-nintendo.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=864b1923748025ad0dcd2bbe427023fa",
      price: "62.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/the-legend-of-zelda-breath-of-the-wild-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Waifu Uncovered",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/1880/769188.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=c1241c14dc3e4fcfce130bdfaf2ffb77",
      price: "21.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/waifu-uncovered-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Prinny Presents NIS Classics Volume 1 Deluxe Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/6dbf/902863.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=1de51ce09b170eda9b8d9d0c2336e04e",
      price: "38.15",
      url: "https://www.365games.co.uk/nintendo-switch-games/prinny-presents-nis-classics-volume-1-deluxe-edition-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Nintendo Switch Sports Game",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/9b70/1045420.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=91799ba1a676be290ae80675223b255a",
      price: "34.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/nintendo-switch-sports-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Dragons Dogma Dark Arisen",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/7ec7/pc-and-video-games-games-switch-dragons-dogma-dark-arisen-nintendo.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=24609231de2681c68953cf34a3a4e06d",
      price: "26.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/dragonand039s-dogma-dark-arisen-nintendo-switch-game-ntsc-version",
      platform: "Nintendo Switch",
    },
    {
      title: "Final Fantasy IX",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/4b22/774407.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=1ab2c9697c2449595ff14d424e16ec8d",
      price: "37.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/final-fantasy-ix-nintendo-switch-game-ntsc-j-version",
      platform: "Nintendo Switch",
    },
    {
      title: "Road 96",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/21d7/907928.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=642e35df295f26d054b2d20a0f9060de",
      price: "29.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/road-96-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Resident Evil Origins Collection",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/82a0/1047320.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=48e97798a45354d4aad1c77d348aa699",
      price: "42.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/resident-evil-origins-collection-nintendo-switch-ntsc-version",
      platform: "Nintendo Switch",
    },
    {
      title: "WWE 2K Games Battlegrounds",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/5955/1041390.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=84252745c59ec830c7711ecd3d2675f2",
      price: "19.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/wwe-2k-games-battlegrounds-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Instant Sports",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/e0cb/645498.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=68dd1da30efc9f61fe951e33a84841a2",
      price: "21.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/instant-sports-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "RollerCoaster Tycoon Adventure",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/1727/pc-and-video-games-games-switch-rollercoaster-tycoon-adventure-nintendo-1.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8127cd08de4c9b4569e1d28748d85a4b",
      price: "24.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/rollercoaster-tycoon-adventure-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Resident Evil Triple Pack",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/9b03/646485.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=d35a4367da4eca47a58d8244825192f3",
      price: "35.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/resident-evil-triple-pack-nintendo-switch-game-ntsc-version",
      platform: "Nintendo Switch",
    },
    {
      title: "13 Sentinels Aegis Rim",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/05f5/1045817.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=595a92696b9fba9003f551044f7a17e3",
      price: "39.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/13-sentinels-aegis-rim-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Big Brain Academy Brain vs Brain",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/a9d8/964675.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=b5849fbd7b75f6f67b84f8dfd70a6e2d",
      price: "17.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/big-brain-academy-brain-vs-brain-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Variable Barricade",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/899e/856380.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=bba29e993a72cfec12d3bc535c7246c7",
      price: "39.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/variable-barricade-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Hades",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/7eeb/906815.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=d5e4e8e5b8017651b3c3ebaa7350f9bb",
      price: "32.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/hades-nintendo-switch-game-ntsc-version",
      platform: "Nintendo Switch",
    },
    {
      title: "MONARK Deluxe Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/c333/903494.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=70c1e9483fdd85e3f28e6eaeef5626a6",
      price: "42.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/monark-deluxe-edition-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Rune Factory 5",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/388f/1023928.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=33d0866090a15cfdd80d3721d1361982",
      price: "43.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/rune-factory-5-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Paw Patrol On A Roll",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/bca4/793503.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=e2b1da15eca95a39ae1dcb9836dfc35d",
      price: "24.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/paw-patrol-on-a-roll-nintendo-switch-game-ntsc-version",
      platform: "Nintendo Switch",
    },
    {
      title: "Splatoon 3",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/ad85/1045427.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=333c11bbe2ba44ed3155cdb922e72c82",
      price: "42.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/splatoon-3-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "CrossCode",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/346f/818273.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=44c1053906e6dce939ac4f5e1e70577d",
      price: "23.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/crosscode-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "New Super Luckys Tale",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/e1ad/671393.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=680198f0bff10009c29181042752031b",
      price: "19.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/new-super-luckyand039s-tale-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Mega Man 11",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/97a6/pc-and-video-games-games-switch-mega-man-11-nintendo.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=2077d543c994ee3f0c02d0aa7cd3c000",
      price: "22.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/mega-man-11-nintendo-switch-game-ntsc-version",
      platform: "Nintendo Switch",
    },
    {
      title: "RollerCoaster Tycoon Adventure",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/e87c/pc-and-video-games-games-switch-rollercoaster-tycoon-adventure-nintendo-3.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=520351813382d85c3df3054e48de326f",
      price: "26.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/rollercoaster-tycoon-adventure-nintendo-switch-game-ntsc-version",
      platform: "Nintendo Switch",
    },
    {
      title: "Ori The Collection",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/7208/912714.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=3736de4b335774d9a49bf2a200601725",
      price: "44.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/ori-the-collection-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Danganronpa Decadence",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/3b1d/912120.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=845726163736d8a1f6e49388dca14e3f",
      price: "45.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/danganronpa-decadence-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Hidden Objects Collection",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/abbe/753009.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=04c270a05eddf4e23db1c8b820fc903f",
      price: "25.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/hidden-objects-collection-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "New Super Mario Bros U Deluxe",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/3240/807621.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=c9e8ed60dee9a373bc76c2ab580e6ca0",
      price: "46.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/new-super-mario-bros-u-deluxe-nintendo-switch",
      platform: "Nintendo Switch",
    },
    {
      title: "Super Mario 3D World Bowsers Fury",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/328e/794738.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=afebdeb91c0d1b05b5bc0bfce3ca9122",
      price: "55.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/super-mario-3d-world-plus-bowserand039s-fury-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Shovel Knight Treasure Trove",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/44b0/675385.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=eba726eb40216c088d88fc3e2b4990d3",
      price: "29.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/shovel-knight-treasure-trove-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Blasphemous Deluxe Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/06ee/847281.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=0f8e03261a0cbe92ff7acbedc4b34d69",
      price: "28.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/blasphemous-deluxe-edition-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Sonic Colours Ultimate",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/6e98/894745.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8f5abd5fc0cef71e1740ff90971caa3d",
      price: "36.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/sonic-colours-ultimate-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Metroid Dread",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/3e6c/898648.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=d45a7e7f8614f313a51b732a03d970d2",
      price: "46.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/metroid-dread-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Instant Sports Paradise",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/2e04/903560.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=630e58ca858a09066619fa10f0733cab",
      price: "21.49",
      url: "https://www.365games.co.uk/nintendo-switch-games/instant-sports-paradise-nintendo-switch-game",
      platform: "Nintendo Switch",
    },
    {
      title: "Okinawa Rush",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/a085/865067.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=b38beab363042537962d649154528ed6",
      price: "28.99",
      url: "https://www.365games.co.uk/nintendo-switch-games/okinawa-rush-nintendo-switch-game",
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
      title: "Yuoni Sunset Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/1cef/982834.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=ac2980ef19062be86583774257fc877f",
      price: "22.99",
      url: "https://www.365games.co.uk/ps5-games/yuoni-sunset-edition-ps5-game",
      platform: "PS5",
    },
    {
      title: "Star Wars Jedi Fallen Order",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/ec50/897472.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8c83b3c8b738bc77bd822a361170c068",
      price: "27.99",
      url: "https://www.365games.co.uk/ps5-games/star-wars-jedi-fallen-order-ps5-game",
      platform: "PS5",
    },
    {
      title: "Battlefield 2042",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/9edc/897300.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=cd224792168bc373b7657461063e5d9a",
      price: "39.19",
      url: "https://www.365games.co.uk/ps5-games/battlefield-2042-ps5-game",
      platform: "PS5",
    },
    {
      title: "Resident Evil Village",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/f06a/805987.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=bec5a98e1f1d11f59310b3041eece381",
      price: "44.49",
      url: "https://www.365games.co.uk/ps5-games/resident-evil-village-ps5-game",
      platform: "PS5",
    },
    {
      title: "MechWarrior 5 Mercenaries",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/7049/961309.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=fcd43e5d8b90255e528ada4ed7e581f3",
      price: "15.99",
      url: "https://www.365games.co.uk/ps5-games/mechwarrior-5-mercenaries-ps5-game",
      platform: "PS5",
    },
    {
      title: "Control Ultimate Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/515b/789093.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=f10d50a6e4ea0024bba7a3e5c402d606",
      price: "29.49",
      url: "https://www.365games.co.uk/ps5-games/control-ultimate-edition-ps5-game",
      platform: "PS5",
    },
    {
      title: "Ghost of Tsushima Directors Cut",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/7c06/907113.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=b05b8d620ff98e759bbbb1c25be1b749",
      price: "68.99",
      url: "https://www.365games.co.uk/ps5-games/ghost-of-tsushima-directorand039s-cut-ps5-game",
      platform: "PS5",
    },
    {
      title: "Jurassic World Evolution 2",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/11a3/914592.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=ef8dbab480cad513f391fc73898e7a35",
      price: "31.39",
      url: "https://www.365games.co.uk/ps5-games/jurassic-world-evolution-2-ps5-game",
      platform: "PS5",
    },
    {
      title: "WRC 10",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/f999/917432.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=c796e6137e74b87d1c2a364325feb6cd",
      price: "32.99",
      url: "https://www.365games.co.uk/ps5-games/wrc-10-ps5-game",
      platform: "PS5",
    },
    {
      title: "Aliens Fireteam Elite",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/ebb7/900820.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=95b60e75947ba61a5a752702187f6cae",
      price: "15.19",
      url: "https://www.365games.co.uk/ps5-games/aliens-fireteam-elite-ps5-game",
      platform: "PS5",
    },
    {
      title: "Lost Judgment",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/c322/903339.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=0d3898147eed85d28260e32f5523a111",
      price: "27.49",
      url: "https://www.365games.co.uk/ps5-games/lost-judgment-ps5-game",
      platform: "PS5",
    },
    {
      title: "Ghostwire Tokyo",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/b1cd/1035383.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=afa3a6883f7ca8ebf88aca605aab40e7",
      price: "48.99",
      url: "https://www.365games.co.uk/ps5-games/ghostwire-tokyo-ps5-game",
      platform: "PS5",
    },
    {
      title: "Call of Duty Vanguard",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/ed14/913663.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=02717841708ee396683a5b72c4ddb398",
      price: "46.34",
      url: "https://www.365games.co.uk/ps5-games/call-of-duty-vanguard-ps5-game",
      platform: "PS5",
    },
    {
      title: "Stranger of Paradise Final Fantasy Origin",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/4ce0/1028247.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=b127643fa829053c2956d2a93cbf06ef",
      price: "49.99",
      url: "https://www.365games.co.uk/ps5-games/stranger-of-paradise-final-fantasy-origin-ps5-game",
      platform: "PS5",
    },
    {
      title: "Tiny Tinas Wonderland Next Level Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/0e26/1036027.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=be9de69655cfce00e1e223a2f54ec430",
      price: "53.99",
      url: "https://www.365games.co.uk/ps5-games/tiny-tinaand039s-wonderland-next-level-edition-ps5-game",
      platform: "PS5",
    },
    {
      title: "Just Dance 2022",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/16dd/899548.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=91a26b0d68b76f39fc1c5770a249c057",
      price: "29.99",
      url: "https://www.365games.co.uk/ps5-games/just-dance-2022-ps5-game",
      platform: "PS5",
    },
    {
      title: "MONARK Deluxe Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/8ba7/903493.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=bbf4ab170ff7ca6cd2009ad3fff4f571",
      price: "38.89",
      url: "https://www.365games.co.uk/ps5-games/monark-deluxe-edition-ps5-game",
      platform: "PS5",
    },
    {
      title: "GRID Legends",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/be46/1016665.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=2da3b2bb24e7d8645704bdabbc286273",
      price: "53.99",
      url: "https://www.365games.co.uk/ps5-games/grid-legends-ps5-game",
      platform: "PS5",
    },
    {
      title: "Back 4 Blood",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/c079/1048887.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=1b9c37bff5a29b88fea70fecef59367d",
      price: "26.29",
      url: "https://www.365games.co.uk/ps5-games/back-4-blood-ps5-game",
      platform: "PS5",
    },
    {
      title: "Returnal",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/b5fc/787821.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=ab9f40e4c86799ebf67acabbd9a27a6c",
      price: "68.99",
      url: "https://www.365games.co.uk/ps5-games/returnal-ps5-game",
      platform: "PS5",
    },
    {
      title: "Chorus Day One Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/6761/961121.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=68b6dea59cc071f4895366b2b6aaaeda",
      price: "23.49",
      url: "https://www.365games.co.uk/ps5-games/chorus-day-one-edition-ps5-game",
      platform: "PS5",
    },
    {
      title: "Werewolf The Apocalypse Earthblood",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/a5de/789443.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=1308af46f327f411b3b7700c7cf4afeb",
      price: "30.99",
      url: "https://www.365games.co.uk/ps5-games/werewolf-the-apocalypse-earthblood-ps5-game",
      platform: "PS5",
    },
    {
      title: "Watch Dogs Legion",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/8a94/768254.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=7d0675b4a664501efd4b1fd17890d91a",
      price: "26.49",
      url: "https://www.365games.co.uk/ps5-games/watch-dogs-legion-ps5-game",
      platform: "PS5",
    },
    {
      title: "Assassins Creed Valhalla",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/cb4a/768166.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=1191214ffe59cc72adc7d107acbc7da1",
      price: "25.29",
      url: "https://www.365games.co.uk/ps5-games/assassinand039s-creed-valhalla-ps5-game",
      platform: "PS5",
    },
    {
      title: "Mortal Shell Enhanced Edition Deluxe Set",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/7cd0/806281.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=bc3e02982a89ed2f7c5bcd9887ec0773",
      price: "31.99",
      url: "https://www.365games.co.uk/ps5-games/mortal-shell-enhanced-edition-deluxe-set-ps5-game",
      platform: "PS5",
    },
    {
      title: "The Pathless",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/1a50/780874.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=186b86a73599a8ca7affbbf458bcb0ae",
      price: "25.99",
      url: "https://www.365games.co.uk/ps5-games/the-pathless-ps5-game",
      platform: "PS5",
    },
    {
      title: "Yonder The Cloud Catcher Chronicles Enhanced Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/f562/801873.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=4e2341ede1835bd25f8cd7ebdf21f2b2",
      price: "28.99",
      url: "https://www.365games.co.uk/ps5-games/yonder-the-cloud-catcher-chronicles-enhanced-edition-ps5-game",
      platform: "PS5",
    },
    {
      title: "Fortnite The Last Laugh",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/c831/773453.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=c6a5fd80f602bf622d379df705ef4cac",
      price: "22.49",
      url: "https://www.365games.co.uk/ps5-games/fortnite-the-last-laugh-ps5-game-code-in-a-box",
      platform: "PS5",
    },
    {
      title: "Call of Duty Black Ops Cold War",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/7f43/779173.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=4e0394d4905d6bf0538c1b6125c184b3",
      price: "66.99",
      url: "https://www.365games.co.uk/ps5-games/call-of-duty-black-ops-cold-war-ps5-game",
      platform: "PS5",
    },
    {
      title: "Wreckfest",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/8ae4/846599.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8f218e8815d1e0eacfb1e05a4714fe40",
      price: "31.49",
      url: "https://www.365games.co.uk/ps5-games/wreckfest-ps5-game",
      platform: "PS5",
    },
    {
      title: "F1 2021",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/2093/894792.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=87d27183ec2ba990ba115065db9a4d9d",
      price: "29.53",
      url: "https://www.365games.co.uk/ps5-games/f1-2021-ps5-game",
      platform: "PS5",
    },
    {
      title: "On the Road Truck Simulator",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/d64b/962141.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=d237e3822e31972a4eb334f847358eb7",
      price: "19.54",
      url: "https://www.365games.co.uk/ps5-games/on-the-road-truck-simulator-ps5-game",
      platform: "PS5",
    },
    {
      title: "Oddworld Soulstorm",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/098c/856175.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=1b8dba166b457e2e8fdf766f8ac491e6",
      price: "40.99",
      url: "https://www.365games.co.uk/ps5-games/oddworld-soulstorm-ps5-game",
      platform: "PS5",
    },
    {
      title: "MLB The Show 21",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/6c01/849547.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=10d341a1cc66259431754b4120e443a0",
      price: "25.99",
      url: "https://www.365games.co.uk/ps5-games/mlb-the-show-21-ps5-game-ntsc-version",
      platform: "PS5",
    },
    {
      title: "Apsulov End of Gods",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/91ef/907075.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=aa6b420fcae3158256de27dbccd2fcba",
      price: "15.49",
      url: "https://www.365games.co.uk/ps5-games/apsulov-end-of-gods-ps5-game",
      platform: "PS5",
    },
    {
      title: "Life is Strange True Colors",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/735a/826375.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=77af26c9a0042cab09f9291cbf4b1d27",
      price: "47.99",
      url: "https://www.365games.co.uk/ps5-games/life-is-strange-true-colors-ps5-game",
      platform: "PS5",
    },
    {
      title: "Forspoken",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/f7de/1051083.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=5ab7120d11e31945adf4c47f8f6465d3",
      price: "53.99",
      url: "https://www.365games.co.uk/ps5-games/forspoken-ps5-game",
      platform: "PS5",
    },
    {
      title: "Assetto Corsa Competizione Day One Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/5de9/916508.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=5e7572c438140e1cd792d025c31e48d0",
      price: "26.99",
      url: "https://www.365games.co.uk/ps5-games/assetto-corsa-competizione-day-one-edition-ps5-game",
      platform: "PS5",
    },
    {
      title: "Winter Sports Games",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/fd3c/857244.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=07bb1530f2e6474c92bc2903f41e8e7d",
      price: "17.99",
      url: "https://www.365games.co.uk/ps5-games/winter-sports-games-ps5-game",
      platform: "PS5",
    },
    {
      title:
        "Demon Slayer Kimetsu no Yaiba The Hinokami Chronicles Launch Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/9c72/903065.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=3c1b4e765c34b3d02b86ccf1d269758f",
      price: "28.89",
      url: "https://www.365games.co.uk/ps5-games/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-launch-edition-ps5-game",
      platform: "PS5",
    },
    {
      title: "Kena Bridge of Spirits Deluxe Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/5596/1046270.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=7c954e73e3c1ea19441059ee3d4d7464",
      price: "31.69",
      url: "https://www.365games.co.uk/ps5-games/kena-bridge-of-spirits-deluxe-edition-ps5-game",
      platform: "PS5",
    },
    {
      title: "Cant Drive This",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/f489/803914.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=0e28b7e69f217c5a0aef4d787838660d",
      price: "10.99",
      url: "https://www.365games.co.uk/ps5-games/canand039t-drive-this-ps5-game",
      platform: "PS5",
    },
    {
      title: "Lets Sing 2022",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/8e00/959011.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8efc92d3c409bfe061de5fe51a27365f",
      price: "24.49",
      url: "https://www.365games.co.uk/ps5-games/letand039s-sing-2022-ps5-game-plus-mic",
      platform: "PS5",
    },
    {
      title: "Yakuza Like a Dragon",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/7a6e/767988.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8a4653c3407ae0b255d91f0e95d2795b",
      price: "47.99",
      url: "https://www.365games.co.uk/ps5-games/yakuza-like-a-dragon-ps5-game",
      platform: "PS5",
    },
    {
      title: "Tom Clancys Rainbow Six Extraction Deluxe Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/ae7c/967465.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=a3fd6929f64ce78fedccff1e4e56ed4a",
      price: "36.44",
      url: "https://www.365games.co.uk/ps5-games/tom-clancyand039s-rainbow-six-extraction-deluxe-edition-ps5-game",
      platform: "PS5",
    },
    {
      title: "Halo Infinite",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/893e/918683.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=c1bb4eaf545959673dd6d36d0b51e4af",
      price: "51.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/halo-infinite-xbox-one-xbox-series-x",
      platform: "Xbox SeriesX",
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
      title: "Call of Duty Vanguard",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/9419/913664.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=1b317d228205d557488271247dc86356",
      price: "50.79",
      url: "https://www.365games.co.uk/xbox-series-x-games/call-of-duty-vanguard-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "FIFA 22",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/e035/958387.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=9e9cae0fd16e8767c683e179e4d32c28",
      price: "39.68",
      url: "https://www.365games.co.uk/xbox-series-x-games/fifa-22-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Call of Duty Black Ops Cold War",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/7fb0/1048987.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=7d29ac09b6749914aff5e2dcc2f214a8",
      price: "29.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/call-of-duty-black-ops-cold-war-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Stranger of Paradise Final Fantasy Origin",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/bff7/1028249.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=a883feda757b4be119a67a98df5ce641",
      price: "49.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/stranger-of-paradise-final-fantasy-origin-xbox-one-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "The King Of Fighters XV",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/2081/961158.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8afaad289c6d5378703e0b2084107702",
      price: "41.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/the-king-of-fighters-xv-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Tiny Tinas Wonderland NextLevel Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/6819/1036025.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=22cb422e606d5ba0b3cb35b27ef62134",
      price: "53.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/tiny-tinaand039s-wonderland-next-level-edition-xbox-one-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Werewolf The Apocalypse Earthblood",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/81df/789461.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=22540f3cbabd14dd4c5fc334abaa3f22",
      price: "31.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/werewolf-the-apocalypse-earthblood-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Crusader Kings III Day One Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/0327/973410.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=3ad05a07e0c6332c26bf3c1e152939b2",
      price: "37.79",
      url: "https://www.365games.co.uk/xbox-series-x-games/crusader-kings-iii-day-one-edition-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Battlefield 2042",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/c956/897318.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=03dbdc0a1b773c294968dbb8e8c836c8",
      price: "51.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/battlefield-2042-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "MechWarrior 5 Mercenaries",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/5daa/961267.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=019d27f373ef89004cb88f734acecc26",
      price: "15.19",
      url: "https://www.365games.co.uk/xbox-series-x-games/mechwarrior-5-mercenaries-xbox-one-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "The Last Stand Aftermath",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/e712/907908.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8f50069d11722ccd538b510cde6d68ad",
      price: "16.07",
      url: "https://www.365games.co.uk/xbox-series-x-games/the-last-stand-aftermath-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Assetto Corsa Competizione Day One Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/0e2c/916514.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=7655a85073dff94018ba30d05074ac3f",
      price: "26.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/assetto-corsa-competizione-day-one-edition-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Tom Clancys Rainbow Six Siege Deluxe Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/e836/804589.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=2ae85a6dd4f1ca3d6d851e858a72499e",
      price: "16.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/tom-clancyandrsquos-rainbow-six-siege-deluxe-edition-xbox-oneseries-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Just Dance 2022",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/4bbd/899555.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=c4bb343b48f6ad64cedec7c198d4ecfc",
      price: "33.79",
      url: "https://www.365games.co.uk/xbox-series-x-games/just-dance-2022-xbox-one-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "A Plague Tale Innocence",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/f6c4/907948.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=1b21db2853acde9d1ccd16501cae5592",
      price: "24.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/a-plague-tale-innocence-xbox-one-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Observer System Redux Day One Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/d1af/864651.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=e7500e70f3fb9fee22b3d069102314f2",
      price: "25.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/observer-system-redux-day-one-edition-xbox-one-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "The Ascent Cyber Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/4bf1/1050987.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=18f321e72457cf99d64bb813491be76c",
      price: "44.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/the-ascent-cyber-edition-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "FIFA 21 NXT LVL Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/1d9a/807609.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=fbb4b1f5b3afecfa14a1ca9d565db7ab",
      price: "14.79",
      url: "https://www.365games.co.uk/xbox-series-x-games/fifa-21-nxt-lvl-edition-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Madden NFL 21 NXT LVL Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/1bfe/785484.PNG?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=524ccca4f4aa6c30a6d10921b8103466",
      price: "28.09",
      url: "https://www.365games.co.uk/xbox-series-x-games/madden-nfl-21-nxt-lvl-edition-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Control Ultimate Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/d23c/789099.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=1cc2b6e50fa6f5621944f312938d4134",
      price: "29.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/control-ultimate-edition-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Hunting Simulator 2",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/b051/794688.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=2c30a7464588ac9133f4be8b43fe22b3",
      price: "36.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/hunting-simulator-2-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Samurai Shodown Enhanced",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/97d4/796883.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=b890fc52b4f161393effda90913ece1f",
      price: "24.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/samurai-shodown-enhanced-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "MotoGP 21",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/8e2e/803900.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=a7e8264a479c6015402ae7d95ba4a14c",
      price: "24.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/motogp-21-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Overcooked All You Can Eat",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/5ad4/779650.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=3fa08889ff60431834e8261376c116c3",
      price: "19.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/overcooked-all-you-can-eat-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "The Falconeer Day One Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/7166/769150.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=c968cdfebd86e3b9d26205c9664e6d5c",
      price: "21.39",
      url: "https://www.365games.co.uk/xbox-series-x-games/the-falconeer-day-one-edition-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Tony Hawks Pro Skater 1 2",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/8da5/897436.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=593dae3f54548b3ad56aee93ac2c986d",
      price: "61.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/tony-hawkand039s-pro-skater-1-plus-2-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Greak Memories of Azur",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/4b58/897987.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=0b88b16b84f9bb3eaf26557307d1b46c",
      price: "23.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/greak-memories-of-azur-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Microsoft Flight Simulator",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/97c9/908648.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=2964b35725decc162d504b5e34ea5821",
      price: "58.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/microsoft-flight-simulator-xbox-series-x",
      platform: "Xbox SeriesX",
    },
    {
      title: "Hogwarts Legacy",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/6e45/907711.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=17f859d0740f334ce51a2c924d53af27",
      price: "60.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/hogwarts-legacy-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Gotham Knights",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/b21a/907738.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=0d578e82a85d8c85566cf2d36b0fd045",
      price: "60.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/gotham-knights-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Dungeons Dragons Dark Alliance",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/f658/856911.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=4e30aad48f356266649d731dc3d5e71a",
      price: "24.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/dungeons-and-dragons-dark-alliance-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Metro Exodus Complete Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/af88/858094.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=4fc9c5be3a24eaa4e164443a0d720f28",
      price: "33.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/metro-exodus-complete-edition-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Disciples Liberation Deluxe Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/985a/959372.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=341432d87ec51bee7210918f44e4c033",
      price: "45.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/disciples-liberation-deluxe-edition-xbox-one-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Iron Harvest Complete Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/f5e5/960626.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8ec237a94b1870912531bbcf22c04ad8",
      price: "43.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/iron-harvest-complete-edition-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Warhammer Chaosbane Slayer Edition Game",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/bbe8/961873.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=cb66fa61035ab85b503f706154f92ec1",
      price: "36.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/warhammer-chaosbane-slayer-edition-game-xbox-series-x-ntsc-version",
      platform: "Xbox SeriesX",
    },
    {
      title: "Monster Truck Championship Game",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/ea52/961875.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=63440a98021bf603161f22c431908e24",
      price: "25.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/monster-truck-championship-game-xbox-series-x",
      platform: "Xbox SeriesX",
    },
    {
      title: "Battlefield 2042",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/9fb2/1035777.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=4e608c5fd40bf60a86f1f9be1cac0632",
      price: "64.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/battlefield-2042-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "FIFA 22",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/87d9/1035778.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=2d038817d7295269f272bd7f40b326da",
      price: "66.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/fifa-22-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "NBA 2K21",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/0495/1035779.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=532b3fcc0b9250f4e79ddaf26e36cda3",
      price: "56.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/nba-2k21-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "NHL 22",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/ffaa/1035780.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=924e24c001e035070f32efc95774dfa6",
      price: "65.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/nhl-22-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "NBA 2K22 75th Anniversary Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/4b2b/1035781.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=57b5b4e826b651656fc67df5f7f80c34",
      price: "94.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/nba-2k22-75th-anniversary-edition-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "FIFA 22 LATAM",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/10e7/1042241.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=90f86a4b2d64a9ce1043a0eb7ca64ad1",
      price: "62.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/fifa-22-latam-xbox-one-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Kao The Kangaroo",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/2a2f/1050307.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=eee28423e642dc19f52428ad9cebc350",
      price: "27.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/kao-the-kangaroo-xbox-one-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Vampire The Masquerade Swansong",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/7431/1050914.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=034549d158028268f4b25c2301b6b641",
      price: "37.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/vampire-the-masquerade-swansong-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "SpellForce 3 Reforced",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/f00e/1051020.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=36a5150afba43de8d6af9ae00832ec0f",
      price: "28.49",
      url: "https://www.365games.co.uk/xbox-series-x-games/spellforce-3-reforced-xbox-one-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "Zorro The Chronicles",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/1c22/1051039.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8bb71000953263d6ea885cd39eeccd73",
      price: "31.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/zorro-the-chronicles-xbox-series-x-game",
      platform: "Xbox SeriesX",
    },
    {
      title: "MotoGP22 Standard Edition",
      imgUrl:
        "https://d8mkdcmng3.imgix.net/ba13/1051992.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=089f54f99b43464bb25d841966327e0f",
      price: "45.99",
      url: "https://www.365games.co.uk/xbox-series-x-games/motogp22-standard-edition-xbox-series-x-xboxone-game",
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

      <FlatList data={mockArray} renderItem={GameCard} keyExtractor={uuidv4} />

      <StatusBar style="auto" />
    </View>
  );
}
