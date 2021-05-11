import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "../screens/MainScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ExpertsListScreen from "../screens/ExpertsListScreen";

const Stack = createStackNavigator();
const DetailsNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Main"
      component={MainScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={({ route }) => ({ title: route.params.item.stockName })}
    />
    <Stack.Screen name="ExpertList" component={ExpertsListScreen} />
  </Stack.Navigator>
);

export default DetailsNavigator;
