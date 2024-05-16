import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Logo from "../Images/logo.png";

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
          style={{ fontWeight: "bold" }}
        />
      </Pressable>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
      {/* <Text>Logo</Text> */}
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    zIndex: 1,
    height: 80,
    backgroundColor: "#FAFAFA",
  },
  logo: {
    width: 50,
    height: 50,
    objectFit: "cover",
  },
});

export default CustomHeader;
