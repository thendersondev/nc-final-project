import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../styles/MessagePageStyles';

export default function MessagePage({
  navigation,
  route: {
    params: { username },
  },
}) {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(null);

  const handleInput = (text) => {
    setCurrentMessage(text);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setMessages((prev) => {
      return [...prev, currentMessage];
    });
    setCurrentMessage('');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{username}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Profile', { username });
          }}
        >
          <Text style={styles.text}>View profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.messages}>
        {messages.map((message) => {
          return <Text style={styles.sentMessage}>{message}</Text>;
        })}
      </View>
      <View style={styles.sendWrapper}>
        <TextInput
          style={styles.chatbox}
          value={currentMessage}
          onChangeText={(text) => {
            handleInput(text);
          }}
        ></TextInput>
        <TouchableOpacity style={styles.send}>
          <Text
            style={styles.text}
            onPress={(e) => {
              handleSend(e);
            }}
          >
            send
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Trade')}
      >
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
