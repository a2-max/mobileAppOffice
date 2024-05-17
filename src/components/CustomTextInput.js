import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS } from "../constant/Constant";

const CustomTextInput = ({ label, error, handleInput }) => {
  const [isfocus, setIsFocus] = useState(false);
  return (
    <TextInput
      label={label}
      mode="outlined"
      selectionColor="black"
      cursorColor="black"
      textColor="black"
      activeOutlineColor="gray"
      style={styles.inpt}
      outlineStyle={
        [styles.outlineStyle] && {
          borderColor: error == true ? "#f00000" : "#cacaca",
        }
      }
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      labelStyle={{ color: isfocus ? "#4374F4" : "#ffffff" }}
      onChange={handleInput}
    />
  );
};

const styles = StyleSheet.create({
  inpt: {
    fontSize: 18,
    color: "#353535",
    height: 60,
    backgroundColor: "#ffffff",
    marginTop: 24,
  },
  outlineStyle: {
    borderColor: "#cacaca",
    borderWidth: 1,
    borderRadius: 7,
  },
});

export default CustomTextInput;
