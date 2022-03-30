import { Text, View, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { changeUser, fetchUser, fetchUsers } from "../models/model_users";
import styles from "../styles/UserPageStyles";
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> 1b3240b822a1f37d6ba2606554b75cf59e9c68bf

export default function UserPage({
  navigation,
  route: {
    params: { userUID },
  },
}) {
<<<<<<< HEAD
  const [comments , setComments] = useState([])
  const [username, setUsername] = useState("")
  const none = "<none>"

  useEffect(() => {
    fetchUser(userUID)
    .then((userData)=>{
      const newComments = (!Object.values(userData[userUID].reviews)) ? [] : Object.values(userData[userUID].reviews);
      setComments(newComments);
      setUsername(userData[userUID].user);
    })
=======
  const [comments, setComments] = useState([]);

  const id = "2gHWLG7WkAZgK8iQjvEUjCmGvYG3";
  useEffect(() => {
    fetchUser(id)
      .then((userData) => {
        const newComments = !Object.values(userData[id].reviews)
          ? []
          : Object.values(userData[id].reviews);
        setComments(newComments);
      })
      .catch((err) => console.log(err));
>>>>>>> 1b3240b822a1f37d6ba2606554b75cf59e9c68bf
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
                <Text style={styles.accountInfoHeadings}>Listings: {none}</Text>
                <Text style={styles.accountInfoHeadings}>Ratings: {none}</Text>
                <Text style={styles.accountInfoHeadings}>Email: {none}</Text>
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
            <Text style={styles.accountInfoHeadings} key={`comm${item.body}key`}>{item.body}</Text>
          )}
          keyExtractor={(item) => comments.indexOf(item)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Review", { username, id });
          }}
        >
          <Text style={styles.text}>Review User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Message", { username });
          }}
        >
          <Text style={styles.text}>Message</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
