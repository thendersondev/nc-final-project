import { Text, View, Button, TextInput, Alert } from "react-native";
import styles from "../styles/TradeStyles";
import React from "react";

export default function PostTrade() {
  const [titleText, onChangeTitleText] = React.useState(null);
  const [platformText, onChangePlatformText] = React.useState(null);
  const [locationText, onChangeLocationText] = React.useState(null);
  const [priceText, onChangePriceText] = React.useState(null);
  // const [number, onChangeNumber] = React.useState(null);
  const [data, setData] = React.useState([
    {
      title: "",
      platform: "",
      location: "",
      price: "",
    },
  ]);

  const mockTradeData = [
    {
      title: "Pokemon Shining Pearl",
      platform: "Nintendo Switch",
      location: "Glasgow",
      price: "£10",
    },
    {
      title: "Nintendo Super Smash Bros Ultimate",
      platform: "Nintendo Switch",
      location: "Leeds",
      price: "£15",
    },
  ];

  const handleSubmit = () => {
    if (!data.title || !data.platform || !data.location || !data.price) {
      Alert("please fill out all fields");
    }
    // add this data into mock array
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Trade games here!</Text>
      <View style={styles.form}>
        <Text style={styles.postItemTitle}>What do you want to trade?</Text>
        <TextInput
          style={styles.textInputBox}
          placeholderTextColor={"#3e2465"}
          placeholder="What ya wannae sell, Pal?"
          value={titleText}
          onChangeText={(text) =>
            setData((prevData) => {
              return { ...prevData, title: text };
            })
          }
        />
        <Text style={styles.textAlert}>title is required</Text>
        <TextInput
          style={styles.textInputBox}
          placeholderTextColor={"#3e2465"}
          placeholder="What platform es et?"
          value={platformText}
          onChangeText={(text) =>
            setData((prevData) => {
              return { ...prevData, platform: text };
            })
          }
        />
        <Text style={styles.textAlert}>platform is required</Text>
        <TextInput
          style={styles.textInputBox}
          placeholderTextColor={"#3e2465"}
          placeholder="Where are ya?"
          value={locationText}
          onChangeText={(text) =>
            setData((prevData) => {
              return { ...prevData, location: text };
            })
          }
        />
        <Text style={styles.textAlert}>location is required</Text>
        <TextInput
          style={styles.textInputBox}
          placeholderTextColor={"#3e2465"}
          placeholder="What ya gonnae charge?"
          value={priceText}
          keyboardType="numeric"
          onChangeText={(num) =>
            setData((prevData) => {
              return { ...prevData, price: num };
            })
          }
        />
        <Text style={styles.textAlert}>trade value is required</Text>

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}
