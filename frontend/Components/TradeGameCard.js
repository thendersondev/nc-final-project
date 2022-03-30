import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/TradeGameCardStyles';
import { removeTrade } from '../models/model_trades';

const TradeGameCard = ({ item }, navigation) => {
  const { user, userUID, location, platform, price, title, key } = item;

  const deleteOption = (userUID !== key) ? (
    <TouchableOpacity
            style={styles.button_delete}
            onPress={() => {
              Alert.alert(
                "Delete this trade?",
                "This action cannot be undone",
                [
                  {
                  text: "OK" ,
                  onPress: () => {
                    removeTrade(key)
                    navigation.navigate('Trade')
                  },
                  style: "alert_button"
                },{
                  text: "Cancel" , 
                  onPress: () => {return},
                  style: "alert_button"
                }],
                {
                  cancelable: true
                }
                );
            }}
          >
            <Text style={styles.text}>Delete</Text>
          </TouchableOpacity>
  ) : null


  return (
    <View style={styles.surroundingView}>
      <View style={styles.cardLeft}>
        <Image
          style={styles.image}
          source={require("../assets/placeholder.png")}
        ></Image>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Message", { username, uid });
          }}
        >
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Profile", { username, uid });
          }}
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardRight}>
        <View style={styles.cardRightTop}>
          <Text style={styles.gameTitle}>
            {item.title} - ({item.platform})
          </Text>
          <Text style={styles.gameDetails}>User: {item.user}</Text>
          <Text style={styles.gameDetails}>Price: {item.price}</Text>
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
          {deleteOption}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Profile', {userUID});
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
