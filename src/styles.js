import { StyleSheet } from "react-native";
import Constants from "./constants";

export default styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: Constants.Colors.BORDER_COLOR,
  },
  itemImage: {
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 15,
    height: Constants.BaseStyle.DEVICE_WIDTH / 100 * 15,
    marginRight: 16,
  },
  contentWrapper: {
    justifyContent: "space-around",
  },
  txtName: {
    fontSize: 16,
  },
  txtEmail: {
    color: "#777",
  }
});