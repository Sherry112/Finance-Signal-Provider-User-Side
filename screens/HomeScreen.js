import React from "react";
import Colors from "../utils/colors";
import {
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  Text,
} from "react-native";

import useStatusBar from "../hooks/useStatusBar";
import { logout } from "../components/Firebase/firebase";

export default function HomeScreen() {
  useStatusBar("dark-content");
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      {/* <View
        style={{
          width: "100%",
          height: 30,
          backgroundColor: Colors.mediumGrey,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ marginLeft: 20 }}>Trade Alike</Text>
        <Text style={{ marginRight: 20 }}>Check</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#FF5733",
          shadowColor: "grey",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 10,
        }}
      > */}
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
