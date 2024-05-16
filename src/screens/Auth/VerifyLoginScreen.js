import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomHeader from "../../components/CustomHeader";
import { COLORS } from "../../constant/Constant";
import OTPInput from "react-native-otp-forminput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const VerifyLoginScreen = () => {
  const [time, setTime] = useState(20);

  // useEffect(() => {
  //   const data = setInterval(() => {
  //     setTime(20 - 1);
  //   }, 1000);
  //   // return () => clearInterval(data);
  // }, [time]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <CustomHeader title="Verify Login" />
        <View style={styles.bodyWrapper}>
          <Text style={styles.headingTxt}>Enter the 4-digit OTP</Text>
          <Text style={{ marginTop: 7, fontSize: 17, marginBottom: 20 }}>
            We have sent an OTP to your registerd email address and phone number
          </Text>
          <OTPInput
            type="outline"
            inputStyle={{
              backgroundColor: "#F2F2F2",
              height: 70,
              width: 70,
            }}
            borderColor="#F2F2F2"
            currentBorderColor={COLORS.GREY}
            onChange={(code) => {
              console.log(code);
            }}
            style={styles.otpInpt}
          />

          <View style={styles.base}>
            <View style={styles.resendBtnAndIcon}>
              <MaterialCommunityIcons
                name="share-circle"
                size={24}
                color={COLORS.GREY}
              />
              <Text style={styles.resendOtpTxt}>Resend OTP</Text>
            </View>
            <Text style={{ color: COLORS.BLUE, fontSize: 18 }}>{time}s</Text>
          </View>
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
  headingTxt: {
    fontSize: 25,
    fontWeight: "bold",
  },
  bodyWrapper: {
    paddingHorizontal: 20,
    marginTop: 60,
  },
  base: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  resendBtnAndIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  resendOtpTxt: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#808080",
  },
});

export default VerifyLoginScreen;
