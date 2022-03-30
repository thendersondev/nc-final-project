import { Text, View, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { changeUser, fetchUser, fetchUsers } from "../models/model_users";
import styles from "../styles/UserPageStyles";
import { useEffect, useState } from "react";

export default function UserPage({
  navigation,
  route: {
    params: { User, userUID },
  },
}) {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const none = "<none>";

  useEffect(() => {
    fetchUser(userUID).then((userData) => {
      const newComments = !Object.values(userData[userUID].reviews)
        ? []
        : Object.values(userData[userUID].reviews);
      setComments(newComments);
      setUsername(userData[userUID].username);
    });
  }, []);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/shrek.webp")}
          ></Image>
          <Text style={styles.username}>{username}</Text>
        </View>
      </View>

      <View style={styles.accountInfo}>
        <View>
          <Text style={styles.accountInfoHeader}>Account Details</Text>
          <View style={styles.accountInfoGrid}>
            <View style={styles.accountInfoGridTop}>
              <View>
                <Text style={styles.accountInfoHeadings}>Listings:</Text>
                <Text style={styles.accountInfoHeadings}>Ratings:</Text>
                <Text style={styles.accountInfoHeadings}>Email:</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.comments}>
        <Text style={styles.accountInfoHeader}>Comments:</Text>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Message", { User, userUID });
          }}
        >
          <Text style={styles.text}>Message</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
