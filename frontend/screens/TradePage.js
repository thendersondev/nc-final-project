import { Text, View, FlatList } from 'react-native';
import styles from '../styles/TradeStyles';
import { StatusBar } from 'expo-status-bar';
import TradeGameCard from '../Components/TradeGameCard';
import { v4 as uuidv4 } from 'uuid';

export default function TradePage() {
  const mockArray2 = [
    {
      title: 'NHL 22',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/ffaa/1035780.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=924e24c001e035070f32efc95774dfa6',
      price: '65.49',
      url: 'https://www.365games.co.uk/xbox-series-x-games/nhl-22-xbox-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'NBA 2K22 75th Anniversary Edition',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/4b2b/1035781.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=57b5b4e826b651656fc67df5f7f80c34',
      price: '94.99',
      url: 'https://www.365games.co.uk/xbox-series-x-games/nba-2k22-75th-anniversary-edition-xbox-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'FIFA 22 LATAM',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/10e7/1042241.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=90f86a4b2d64a9ce1043a0eb7ca64ad1',
      price: '62.49',
      url: 'https://www.365games.co.uk/xbox-series-x-games/fifa-22-latam-xbox-one-xbox-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Kao The Kangaroo',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/2a2f/1050307.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=eee28423e642dc19f52428ad9cebc350',
      price: '27.99',
      url: 'https://www.365games.co.uk/xbox-series-x-games/kao-the-kangaroo-xbox-one-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Vampire The Masquerade Swansong',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/7431/1050914.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=034549d158028268f4b25c2301b6b641',
      price: '37.99',
      url: 'https://www.365games.co.uk/xbox-series-x-games/vampire-the-masquerade-swansong-xbox-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'SpellForce 3 Reforced',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/f00e/1051020.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=36a5150afba43de8d6af9ae00832ec0f',
      price: '28.49',
      url: 'https://www.365games.co.uk/xbox-series-x-games/spellforce-3-reforced-xbox-one-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Zorro The Chronicles',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/1c22/1051039.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=8bb71000953263d6ea885cd39eeccd73',
      price: '31.99',
      url: 'https://www.365games.co.uk/xbox-series-x-games/zorro-the-chronicles-xbox-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'MotoGP22 Standard Edition',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/ba13/1051992.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=089f54f99b43464bb25d841966327e0f',
      price: '45.99',
      url: 'https://www.365games.co.uk/xbox-series-x-games/motogp22-standard-edition-xbox-series-x-xboxone-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Evil West',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/8fa3/1052368.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=56bb7e623a21500c523e8a4f980e2c9c',
      price: '42.79',
      url: 'https://www.365games.co.uk/xbox-series-x-games/evil-west-xbox-one-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'A Plague Tale Requiem',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/c527/1052392.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=a37235d941b6e193d41f5350b3af543c',
      price: '42.79',
      url: 'https://www.365games.co.uk/xbox-series-x-games/a-plague-tale-requiem-xbox-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'STALKER 2 Heart of Chernobyl',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/bf1d/913962.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=c43f7dcdbc69089f0cd749b5daf931fd',
      price: '42.99',
      url: 'https://www.365games.co.uk/xbox-series-x-games/s-t-a-l-k-e-r-2-heart-of-chernobyl-xbox-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Maneater',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/c1af/767970.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=27b1a85713b1794025af85793ee3b403',
      price: '12.69',
      url: 'https://www.365games.co.uk/xbox-series-x-games/maneater-xbox-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Dolmen Day One Edition',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/77e9/1034618.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=717f631535fd709fc19ec40c0cbd0ca3',
      price: '31.49',
      url: 'https://www.365games.co.uk/xbox-series-x-games/dolmen-day-one-edition-xbox-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Tennis World Tour 2',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/426c/794662.png?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=615985e786cb6b559eb136ffd018a442',
      price: '29.24',
      url: 'https://www.365games.co.uk/xbox-series-x-games/tennis-world-tour-2-xbox-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Port Royale 4 Extended Edition',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/1d16/912759.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=b52a322007d487d0653c3f5bbdd66d35',
      price: '41.49',
      url: 'https://www.365games.co.uk/xbox-series-x-games/port-royale-4-extended-edition-xbox-one-xbox-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'NHL 22',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/9277/913818.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=2d0c466e85daf27b1e2d71316c1d5dc5',
      price: '39.99',
      url: 'https://www.365games.co.uk/xbox-series-x-games/nhl-22-xbox-series-x-game',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Madden 22',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/73da/907088.jpg?auto=format&bg=0FFF&fit=fill&h=276&q=100&w=276&s=320d9c1f114976293e98c43a8aada9c9',
      price: '46.49',
      url: 'https://www.365games.co.uk/xbox-series-x-games/madden-22-xbox-series-x-game',
      platform: 'Xbox SeriesX',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Trade games here!</Text>

      <FlatList
        data={mockArray2}
        renderItem={TradeGameCard}
        keyExtractor={uuidv4}
      />

      <StatusBar style="auto" />
    </View>
  );
}
