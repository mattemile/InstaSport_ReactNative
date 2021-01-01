import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HederButton = (props) => {
  return (
    <Ionicons
      style={{ marginLeft: 10 }}
      name="md-menu"
      size={35}
      onPress={props.onPressLef}
    />
  );
};

export default HederButton;
