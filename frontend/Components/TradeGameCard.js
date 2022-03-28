import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/TradeGameCardStyles';

const TradeGameCard = ({ item }, navigation) => {
  const { username } = item;
  return (
    <View style={styles.surroundingView}>
      <View style={styles.cardLeft}>
        <Image
          style={styles.image}
          source={require('../assets/placeholder.png')}
        ></Image>
      </View>

      <View style={styles.cardRight}>
        <View style={styles.cardRightTop}>
          <Text style={styles.gameTitle}>
            {item.title} - ({item.platform})
          </Text>
          <Text style={styles.gameDetails}>User: {item.username}</Text>
          <Text style={styles.gameDetails}>Price: {item.price}</Text>
          <Text style={styles.gameDetails}>Condition: {item.condition}</Text>
          <Text style={styles.gameDetails}>Location: {item.location}</Text>
        </View>

        <View style={styles.cardLeft}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Message', { username });
            }}
          >
            <Text style={styles.text}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Profile', { username });
            }}
          >
            <Text style={styles.text}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export { TradeGameCard };
