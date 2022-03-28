import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '../../firebase.js';
import { useNavigation } from '@react-navigation/core';
import { db } from '../../firebase.js';
import { doc, setDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { LoginContext } from '../../Contexts/LoginContext.js';
import styles from '../../styles/RegisterPageStyles';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        alert(`Account Created! You have been signed in as: ${username} `);
      })
      .then(() => {
        signInWithEmailAndPassword(auth, email, password);
        setLoggedIn(auth.currentUser.uid);
      })
      .then(() => {
        setDoc(doc(db, 'users', auth.currentUser.uid), {
          username: username,
          avatarUrl: 'default',
        });
      })
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((err) => {
        alert(`Oops something went wrong! ${err.message}`);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.select({
        ios: () => -300,
        android: () => -300,
      })}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => {
            setUsername(text);
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={styles.input}
          secureTextEntry
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
