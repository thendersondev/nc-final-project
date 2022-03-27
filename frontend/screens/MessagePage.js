import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function MessagePage({ props }) {
  const [username, setProfile, setMessage] = props;

  return (
    <View>
      <Text>{username}</Text>
      <Text>message page</Text>
      <TouchableOpacity
        onPress={() => {
          setMessage({
            on: false,
          });
          setProfile({
            on: true,
            username,
          });
        }}
      >
        <Text>View profile</Text>
      </TouchableOpacity>
    </View>
  );
}
