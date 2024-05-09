import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        zIndex: 1,
        height: 50,
      }}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
          style={{ fontWeight: "bold" }}
        />
      </Pressable>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
      <Text>Logo</Text>
    </View>
  );
};

export default CustomHeader;
