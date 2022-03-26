import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  image: {
    height: 150,
    width: 150,
    backgroundColor: "white",
    borderRadius: 100,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",    
  },
  info: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 35,
    width: 150,
    maxHeight:70,
    padding:5,
   
  },
  infoHeader: {
    fontWeight: "300",
    color: "#694FAD",
    fontSize: 20,
  },
  infoText: {
    fontWeight: "normal",
    color: "grey",
    fontSize: 15,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  username: {
    margin: 15,
    fontWeight: "bold",
    color: "grey",
    fontSize: 18,
  },
});
