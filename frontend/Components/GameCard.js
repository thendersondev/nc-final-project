import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
const GameCard = ({ item }) => {
  return (
    <View style={styles.surroundingView}>
      <View style={styles.cardLeft}>
        <Image
          style={styles.image}
          source={{
            uri: `https://${item.imgUrl}`,
          }}
        ></Image>
      </View>

      <View style={styles.cardRight}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Shop1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Shop2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Shop3</Text>
        </TouchableOpacity>
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
    left: 5,
  },
  image: {
    width: 110,
    height: 110,
    marginLeft:0
  },

  cardLeft: {
    flexDirection: "row",
  },
  cardRight: {
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
    padding:10,
  },
  text: {
    color: "white",
  },
});

export { GameCard };
