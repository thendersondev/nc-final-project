import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../styles/FeaturedGameStyles';

const FeaturedGames = ({ item }) => {
  return (
    <View style={styles.surroundingView}>
      <View style={styles.cardLeft}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.imgUrl}`,
          }}
        ></Image>
      </View>

      <View style={styles.cardRight}>
        <View style={styles.cardRightTop}>
          <Text style={styles.gameTitle}>{item.title}</Text>
          <Text style={styles.gameTitle}>£{item.price}</Text>
          <Text style={styles.gameTitle}>YOU SAVE £100</Text>
        </View>
      </View>
    </View>
  );
};

export { FeaturedGames };
