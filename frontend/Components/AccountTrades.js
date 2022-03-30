import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar, Provider } from "react-native-paper";

const AccountTrades = ({ item }) => {
  const { title, userUID, price, platform } = item;
  console.log(title);
  const [hide, setHide] = useState(false);

  return (
    <Provider>
      <View style={styles.surroundingView}>
        {!hide && (
          <Appbar.Header style={styles.Appbar}>
            <Appbar.Content title={title} subtitle={platform} />
            <Appbar.Action
              color="red"
              icon="delete-outline"
              size={36}
              onPress={() => {
                Alert.alert(
                  "Delete this trade?",
                  "This action cannot be undone",
                  [
                    {
                      text: "OK",
                      onPress: () => {
                        removeTrade(key);
                        setHide(true);
                      },
                      style: "alert_button",
                    },
                    {
                      text: "Cancel",
                      onPress: () => {
                        return;
                      },
                      style: "alert_button",
                    },
                  ],
                  {
                    cancelable: true,
                  }
                );
              }}
            />
          </Appbar.Header>
        )}
      </View>
    </Provider>
  );
};

export default AccountTrades;

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
