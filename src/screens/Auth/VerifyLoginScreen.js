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
import { TouchableOpacity } from "react-native-gesture-handler";
const VerifyLoginScreen = () => {
  const [count, setCount] = useState(20);
  const [activeResend, setActiveResend] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
    }, 1000); // Decrease count every second

    return () => clearInterval(timer);
  }, []);

  const handleOtpResend = () => {
    count == 0 ? setCount(20) : count;
  };

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
            <TouchableOpacity
              style={styles.resendBtnAndIcon}
              onPress={handleOtpResend}
            >
              <MaterialCommunityIcons
                name="share-circle"
                size={24}
                color={count == 0 ? "#000" : "#808080"}
              />
              <Text
                style={[
                  styles.resendOtpTxt,
                  { color: count == 0 ? "#000" : "#808080" },
                ]}
              >
                Resend OTP
              </Text>
            </TouchableOpacity>
            <Text style={{ color: COLORS.BLUE, fontSize: 18 }}>{count}s</Text>
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
