import { Alert, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Appbar, Provider } from "react-native-paper";

const UserCommentCard = ({ item }) => {
  const { body, User, createdAt } = item;

  return (
    <Provider>
      <View style={styles.surroundingView}>
        <Appbar.Header style={styles.Appbar}>
          <Appbar.Content
            title={body}
            subtitle={`${User} - ${createdAt.toDate().toUTCString()}`}
          />
        </Appbar.Header>
      </View>
    </Provider>
  );
};

export default UserCommentCard;

const styles = StyleSheet.create({
  Appbar: {
    backgroundColor: "#F0EDF6",
    borderRadius: 20,
  },
  surroundingView: {
    flex: 1,
    alignSelf: "center",

    backgroundColor: "white",
    width: "75%",
    margin: "2%",
    borderColor: "#694fad",
  },
});
