import { Text, View, Button, TextInput } from "react-native";
import styles from "../styles/ReviewStyles";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../test/testdataindex";
import { auth } from "../firebase";
import {
  doc,
  addDoc,
  getDoc,
  collection,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { changeUser, fetchUser, fetchUsers } from "../models/model_users";
import { v4 as uuidv4 } from "uuid";

export default function PostTradeMessagePage({
  navigation,
  route: {
    params: { username, id },
  },
}) {
  const [bodyText, setBodyText] = React.useState(null);
  const [alert, setAlert] = React.useState({
    body: false,
  });
  const [charAlert, setCharAlert] = React.useState({
    body: false,
  });
  const [postMsg, setPostMsg] = React.useState(false);
  const [data, setData] = React.useState([
    {
      body: "",
    },
  ]);

  const handleSubmit = async () => {
    if (!data.body) {
      setAlert({
        body: !data.body,
      });
    } else if (data.body.length < 10) {
      setCharAlert({
        body: data.body.length < 10,
      });
    } else {
      // POST TRADE TO FIREBASE HERE

      const user = auth.currentUser;

      const userRef = doc(db, "users", "beeMrOx4YsNnenlAJU7Noa3r4Ff1");

      updateDoc(userRef, {
        reviews: arrayUnion({
          body: data.body,
          userUID: user.uid,
          User: user.displayName,
          reviewId: uuidv4(),
          createdAt: new Date(),
        }),
      });

      setCharAlert({
        body: false,
      });
      setAlert({
        body: false,
      });
      setPostMsg(true);
      setBodyText(null);
      setTimeout(function goBackToUser() {
        navigation.navigate("Profile", { username });
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form} pointerEvents={postMsg ? "none" : "auto"}>
        <Text style={styles.postItemBody}>Leave a review for {username}</Text>
        <TextInput
          style={
            alert.body || charAlert.body
              ? styles.inputAlert
              : styles.textInputBox
          }
          placeholderTextColor={"#694FAD"}
          placeholder="Enter review here..."
          value={bodyText}
          onChangeText={(text) =>
            setData((prevData) => {
              return { ...prevData, body: text };
            })
          }
        />
        {alert.body ? (
          <Text style={styles.textAlert}>review is required</Text>
        ) : (
          charAlert.body && (
            <Text style={styles.textAlert}>min 10 characters</Text>
          )
        )}

        {postMsg ? (
          <Text style={styles.postItem}>REVIEW POSTED</Text>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>Submit Review</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Profile", { username })}
        >
          <Text style={styles.text}>Back to Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
