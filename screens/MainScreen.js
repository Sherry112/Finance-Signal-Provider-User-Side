import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItem from "../components/ListItem";
import TopBar from "../components/TopBar";
import ActivityIndicator from "../components/ActvityIndicator";
import Button from "../components/Button";
import firebaseConfig from "../components/Firebase/firebase";
import "firebase/database";
import firebase from "firebase/app";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function MainScreen({ navigation }) {
  const [info, setInfo] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  let dbData = [];
  useEffect(() => {
    try {
      setError(false);
      setLoading(true);
      let details = firebase.database().ref("/").orderByChild("status");
      details.on("child_added", (data) => {
        setAlert(true);
        dbData.push(data.val());
        setLoading(false);
        console.log("Data Added");
      });

      details.on("child_changed", (data) => {
        setAlert(true);
        dbData = [];
        dbData.push(data.val());
        setLoading(false);
        console.log("Data Updated");
      });

      setInfo(dbData);
      setAlert(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }, [alert]);

  return (
    <Screen>
      <TopBar expertOnPress={() => navigation.navigate("ExpertList")} />
      {error && (
        <>
          <Text>
            Couldn't retrieve the Data. Check your Internet Connection
          </Text>
          <Button
            title="Retry"
            color="f5f7b2"
            onPress={() => setError(false)}
          ></Button>
        </>
      )}

      <ActivityIndicator visible={loading} />
      <FlatList
        data={info}
        keyExtractor={(information) => {
          new Date().getUTCMilliseconds().toString();
        }}
        ItemSeparatorComponent={ListItemSeperator}
        renderItem={({ item }) => (
          <ListItem
            date={item.date}
            expertName="Mr.Orion"
            onPress={() =>
              navigation.navigate("Details", {
                item,
                profitLoss: item.result
                  ? Number(item.result).toFixed(1)
                  : "---",
              })
            }
            profitLoss={item.result ? Number(item.result).toFixed(1) : "---"}
            status={item.status}
            stockName={item.stockName}
            tradeType={item.tradeType.label}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    width: "100%",
  },
});
export default MainScreen;
