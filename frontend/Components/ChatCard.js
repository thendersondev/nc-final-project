import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { StyleSheet } from "react-native";

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
  button: {
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
  user: {
    width: 235,
    paddingTop: 10,
    paddingLeft: 50,
    color: "#694fad",
    fontWeight: "700",
    fontSize: 26,
    paddingBottom: 10,
  },
});

const ChatCard = ({ item }, navigation) => {
  const { User, userUID } = item;

  return (
    <View style={styles.surroundingView}>
      <View style={styles.cardLeft}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Message", { User, userUID });
          }}
        >
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardRight}>
        <Text style={styles.user}>{User}</Text>
      </View>
    </View>
  );
};

export { ChatCard };
