import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
  },
  form: {
    padding: 20,
  },
  textInputBox: {
    padding: 7,
    borderRadius: 5,
    borderWidth: 2,
    margin: 5,
    borderColor: "#694FAD",
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
    fontSize: 20,
    color: "#694FAD",
    paddingTop: 20,
  },
  postItemTitle: {
    color: "#694FAD",
    fontSize: 15,
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
    marginTop: 20,
    marginBottom: 20,
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

export default styles;
