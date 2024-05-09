import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const CustomTextInput = ({ label }) => {
  return (
    <TextInput
      label={label}
      mode="outlined"
      selectionColor="black"
      cursorColor="black"
      outlineColor="black"
      textColor="black"
      activeOutlineColor="gray"
      style={{
        fontSize: 18,
        fontWeight: "bold",
        color: "gray",
        height: 60,
        backgroundColor: "#fff",
        marginTop: 10,
      }}
      outlineStyle={{
        borderColor: "gray",
        borderWidth: 1,
      }}
    />
  );
};

export default CustomTextInput;
