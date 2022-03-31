import { Alert, StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { Appbar, Provider } from "react-native-paper";

const UserCommentCard = ({ item }) => {
  const { body, User, createdAt } = item;
  `${User} - ${createdAt.toDate().toUTCString()}`;
  return (
    <View style={styles.surroundingView}>
      <Text style={styles.Appbar}>{body}</Text>
      <Text style={styles.user}>{User}</Text>
      <Text style={styles.date}>{createdAt.toDate().toUTCString()}</Text>
    </View>
  );
};

export default UserCommentCard;

const styles = StyleSheet.create({
  Appbar: {
    backgroundColor: "#F0EDF6",
    fontSize: 24,
  },
  user: {
    fontStyle: "italic",
  },
  date: {
    fontStyle: "italic",
  },
  surroundingView: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#F0EDF6",
    width: "90%",
    margin: "2%",
    borderColor: "#694fad",
  },
});
