import { Text, View, Button, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../styles/AccountPageStyles";
import { auth } from "../firebase";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Account(props) {
  const user = auth.currentUser.uid;
  const username = "";
  const [username1, setUsername1] = useState("")

  const mockComments = [
    { comment: "A really good seller ", id: 1 },
    { comment: "Horrible guy!", id: 2 },
  ];

  useEffect(() => {
    const docRef = doc(db, "users", user);
    getDoc(docRef).then((data) => {
      setUsername1(data.data().username)
    });
  }, []);

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
          <Text style={styles.username}>
            Username:{username1 }{" "}
          </Text>
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
