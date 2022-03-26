import { Text, View, Button, TextInput } from "react-native";
import styles from "../styles/TradeStyles";
import React from "react";

export default function PostTrade() {
  const [titleText, setTitleText] = React.useState(null);
  const [platformText, setPlatformText] = React.useState(null);
  const [locationText, setLocationText] = React.useState(null);
  const [priceText, setPriceText] = React.useState(null);
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

  const handleSubmit = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Trade games here!</Text>
      <View style={styles.form} pointerEvents={postMsg ? "none" : "auto"}>
        <Text style={styles.postItemTitle}>What do you want to trade?</Text>
        <TextInput
          style={
            alert.title || charAlert.title
              ? styles.inputAlert
              : styles.textInputBox
          }
          placeholderTextColor={"#3e2465"}
          placeholder="What ya wannae sell, Pal?"
          value={titleText}
          onChangeText={(text) =>
            setData((prevData) => {
              return { ...prevData, title: text };
            })
          }
        />
        {alert.title ? (
          <Text style={styles.textAlert}>title is required</Text>
        ) : (
          charAlert.title && (
            <Text style={styles.textAlert}>min 5 characters</Text>
          )
        )}
        <TextInput
          style={
            alert.platform || charAlert.platform
              ? styles.inputAlert
              : styles.textInputBox
          }
          placeholderTextColor={"#3e2465"}
          placeholder="What platform es et?"
          value={platformText}
          onChangeText={(text) =>
            setData((prevData) => {
              return { ...prevData, platform: text };
            })
          }
        />
        {alert.platform ? (
          <Text style={styles.textAlert}>platform is required</Text>
        ) : (
          charAlert.platform && (
            <Text style={styles.textAlert}>min 3 characters</Text>
          )
        )}
        <TextInput
          style={
            alert.location || charAlert.location
              ? styles.inputAlert
              : styles.textInputBox
          }
          placeholderTextColor={"#3e2465"}
          placeholder="Where are ya?"
          value={locationText}
          onChangeText={(text) =>
            setData((prevData) => {
              return { ...prevData, location: text };
            })
          }
        />
        {alert.location ? (
          <Text style={styles.textAlert}>location is required</Text>
        ) : (
          charAlert.location && (
            <Text style={styles.textAlert}>min 4 characters</Text>
          )
        )}
        <TextInput
          style={
            alert.price || charAlert.price
              ? styles.inputAlert
              : styles.textInputBox
          }
          placeholderTextColor={"#3e2465"}
          placeholder="What ya gonnae charge?"
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
          <Text style={styles.textAlert}>trade value is required</Text>
        ) : (
          charAlert.price && (
            <Text style={styles.textAlert}>min 4 characters</Text>
          )
        )}

        {postMsg ? (
          <Text style={styles.postItem}>TRADE POSTED</Text>
        ) : (
          <Button title="Submit" onPress={handleSubmit} />
        )}
      </View>
    </View>
  );
}
