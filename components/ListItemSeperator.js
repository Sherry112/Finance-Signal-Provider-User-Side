import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../utils/colors";
function ListItemSeperator(props) {
  return <View style={styles.listItemSeperator} />;
}
const styles = StyleSheet.create({
  listItemSeperator: {
    width: "100%",
    height: 8,
    backgroundColor: "#C5E1A5",
  },
});
export default ListItemSeperator;
