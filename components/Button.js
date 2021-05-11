import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../utils/colors";
function Button({ title, onPress, color }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "300",
  },
});
export default Button;
