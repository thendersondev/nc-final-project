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
  pageTitle: {
    fontWeight: "700",
    fontSize: 20,
    color: "#694FAD",
    paddingTop: 45,
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
});

export default styles;
