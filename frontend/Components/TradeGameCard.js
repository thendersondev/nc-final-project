import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const TradeGameCard = ({ item }, navigation) => {
  const { username } = item;
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
            navigation.navigate("Message", { username });
          }}
        >
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Profile", { username });
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

const styles = StyleSheet.create({
  surroundingView: {
    flex: 1,
    borderRadius: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    width: "95%",
    margin: "2%",
    borderColor: "#694fad",
  },
  image: {
    justifyContent: "center",
    borderRadius: 20,
    marginHorizontal: 10,
    width: 110,
    height: 110,
  },
  cardLeft: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardRight: {
    padding: 10,
    flexDirection: "column",
    flexShrink: 1,
  },
  cardRightBottom: {
    flexDirection: "row",
  },
  button: {
    marginTop: 5,
    width: 110,
    backgroundColor: "#694fad",
    borderRadius: 10,
    fontWeight: "700",
    fontSize: 16,
    justifyContent: "center",
    marginHorizontal: 10,
    height: 50,
    padding: 10,
  },
  buttonText: {
    color: "#F0EDF6",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
  gameTitle: {
    width: 235,
    paddingTop: 10,
    color: "#694FAD",
    fontWeight: "700",
    fontSize: 26,
    paddingBottom: 10,
    flexShrink: 1,
  },
  gameDetails: {
    color: "#694FAD",
    fontWeight: "700",
    fontSize: 14,
    paddingBottom: 10,
    flexShrink: 1,
  },
});

export { TradeGameCard };
