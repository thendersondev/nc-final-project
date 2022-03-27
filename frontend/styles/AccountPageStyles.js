import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#694fad",
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
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  accountInfoHeader: {
    textAlign: "center",
    margin: 15,
    color: "#694fad",
    fontWeight: "bold",
    fontSize: 18,
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
    fontWeight: "normal",
    fontSize: 18,
    textAlign:"center",
    padding:3,
  },
  comments: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    alignContent: "center",
  },
  signOutContainer: { backgroundColor: "white" },
  loggedOut: {
    textAlign: "center",
    color: "#694fad",
    fontSize: 18,
  },
  loggedOut1: {
    flex: 1,
    justifyContent: "center",
  },
  signOutContainer: {
    color: "#694fad",
    backgroundColor: "white",
    padding: 7,
    margin: 1,
    borderRadius: 15,
    paddingHorizontal: 40,
  },
  signOutText: { 
    colour: "#694fad"
   },
});

export default styles;
