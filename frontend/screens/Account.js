import styles from "../styles/AccountPageStyles";
import { Text, View, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { auth, signOut } from "../firebase";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

export default function Account() {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(true);

  const mockComments = [
    { comment: "A really good seller ", id: 1 },
    { comment: "Horrible guy!", id: 2 },
  ];

  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("You have been signed out");
        navigation.navigate("Login");
      })
      .catch((err) => {
        alert(`Oops, something went wrong: ${err}`);
      });
  };

  useEffect(() => {
    setLoading(true);
    setUsername(auth.currentUser.displayName);
    setAvatar(auth.currentUser.photoURL);
    setLoading(false);
  }, []);

  if (loading) return <View></View>;
  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: avatar
                ? avatar
                : "https://pbs.twimg.com/profile_images/786636123317628928/6T0mBdck_400x400.jpg",
            }}
          ></Image>
          <Text style={styles.username}>{username} </Text>
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
            <View>
              <Text style={styles.accountInfoHeadings}>
                Email: {auth.currentUser.email}
              </Text>
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
