import { Text, View, Button, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../styles/AccountPageStyles";
import { auth, db, signOut } from "../firebase";

import { doc, setDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { set } from "react-native-reanimated";

export default function Account(props) {
  const [username, setUsername] = useState(null);
  const mockComments = [
    { comment: "A really good seller ", id: 1 },
    { comment: "Horrible guy!", id: 2 },
  ];
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("You have been signed out");
        console.log(auth.currentUser.uid);
        setUsername(null);
      })
      .catch((err) => {
        alert(`Oops, something went wrong: ${err}`);
      });
  };

  useEffect(() => {
    setLoggedIn(auth.currentUser);
    console.log(loggedIn);
    if (loggedIn) {
      const docRef = doc(db, "users", auth.currentUser.uid);
      getDoc(docRef).then((data) => {
        setUsername(data.data().username);
      });
    }
  }, [loggedIn]);

  if (loggedIn === null) {
    return (
      <View>
        <Text>Please register/Log-in to see this page</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://www.amongusavatarcreator.com/assets/img/main/icon.png",
              }}
            ></Image>
            <Text style={styles.username}>Username:{username} </Text>
            <TouchableOpacity
              onPress={handleSignOut}
              style={styles.signOutContainer}
            >
              <Text style={styles.signOutText}>SignOut</Text>
            </TouchableOpacity>
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
            data={mockComments}
            renderItem={({ item }) => (
              <Text style={styles.accountInfoHeadings}>{item.comment}</Text>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }
}
