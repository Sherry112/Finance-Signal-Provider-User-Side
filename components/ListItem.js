import React from "react";
import { TouchableHighlight, StyleSheet, View, Text } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import colors from "../utils/colors";
function ListItem({
  stockName,
  expertName,
  date,
  profitLoss,
  tradeType,
  onPress,
  status,
}) {
  return (
    <TouchableHighlight
      style={[styles.container, { backgroundColor: status ? "#90EE90" : "#ffdcdc" }]}
      underlayColor={colors.yellow}
      onPress={onPress}
    >
      <>
        <View style={styles.upperRow}>
          {stockName ? (
            <Text style={styles.stockStyle}>{stockName}</Text>
          ) : (
            <Text style={styles.stockStyle} />
          )}
          <Text style={styles.dateStyle}>{date}</Text>
        </View>
        <View style={styles.lowerRow}>
          <Text style={styles.expertStyle}>
            {tradeType} by{" "}
            <Text style={styles.expertNameStyle}>{expertName}</Text>
          </Text>
          <Text
            style={[
              styles.profitLossStyle,
              { color: profitLoss < 0 ? "#FF0000" : "#008000" },
            ]}
          >
            {profitLoss} %
          </Text>
        </View>
      </>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.cream,
    width: "100%",
  },
  upperRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 35,
  },
  lowerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    height: 35,
  },
  stockStyle: {
    fontSize: 22,
    fontWeight: "500",
    marginLeft: 15,
    color: colors.black,
  },
  expertStyle: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.grey,
    marginLeft: 10,
  },
  expertNameStyle: {
    fontSize: 14,
    fontWeight: "200",
    color: "black",
  },
  dateStyle: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.grey,
    marginRight: 15,
  },
  profitLossStyle: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 15,
    marginRight: 15,
  },
});
export default ListItem;
