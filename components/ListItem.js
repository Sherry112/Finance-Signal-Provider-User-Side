import React from "react";
import { TouchableHighlight, StyleSheet, View, Text } from "react-native";
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
      style={[
        styles.container,
        {
          // backgroundColor: status
          //   ? "#FFF59D"
          //   : profitLoss < 0
          //   ? "#F44336"
          //   : "#7CB342",
        },
      ]}
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

            {profitLoss == "---" ? (
              <Text style={[styles.profitLossStyle, {backgroundColor: "green"}]}>---</Text>
            ) : (
              <Text
                style={
                  [styles.profitLossStyle,
                   { backgroundColor: profitLoss < 0 ? "red" : "green" },
                   ] }
              >
                {profitLoss} %
              </Text>
            )}
          
        </View>
      </>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
    fontWeight: "bold",
    marginLeft: 15,
    color: colors.black,
  },
  expertStyle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#757575",
    marginLeft: 10,
  },
  expertNameStyle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8BC34A",
  },
  dateStyle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#757575",
    marginRight: 15,
  },
  profitLossStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginRight: 15,
    color: "white",
    padding:4,
    marginRight: 20,
    paddingHorizontal:10
  },
});
export default ListItem;
