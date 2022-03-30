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

const TradeGameCard = (
  { item, index },
  refresh,
  setRefresh,
  navigation,
  urls
) => {
  const { User, userUID, location, platform, price, title, key } = item;

  // urls are returned asynchronously, no guaranteed order
  const [uri] = urls.filter((url) => {
    return url.includes(userUID) && url.includes(title.replaceAll(" ", "-"));
  });

  const deleteOption =
    userUID === auth.currentUser.uid ? (
      <TouchableOpacity
        style={styles.button_delete}
        onPress={() => {
          Alert.alert(
            "Delete this trade?",
            "This action cannot be undone",
            [
              {
                text: "OK",
                onPress: () => {
                  removeTrade(key);
                  setRefresh(refresh + 1);
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
        <Text style={styles.buttontext}>Delete</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Message", { User, userUID });
        }}
      >
        <Text style={styles.buttontext}>Message</Text>
      </TouchableOpacity>
    );

  return (
    <View style={styles.surroundingView}>
      <View style={styles.cardLeft}>
        <Image style={styles.image} source={{ uri }}></Image>
        {deleteOption}
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
      </View>
    </View>
  );
};

export { TradeGameCard };
