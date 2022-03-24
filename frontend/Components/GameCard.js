import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
const GameCard = ({ item }) => {
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
        </View>

        <View style={styles.cardRightBottom}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Game</Text>
            <Text style={styles.text}>{item.price}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Game365</Text>
            <Text style={styles.text}>{item.price}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Box</Text>
            <Text style={styles.text}>{item.price}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  surroundingView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
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
    justifyContent: "center",
    marginHorizontal: 10,
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
