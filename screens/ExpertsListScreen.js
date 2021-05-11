import React from "react";
import Screen from "../components/Screen";
import {
  Text,
  Image,
  StyleSheet,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";
import colors from "../utils/colors";
function ExpertsListScreen(props) {
  return (
    <Screen>
      <View style={styles.heading}>
        <Text style={styles.headingText}>
          Your Stocks and Options Signal Provider
        </Text>
      </View>
      <Image style={styles.expert} source={require("../assets/orion.jpg")} />

      <Text style={styles.higlight}>You can reach out to me at : </Text>
      <TouchableOpacity
        onPress={() => Linking.openURL("tel://+1 646 972 5554")}
      >
        <Text style={styles.number}> +1 646 972 5554</Text>
      </TouchableOpacity>
    </Screen>
  );
}
const styles = StyleSheet.create({
  expert: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  heading: {
    marginBottom: 8,
  },
  headingText: {
    color: "green",
    fontSize: 25,
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  number: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 22,
  },
  higlight: {
    textShadowColor: colors.cream,
    alignSelf: "center",
    fontSize: 22,
  },
});
export default ExpertsListScreen;
