import React from "react";
import { StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ThreeColumnDetails from "../components/ThreeColumnDetails";
import TwoColumnDetails from "../components/TwoColumnDetails";
function DetailsScreen({ route }) {
  const data = route.params.item;
  return (
    <Screen>
      <ListItem
        expertName="Mr.Orion"
        date={data.date}
        profitLoss={route.params.profitLoss}
        tradeType={data.tradeType.label}
        status={data.status}
      />
      {data.stockOrOption.label === "Stock" ? (
        <>
          <TwoColumnDetails
            title1="Type"
            val1={
              data.stockOrOption.label + " " + data.longShortOrCallPut.label
            }
            title2="Limit"
            val2={data.limit}
          />
          <TwoColumnDetails
            title1="Expiry"
            val1="None"
            title2="Stop"
            val2={data.stopLoss}
          />
        </>
      ) : (
        <>
          <ThreeColumnDetails
            title1="TITLE 1"
            val1={
              data.stockOrOption.label + " " + data.longShortOrCallPut.label
            }
            title2="Strike"
            title3="Limit"
            val2={data.strike}
            val3={data.limit}
          />
          <TwoColumnDetails
            title1="Expiry"
            val1={data.expiryDate}
            title2="Stop"
            val2="None"
          />
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default DetailsScreen;
