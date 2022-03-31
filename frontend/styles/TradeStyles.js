import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    padding: 20,
  },
  textInputBox: {
    backgroundColor: "#F0EDF6",
    padding: 7,
    borderRadius: 5,
    borderWidth: 2,
    margin: 5,
    borderColor: "#694FAD",
    color: "#694FAD",
  },
  inputAlert: {
    padding: 7,
    borderRadius: 5,
    borderWidth: 2,
    margin: 5,
    borderColor: "red",
  },
  pageTitle: {
    fontWeight: "700",
    fontSize: 35,
    color: "#694FAD",
    paddingTop: 10,
    paddingBottom: 20,
  },
  postItemTitle: {
    fontWeight: "700",
    color: "#694FAD",
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 10,
  },
  inputTitle: {
    fontWeight: "200",
    fontSize: 15,
    paddingLeft: 4,
    color: "#694FAD",
    borderRadius: 5,
    borderWidth: 2,
  },
  textAlert: {
    color: "red",
    textAlign: "right",
  },
  postItem: {
    textAlign: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "#694fad",
    borderRadius: 10,
    fontWeight: "700",
    fontSize: 16,
    justifyContent: "center",
    marginHorizontal: 20,
    height: 40,
    padding: 10,
    width: 200,
    marginBottom: 5,
    alignSelf: "center",
  },
  space: {
    width: 20,
    height: 10,
  },
  text: {
    textAlign: "center",
    color: "#F0EDF6",
    fontWeight: "500",
    fontSize: 16,
  },
  Appbar: {
    backgroundColor: "#694fad",
  },
});

export default styles;
