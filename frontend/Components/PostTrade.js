import { Text, View, FlatList, Button, TextInput } from "react-native";
import styles from "../styles/TradeStyles";
import { StatusBar } from "expo-status-bar";
import { TradeGameCard } from "../Components/TradeGameCard";
import { v4 as uuidv4 } from "uuid";
import React from "react";

export default function PostTrade() {
  const [titleText, onChangeTitleText] = React.useState("");
  const [platformText, onChangePlatformText] = React.useState("");
  const [locationText, onChangeLocationText] = React.useState("");
  const [priceText, onChangePriceText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
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
    console.log(data);
    // add this data into mock array
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Trade games here!</Text>
      <View style={styles.form}>
        <Text style={styles.postItemTitle}>Post your item here:</Text>
        <TextInput
          style={styles.textInputBox}
          placeholderTextColor={"#3e2465"}
          placeholder="What ya wannae sell, Pal?"
          value={data}
          onChangeText={(text) =>
            setData((prevData) => {
              return { ...prevData, title: text };
            })
          }
        />

        <TextInput
          style={styles.textInputBox}
          placeholderTextColor={"#3e2465"}
          placeholder="What platform es et?"
          value={data}
          onChangeText={(text) =>
            setData((prevData) => {
              return { ...prevData, platform: text };
            })
          }
        />

        <TextInput
          style={styles.textInputBox}
          placeholderTextColor={"#3e2465"}
          placeholder="Where are ya?"
          value={data}
          onChangeText={(text) =>
            setData((prevData) => {
              return { ...prevData, location: text };
            })
          }
        />
        <TextInput
          style={styles.textInputBox}
          placeholderTextColor={"#3e2465"}
          placeholder="What ya gonnae charge?"
          value={data}
          keyboardType="numeric"
          onChangeText={(num) =>
            setData((prevData) => {
              return { ...prevData, price: num };
            })
          }
        />

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}
