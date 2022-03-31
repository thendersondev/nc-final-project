import { Text, View, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { changeUser, fetchUser, fetchUsers } from "../models/model_users";
import styles from "../styles/UserPageStyles";
import { useEffect, useState } from "react";
import { Appbar, Provider } from "react-native-paper";

export default function UserPage({
  navigation,
  route: {
    params: { User, userUID },
  },
}) {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [uri, setUri] = useState(null);

  useEffect(() => {
    fetchUser(userUID).then((userData) => {
      const newComments = !Object.values(userData[userUID].reviews)
        ? []
        : Object.values(userData[userUID].reviews);
      setComments(newComments);
      setUsername(userData[userUID].username);
      setUri(userData[userUID].avatarUrl);
    });
  }, []);

  return (
    <Provider>
      <Appbar.Header style={styles.Appbar}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title={User} />
        <Appbar.Action
          icon="chat"
          onPress={() => {
            navigation.navigate("Message", { User, userUID });
          }}
        />
      </Appbar.Header>
      <View style={styles.pageContainer}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            {uri && <Image style={styles.image} source={uri}></Image>}
          </View>
        </View>

        <View style={styles.accountInfo}>
          <View>
            <Text style={styles.accountInfoHeader}>Comments:</Text>
          </View>
          <View style={styles.comments}>
            <FlatList
              data={comments}
              renderItem={({ item }) => (
                <Text
                  style={styles.accountInfoHeadings}
                  key={`comm${item.body}key`}
                >
                  {item.body}
                </Text>
              )}
              keyExtractor={(item) => comments.indexOf(item)}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Review", { User, userUID });
              }}
            >
              <Text style={styles.text}>Review User</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
    </Provider>
  );
}
