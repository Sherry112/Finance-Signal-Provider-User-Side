import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../utils/colors";
function ThreeColumnDetails({ title1, title2, title3, val1, val2, val3 }) {
  return (
    <View style={styles.container}>
      <View style={styles.typeName}>
        <Text style={{ color: colors.green }}>{title1}</Text>
        <Text style={{ color: colors.black }}>{val1}</Text>
      </View>
      <View style={styles.readingsFirst}>
        <Text style={{ color: colors.green }}>{title2}</Text>
        <Text style={{ color: colors.black }}>{val2}</Text>
      </View>
      <View style={styles.readingsLast}>
        <Text style={{ color: colors.green }}>{title3}</Text>
        <Text style={{ color: colors.black }}>{val3}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  typeName: {
    flex: 6,
    alignSelf: "flex-start",
  },

  readingsFirst: {
    flex: 2,
    alignSelf: "center",
  },
  readingsLast: {
    flex: 2,
    alignSelf: "center",
    alignItems: "flex-end",
  },
});
export default ThreeColumnDetails;
