import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function MessagePage({
  navigation,
  route: {
    params: { username },
  },
}) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{username}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Profile", { username });
          }}
        >
          <Text style={styles.text}>View profile</Text>
        </TouchableOpacity>
      </View>
      <Text>message page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Trade")}
      >
        <Text style={styles.text}>Go back to trades</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#694fad",
    borderRadius: 10,
    fontWeight: "700",
    fontSize: 16,
    justifyContent: "center",
    marginHorizontal: 5,
    height: 50,
    padding: 10,
  },
  text: {
    textAlign: "center",
    color: "#F0EDF6",
    fontWeight: "500",
    fontSize: 16,
  },
  header: {
    position: "relative",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 42,
  },
});
