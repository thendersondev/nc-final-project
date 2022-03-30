import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  surroundingView: {
    flex: 1,
    borderRadius: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    width: "95%",
    margin: "2%",
    borderColor: "#694fad",
  },
  image: {
    justifyContent: "center",
    borderRadius: 20,
    marginHorizontal: 10,
    width: 110,
    height: 110,
  },
  cardLeft: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardRight: {
    padding: 10,
    flexDirection: "column",
    flexShrink: 1,
  },
  cardRightBottom: {
    flexDirection: "row",
  },
  button: {
    marginTop: 5,
    width: 110,
    backgroundColor: "#694fad",
    borderRadius: 10,
    fontWeight: "700",
    fontSize: 16,
    justifyContent: "center",
    marginHorizontal: 10,
    height: 50,
    padding: 10,
  },
  button_delete: {
    backgroundColor: "#AA0000",
    borderRadius: 10,
    fontWeight: "700",
    fontSize: 16,
    justifyContent: "center",
    marginHorizontal: 10,
    height: 50,
    padding: 10,
    marginLeft: 1,
  },
  buttontext: {
    color: "#F0EDF6",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
  gameTitle: {
    width: 235,
    paddingTop: 10,
    color: "#694FAD",
    fontWeight: "700",
    fontSize: 26,
    paddingBottom: 10,
    flexShrink: 1,
  },
  gameDetails: {
    color: "#694FAD",
    fontWeight: "700",
    fontSize: 14,
    paddingBottom: 10,
    flexShrink: 1,
  },
  alert_button: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default styles;
