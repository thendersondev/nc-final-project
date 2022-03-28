import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GameCard = ({ item }) => {
  if (item.title === "Gran Turismo 7") {
    item.price.game = undefined;
  }
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
          {!!item.price.game && (
            <TouchableOpacity
              style={
                item.bestPrice === item.price.game
                  ? [styles.button, styles.best]
                  : styles.button
              }
              onPress={() => onPress(item.url.game)}
            >
              <Text style={styles.text}>Game</Text>
              <Text style={styles.text}>£{item.price.game}</Text>
            </TouchableOpacity>
          )}
          {!!item.price.game365 && (
            <TouchableOpacity
              style={
                item.bestPrice === item.price.game365
                  ? [styles.button, styles.best]
                  : styles.button
              }
              onPress={() => onPress(item.url.game365)}
            >
              <Text style={styles.text}>Game365</Text>
              <Text style={styles.text}>£{item.price.game365}</Text>
            </TouchableOpacity>
          )}
          {!!item.price.box && (
            <TouchableOpacity
              style={
                item.bestPrice === item.price.box
                  ? [styles.button, styles.best]
                  : styles.button
              }
              onPress={() => onPress(item.url.box)}
            >
              <Text style={styles.text}>Box</Text>
              <Text style={styles.text}>£{item.price.box}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  surroundingView: {
    flex: 1,
    borderRadius: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "95%",
    margin: "2%",
    borderColor: "#694fad",
  },
  image: {
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    width: 100,
    height: 100,
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
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#7b5dc7",
    borderRadius: 10,
    fontWeight: "700",
    fontSize: 16,
    justifyContent: "center",
    marginHorizontal: 5,
    height: 50,
    padding: 4,
  },
  flatlist: {
    width: "95%",
  },
  best: {
    backgroundColor: "#694fad",
    borderWidth: 2,
    borderColor: "#9acd32",
    height: 55,
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
