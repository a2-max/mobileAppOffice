import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import CustomHeader from "../../components/CustomHeader";
import { TextInput } from "react-native-paper";
import CustomTextInput from "../../components/CustomTextInput";
import { COLORS } from "../../constant/Constant";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <CustomHeader title="Login With Email" />
        <View style={styles.box}>
          <Text style={styles.address}>Enter your email address</Text>
          <Text style={styles.enter}>
            Enter your registered email address to login. Don't have an account?
            <Text
              onPress={() => navigation.navigate("register")}
              style={{ color: COLORS.BLUE, marginLeft: 10 }}
            >
              {" "}
              Sign Up.
            </Text>
          </Text>
          <CustomTextInput label="Email Address*" />

          <Text
            onPress={() => navigation.navigate("verifylogin")}
            style={styles.otp}
          >
            We will send an OTP to your account to verify your login.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: Platform.OS === "android" && 40,
    backgroundColor: "#fff",
  },
  box: { paddingHorizontal: 10, marginTop: 60 },
  otp: { color: COLORS.BLUE, fontSize: 15, marginTop: 20 },
  enter: { marginTop: 7, fontSize: 17, marginBottom: 20 },
  address: { fontSize: 25, fontWeight: "bold" },
});

export default LoginScreen;
