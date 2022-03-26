import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GameCard = ({ item }, query, search) => {
  if (!query.includes(item.platform)) return;
  if (!item.title.includes(search) && search) return;

  const onPress = (url) =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url);
    });

  return (
    <SafeAreaView style={styles.surroundingView}>
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
          <Text style={styles.gameTitle}>
            {item.title} - ({item.platform})
          </Text>
        </View>

        <View style={styles.cardRightBottom}>
          {item.price.game !== undefined ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => onPress(item.url.game)}
            >
              <Text style={styles.text}>Game</Text>
              <Text style={styles.text}>£{item.price.game}</Text>
            </TouchableOpacity>
          ) : (
            ""
          )}
          {item.price.game365 !== undefined ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => onPress(item.url.game365)}
            >
              <Text style={styles.text}>Game365</Text>
              <Text style={styles.text}>£{item.price.game365}</Text>
            </TouchableOpacity>
          ) : (
            ""
          )}
          {item.price.box !== undefined ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => onPress(item.url.box)}
            >
              <Text style={styles.text}>Box</Text>
              <Text style={styles.text}>£{item.price.box}</Text>
            </TouchableOpacity>
          ) : (
            ""
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  surroundingView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    margin: "2%",
    borderColor: "#694fad",
  },
  image: {
    width: 110,
    height: 110,
    left: 5,
  },

  cardLeft: {
    flexDirection: "row",
  },
  cardRight: {
    flexDirection: "column",
    flexShrink: 1,
  },
  cardRightTop: {
    flexShrink: 1,
  },
  cardRightBottom: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#694fad",
    borderRadius: 10,
    fontWeight: "700",
    fontSize: 16,
    justifyContent: "left",
    marginHorizontal: 5,
    height: 50,
    padding: 10,
  },
  text: {
    color: "#F0EDF6",
    fontWeight: "500",
    fontSize: 16,
  },
  gameTitle: {
    color: "#694FAD",
    fontWeight: "700",
    fontSize: 16,
    paddingBottom: 10,
    flexShrink: 1,
  },
});

export { GameCard };
