import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '../../firebase.js';
import { useNavigation } from '@react-navigation/core';
import { db } from '../../firebase.js';
import { doc, setDoc } from 'firebase/firestore';
import styles from '../../styles/RegisterPageStyles';
import { updateProfile } from 'firebase/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        alert(`Account Created! You have been signed in as: ${username} `);
        const user = userCredentials.user;
        console.log(user);
        updateProfile(user, {
          displayName: username,
          photoURL: avatar
            ? avatar
            : 'https://pbs.twimg.com/profile_images/786636123317628928/6T0mBdck_400x400.jpg',
        });
      })
      .then(() => {
        signInWithEmailAndPassword(auth, email, password);
      })
      .then(() => {

        setDoc(doc(db, "users", auth.currentUser.uid), {
          chats: [],
          reviews: [],
          username: username,
          avatarUrl: avatar
            ? avatar
            : "https://pbs.twimg.com/profile_images/786636123317628928/6T0mBdck_400x400.jpg",
        });
      })
      .then(() => {
        navigation.navigate("Nav");

      })
      .catch((err) => {
        alert(`Oops something went wrong! ${err.message}`);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      // keyboardVerticalOffset={Platform.select({
      //   ios: () => -300,
      //   android: () => -300,
      // })}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={"#694fad"}
          placeholder="Username"
          value={username}
          onChangeText={(text) => {
            setUsername(text);
          }}
          style={styles.input}
        />
        <TextInput
          placeholderTextColor={"#694fad"}
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={styles.input}
        />

        <TextInput
          placeholderTextColor={"#694fad"}
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Avatar url"
          value={avatar}
          onChangeText={(text) => {
            setAvatar(text);
          }}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
