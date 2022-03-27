import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function UserPage({ props }) {
  const [username, setMessage] = props;

  return (
    <View>
      <Text>{username}</Text>
      <Text>profile page</Text>
      <TouchableOpacity
        onPress={() => {
          setMessage({
            on: true,
            username,
          });
        }}
      >
        <Text>Message</Text>
      </TouchableOpacity>
    </View>
  );
}
