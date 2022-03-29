import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
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
import { useContext } from 'react';
import { LoginContext } from '../../Contexts/LoginContext.js';
import styles from '../../styles/LoginPageStyles';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const navigation = useNavigation();

  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setLoggedIn(auth.currentUser.uid);
        alert('Logged in');
        navigation.navigate('Account');
      })
      .catch((err) => {
        alert(err.message);
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
        <TouchableOpacity style={styles.button} onPress={handleLogIn}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.forgottenPassword}>Forgotten password?</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
