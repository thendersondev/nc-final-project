import { Text, View, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { changeUser, fetchUser, fetchUsers } from "../models/model_users";
import styles from "../styles/UserPageStyles";
import { useEffect, useState } from "react";
import { Appbar, Provider } from "react-native-paper";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import UserCommentCard from "./UserComments";

export default function UserPage({
  navigation,
  route: {
    params: { User, userUID },
  },
}) {
  const [comments, setComments] = useState([]);
  const [uri, setUri] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchUser(userUID).then((userData) => {
      setUri(userData[userUID].avatarUrl);
      const newComments = !Object.values(userData[userUID].reviews)
        ? []
        : Object.values(userData[userUID].reviews);
      setComments(newComments);
      console.log(Object.values(userData[userUID].reviews));
    });

    const collRef = collection(db, "users");
    const q = query(collRef, where("username", "==", User));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) => setComments(doc.data().reviews));
    });
    setLoading(false);
    console.log(comments);
    return unsubscribe;
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
          {!loading && (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri }}></Image>
            </View>
          )}
        </View>

        <View style={styles.accountInfo}>
          <View></View>
          <View style={styles.comments}>
            <Text style={styles.accountInfoHeader}>Comments:</Text>
            {!loading && (
              <FlatList
                data={comments}
                renderItem={({ item }) => (
                  <UserCommentCard item={item} />
                  // <Text
                  //   style={styles.accountInfoHeadings}
                  //   key={`comm${item.body}key`}
                  // >
                  //   {item.body}
                  // </Text>
                )}
                keyExtractor={(item) => comments.indexOf(item)}
              />
            )}
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
