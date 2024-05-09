import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ bg, textColor, Clickable, title }) => {
  return (
    <TouchableOpacity
      onPress={Clickable}
      style={{
        backgroundColor: bg,
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
    >
      <Text style={{ color: textColor, fontSize: 15, fontWeight: "900" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
