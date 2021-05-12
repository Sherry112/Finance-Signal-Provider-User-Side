import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../utils/colors'
function TopBar({ expertOnPress }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.alerts}
        name="pause"
        size={24}
        color="white"
      />
      <Text style={styles.title}>MBC Traders</Text>
      <TouchableWithoutFeedback onPress={expertOnPress}>
        <View style={styles.expertsList}>
          <MaterialCommunityIcons
            name="account-group"
            size={24}
            color="white"
          />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.options}>
        <SimpleLineIcons name="options-vertical" size={24} color="white" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#8BC34A",
    alignItems: "center",
    height: 70,
    width: "100%",
    padding: 15,
  },
  alerts: {
    flex: 1.5,
    alignSelf: "center",
  },
  title: {
    flex: 7,
    alignSelf: "center",
    paddingLeft: 5,
    color: "white",
    fontSize: 30,
  },
  expertsList: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  options: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "flex-end",
  },
});
export default TopBar;
