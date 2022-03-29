import styles from "../styles/TradeGameCardStyles";
import { View, Text, Image, TouchableOpacity } from "react-native";

const TradeGameCard = ({ item: { item }, navigation }) => {
  const { username, uid } = item;
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
        <Text style={styles.gameTitle}>{item.title}</Text>
        <Text style={styles.gameDetails}>{item.platform}</Text>
        <Text style={styles.gameDetails}>Price: {item.price}</Text>
        <Text style={styles.gameDetails}>Location: {item.location}</Text>
        <View style={styles.cardRightBottom}>
          <Text style={styles.gameDetails}>User: {item.username}</Text>
        </View>
      </View>
    </View>
  );
};

export { TradeGameCard };
