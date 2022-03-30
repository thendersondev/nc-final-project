import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "../styles/TradeGameCardStyles";
import { removeTrade } from "../models/model_trades";
import { auth } from "../firebase";

const TradeGameCard = ({ item }, navigation) => {
  const { User, userUID, location, platform, price, title, key } = item;

  const deleteOption =
    userUID === auth.currentUser.uid ? (
      <TouchableOpacity
        style={styles.button_delete}
        onPress={() => {
          alert(
            "Delete this trade?",
            "This action cannot be undone",
            [
              {
                text: "OK",
                onPress: () => {
                  removeTrade(key);
                  navigation.navigate("Trade");
                },
                style: "alert_button",
              },
              {
                text: "Cancel",
                onPress: () => {
                  return;
                },
                style: "alert_button",
              },
            ],
            {
              cancelable: true,
            }
          );
        }}
      >
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
    ) : null;

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
            navigation.navigate("Message", { User, userUID });
          }}
        >
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Profile", { User, userUID });
          }}
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardRight}>
        <View style={styles.cardRightTop}>
          <Text style={styles.gameTitle}>
            {title} - {platform}
          </Text>
          <Text style={styles.gameDetails}>User: {User}</Text>
          <Text style={styles.gameDetails}>Price: {price}</Text>
          <Text style={styles.gameDetails}>Location: {location}</Text>
        </View>

        <View style={styles.cardLeft}>{deleteOption}</View>
      </View>
    </View>
  );
};

export { TradeGameCard };
