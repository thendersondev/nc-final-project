import { Text, View, Button, TextInput, Pressable } from "react-native";
import styles from "../styles/TradeStyles";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db, auth } from ".././firebase";
import { doc, addDoc, getDoc, collection } from "firebase/firestore";
import TradeCamera from "./TradeCamera";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function PostTrade({ navigation }) {
  const [titleText, setTitleText] = React.useState(null);
  const [platformText, setPlatformText] = React.useState(null);
  const [locationText, setLocationText] = React.useState(null);
  const [priceText, setPriceText] = React.useState(null);
  const [available, isAvailable] = React.useState(false);
  // if camera is available, render the TradeCamera component, if not then hide component
  const [alert, setAlert] = React.useState({
    title: false,
    platform: false,
    location: false,
    price: false,
  });
  const [charAlert, setCharAlert] = React.useState({
    title: false,
    platform: false,
    location: false,
    price: false,
  });
  const [postMsg, setPostMsg] = React.useState(false);
  const [data, setData] = React.useState([
    {
      title: "",
      platform: "",
      location: "",
      price: "",
    },
  ]);

  const handleSubmit = async () => {
    if (!data.title || !data.platform || !data.location || !data.price) {
      setAlert({
        title: !data.title,
        platform: !data.platform,
        location: !data.location,
        price: !data.price,
      });
    } else if (
      data.title.length < 5 ||
      data.platform.length < 3 ||
      data.location.length < 4 ||
      data.price.length < 4
    ) {
      setCharAlert({
        title: data.title.length < 5,
        platform: data.platform.length < 3,
        location: data.location.length < 4,
        price: data.price.length < 4,
      });
    } else {
      // POST TRADE TO FIREBASE HERE
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = await getDoc(docRef);

      const docRef = addDoc(collection(db, "trades"), {
        title: data.title,
        platform: data.platform,
        location: data.location,
        price: data.price,
        userUID: auth.currentUser.uid,
        User: userSnap.data().username,
      });

      setCharAlert({
        title: false,
        platform: false,
        location: false,
        price: false,
      });
      setAlert({
        title: false,
        platform: false,
        location: false,
        price: false,
      });
      setPostMsg(true);
      setTitleText(null);
      setPlatformText(null);
      setLocationText(null);
      setPriceText(null);
    }
  };

  const takePicture = async () => {
    if (TradeCamera) {
      const options = { quality: 1, base64: true };
      const data = await TradeCamera.takePictureAsync(options);
      console.log(data);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form} pointerEvents={postMsg ? "none" : "auto"}>
        <Text style={styles.postItemTitle}>What would you like to trade?</Text>
        <TextInput
          style={
            alert.title || charAlert.title
              ? styles.inputAlert
              : styles.textInputBox
          }
          placeholderTextColor={"#694fad"}
          placeholder="Game title..."
          value={titleText}
          onChangeText={(text) =>
            setData((prevData) => {
              return { ...prevData, title: text };
            })
          }
        />
        {alert.title ? (
          <Text style={styles.textAlert}>Title is required</Text>
        ) : (
          charAlert.title && (
            <Text style={styles.textAlert}>Min 5 characters</Text>
          )
        )}
        <TextInput
          style={
            alert.platform || charAlert.platform
              ? styles.inputAlert
              : styles.textInputBox
          }
          placeholderTextColor={"#694fad"}
          placeholder="Platform..."
          value={platformText}
          onChangeText={(text) =>
            setData((prevData) => {
              return { ...prevData, platform: text };
            })
          }
        />
        {alert.platform ? (
          <Text style={styles.textAlert}>Platform is required</Text>
        ) : (
          charAlert.platform && (
            <Text style={styles.textAlert}>Min 3 characters</Text>
          )
        )}
        <TextInput
          style={
            alert.location || charAlert.location
              ? styles.inputAlert
              : styles.textInputBox
          }
          placeholderTextColor={"#694fad"}
          placeholder="Location..."
          value={locationText}
          onChangeText={(text) =>
            setData((prevData) => {
              return { ...prevData, location: text };
            })
          }
        />
        {alert.location ? (
          <Text style={styles.textAlert}>Location is required</Text>
        ) : (
          charAlert.location && (
            <Text style={styles.textAlert}>Min 4 characters</Text>
          )
        )}
        <TextInput
          style={
            alert.price || charAlert.price
              ? styles.inputAlert
              : styles.textInputBox
          }
          placeholderTextColor={"#694fad"}
          placeholder="Price..."
          value={priceText}
          selectTextOnFocus={!postMsg}
          keyboardType="numeric"
          onChangeText={(num) =>
            setData((prevData) => {
              return { ...prevData, price: num };
            })
          }
        />
        {alert.price ? (
          <Text style={styles.textAlert}>Trade value is required</Text>
        ) : (
          charAlert.price && (
            <Text style={styles.textAlert}>Min 4 characters</Text>
          )
        )}
        {/* <TouchableOpacity onPress={() => takePicture()}>
          <MaterialCommunityIcons.Button
            name="camera"
            color={'#f0edf6'}
            size={25}
            backgroundColor={'#694fad'}
          >
            Add Image
          </MaterialCommunityIcons.Button>
        </TouchableOpacity> */}
        {isAvailable ? <TradeCamera /> : null}
        <View style={styles.space} />

        {postMsg ? (
          <Text style={styles.postItem}>TRADE POSTED</Text>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>Submit Trade</Text>
          </TouchableOpacity>
        )}
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Trade")}
        >
          <Text style={styles.text}>Back to trades</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
