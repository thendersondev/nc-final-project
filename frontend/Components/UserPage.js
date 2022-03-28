import { Text, View, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function UserPage({
  navigation,
  route: {
    params: { username },
  },
}) {
  const mockComments = [
    { comment: "A really good seller ", id: 1 },
    { comment: "Horrible guy!", id: 2 },
  ];

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
                <Text style={styles.accountInfoHeadings}>Listings:</Text>
                <Text style={styles.accountInfoHeadings}>Ratings:</Text>
                <Text style={styles.accountInfoHeadings}>Email:</Text>
              </View>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Message", { username });
        }}
      >
        <Text style={styles.text}>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Trade");
        }}
      >
        <Text style={styles.text}>Go back to trades</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#694fad",
    width: "100%",
  },
  image: {
    height: 150,
    width: 150,
    backgroundColor: "white",
    borderRadius: 100,
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  username: {
    margin: 15,
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  header: {
    flex: 1,

    width: "100%",
  },
  accountInfo: {
    width: "100%",
    flex: 1,
    backgroundColor: "#F1EEED",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  accountInfoHeader: {
    textAlign: "center",
    margin: 15,
    color: "#694fad",
    fontWeight: "bold",
    fontSize: 22,
    padding: 10,
  },
  accountInfoGrid: {
    flexDirection: "column",
  },
  accountInfoGridTop: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 5,
  },

  accountInfoHeadings: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 18,
  },
  comments: {
    flex: 1,
    backgroundColor: "#F1EEED",
    width: "100%",
    alignContent: "center",
  },
  signOutContainer: { backgroundColor: "white" },
  signOutText: {},
  button: {
    backgroundColor: "#694fad",
    borderRadius: 10,
    fontWeight: "700",
    fontSize: 16,
    justifyContent: "center",
    marginHorizontal: 5,
    height: 50,
    padding: 10,
  },
  text: {
    textAlign: "center",
    color: "#F0EDF6",
    fontWeight: "500",
    fontSize: 16,
  },
});
