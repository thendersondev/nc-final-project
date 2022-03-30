import { Text, View, Image, FlatList } from 'react-native';
import styles from '../styles/HomeStyles';
import { StatusBar } from 'expo-status-bar';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FeaturedGames } from '../Components/FeaturedGames';
import FadeInView from '../Components/FadeInView';
import { Appbar, Provider } from 'react-native-paper';

export default function HomePage() {
  const fakeRandom = [
    {
      title: 'Elden Ring',
      imgUrl:
        'https://www.box.co.uk/image?id=5048810&quality=90&maxwidth=760&maxheight=520',
      price: '44.99',
      url: 'https://www.box.co.uk/3391892017625-Elden-Ring-PS5_4121655.html',
      platform: 'PS5',
    },
    {
      title: 'Pokemon Legends Arceus',
      imgUrl:
        'https://d8mkdcmng3.imgix.net/54bd/897252.jpg?auto=format&bg=0FFF&fit=fill&h=600&q=100&w=600&s=b3b8b9631da07d51cceb139b7f73afc0',
      price: '48.99',
      url: 'https://www.365games.co.uk/nintendo-switch-games/pokemon-legends-arceus-nintendo-switch-game',
      platform: 'Nintendo Switch',
    },
    {
      title: 'WWE 2K22',
      imgUrl: 'https://img.game.co.uk/ml2/8/1/5/3/815354_gen_b.png',
      price: '64.99',
      url: 'https://www.game.co.uk/en/wwe-2k22-2876120',
      platform: 'PS5',
    },
  ];
  const [featured, setFeatured] = useState(fakeRandom);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   /* QUOTA EXCEEDED BUT THIS IS WHAT WE WANT
  //   const randomiser = Math.ceil(Math.random() * 3);
  //   fetchItemsByShop(randomiser).then((items) => {
  //   setFeatured([Object.values(items).slice(0, 3)]);
  //   }); */

  if (loading)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FadeInView style={styles.mainLogo}>
          <Image source={require('../assets/logo.png')}></Image>
        </FadeInView>
      </View>
    );

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.wrapper}>
        <Text style={styles.bold}>Welcome to Gamepare!</Text>
        <Text style={styles.textCenter}>
          Your one stop shop to buy and swap.
        </Text>
        <View style={styles.textIconWrapper}>
          <MaterialCommunityIcons
            name="microsoft-xbox-controller"
            color={'#694FAD'}
            size={30}
          ></MaterialCommunityIcons>
          <Text style={styles.text}>
            Find the best deals on the latest games
          </Text>
        </View>
        <View style={styles.textIconWrapper}>
          <MaterialCommunityIcons
            name="swap-vertical-variant"
            color={'#694FAD'}
            size={30}
          ></MaterialCommunityIcons>

          <Text style={styles.text}>Find games to trade in your area</Text>
        </View>
      </View>
      <Text style={styles.featured}>Featured Games</Text>
      <FlatList
        style={styles.flatlist}
        data={featured}
        renderItem={FeaturedGames}
        keyExtractor={uuidv4}
      />
      <StatusBar style="auto" />
    </View>
  );
}
