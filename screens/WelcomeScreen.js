import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import AppButton from "../components/AppButton";
import Colors from "../utils/colors";
import useStatusBar from "../hooks/useStatusBar";
import colors from "../utils/colors";

export default function WelcomeScreen({ navigation }) {
  useStatusBar("light-content");

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/flame.png")} style={styles.logo} />
        <Text style={styles.subtitle}>MBC Trader</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FFFFF0",
  },
  logoContainer: {
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 150,
    padding: 20,
    // borderWidth:9,
    borderRadius: 150,
    overflow: "hidden",
    resizeMode: "contain",
    backgroundColor: colors.cream,
  },
  subtitle: {
    fontSize: 29,
    fontWeight: "bold",
    paddingVertical: 20,
    color: colors.black,
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 60,
    width: "100%",
  },
});
