import React from "react";
import LottieView from "lottie-react-native";
function ActvityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      true
      source={require("../assets/animation/loading.json")}
    />
  );
}
export default ActvityIndicator;
