import { View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Appbar, Provider } from "react-native-paper";

const styles = StyleSheet.create({
  Appbar: {
    backgroundColor: "#F0EDF6",
  },
  surroundingView: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "white",
    width: "75%",
    marginTop: 50,
    borderColor: "#694fad",
  },
});

const ChatCard = ({ item }, navigation) => {
  const { User, userUID } = item;

  return (
    <Provider>
      <View style={styles.surroundingView}>
        <Appbar.Header style={styles.Appbar}>
          <Appbar.Content title={User} />
          <Appbar.Action
            color="purple"
            icon="chat"
            size={36}
            onPress={() => {
              navigation.navigate("Message", { User, userUID });
            }}
          />
        </Appbar.Header>
      </View>
    </Provider>
  );
};

export { ChatCard };
