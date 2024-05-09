import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../constant/Constant";
import { useNavigation } from "@react-navigation/native";

const FaceScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Sign In Instantly With</Text>
      <Text style={styles.text}>Face ID</Text>
      <Text style={styles.like}>
        Would you like to enable Face ID to sign in
      </Text>
      <Text style={styles.future}>to the IDAA app in the future?</Text>
      <Image
        source={require("../../Images/face.png")}
        tintColor={COLORS.BLUE}
      />
      <CustomButton
        bg={COLORS.GREY}
        textColor="black"
        title="Not Right Now"
        Clickable={() => {
          navigation.navigate("login");
        }}
      />
      <View style={{ marginTop: 10 }}></View>
      <CustomButton
        bg={COLORS.BLUE}
        textColor="white"
        title="Absolutely!"
        Clickable={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "bold" },
  like: { color: "gray", fontSize: 17, marginTop: 10 },
  future: { color: "gray", fontSize: 17 },
});

export default FaceScreen;
