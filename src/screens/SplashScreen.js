import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import Logo from "../Images/logo.png";
import { COLORS } from "../constant/Constant";

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("auth"));
    }, 3000);
  }, []);
  return (
    <View style={styles.main}>
      <Image source={Logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.SPLASHBG,
  },
});

export default SplashScreen;
