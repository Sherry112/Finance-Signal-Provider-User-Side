import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../utils/colors";

function TwoColumnDetails({ title1, val1, title2, val2 }) {
  return (
    <View style={styles.container}>
      <View style={styles.start}>
        <Text style={{ color: colors.green }}>{title1}</Text>
        <Text style={{ color: colors.black }}>{val1}</Text>
      </View>
      <View style={styles.end}>
        <Text style={{ color: colors.green }}>{title2}</Text>
        <Text style={{ color: colors.black }}>{val2}</Text>
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
    padding: 15,
    justifyContent: "space-between",
  },
  start: {
    flex: 1,
    justifyContent: "center",
  },
  end: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
export default TwoColumnDetails;
