import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const TradeGameCard = ({ item }, setProfile, setMessage) => {
  return (
    <View style={styles.surroundingView}>
      <View style={styles.cardLeft}>
        <Image
          style={styles.image}
          source={require("../assets/placeholder.png")}
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
              setMessage({
                on: true,
                username: item.username,
              });
            }}
          >
            <Text style={styles.text}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setProfile({
                on: true,
                username: item.username,
              });
            }}
          >
            <Text style={styles.text}>View Profile</Text>
          </TouchableOpacity>
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
    flexDirection: "row",
    backgroundColor: "white",
    width: "95%",
    margin: "2%",
    borderColor: "#694fad",
  },
  image: {
    borderRadius: 20,
    width: 110,
    height: 110,
  },
  cardLeft: {
    flexDirection: "column",
    alignItems: "flex-start",
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
    justifyContent: "center",
    marginHorizontal: 10,
    height: 50,
    padding: 10,
    marginLeft: 1,
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
  gameDetails: {
    color: "#694FAD",
    fontWeight: "700",
    fontSize: 14,
    paddingBottom: 10,
    flexShrink: 1,
  },
});

export { TradeGameCard };
