import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("auth"));
    }, 3000);
  }, []);
  return (
    <View style={styles.main}>
      <Text>SplashScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SplashScreen;
