import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import DetailsNavigator from "./DetailsNavigator";
const Stack = createStackNavigator();

export default function AppStack() {
  return <DetailsNavigator />;
}
