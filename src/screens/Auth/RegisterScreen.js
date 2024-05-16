import {
  View,
  Text,
  StyleSheet,
  Platform,
  Pressable,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Picker,
} from "react-native";
import React, { useRef, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import CustomDropDown from "../../components/CustomDropDown";
import TermandConditon from "../../components/TermandConditon";
import { TextInput } from "react-native-paper";
import CustomTextInput from "../../components/CustomTextInput";

import CustomHeader from "../../components/CustomHeader";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const phoneInput = useRef(null);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    role: "",
    country: "",
    email: "",
    mobile: "",
    term: false,
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <CustomHeader title="Sign Up For Free" />
        <Text style={styles.mandatory}>
          All fields marked with * are mandatory
        </Text>
        {/* for input fields */}
        <View style={styles.formView}>
          <CustomTextInput label="First Name*" />
          <CustomTextInput label="Last Name*" />

          <CustomDropDown title="Role*" />
          {/* <CustomDropDown title="Country*" /> */}

          <CustomTextInput label="Email Address*" />
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              marginTop: 20,
              width: "90%",
            }}
          >
            <View style={styles.box1}></View>
            {/* text */}
            <Text style={styles.click}>
              By clicking on "Register" I accept the{" "}
              <Text onPress={() => setShow(!show)} style={styles.term}>
                Terms and Conditions.
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.register}
            onPress={() => navigation.navigate("face")}
          >
            <Text style={styles.title}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TermandConditon
        show={show}
        closingModel={() => {
          setShow(!show);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: Platform.OS === "android" && 40,
    backgroundColor: "#fff",
  },
  mandatory: {
    marginTop: 60,
    paddingHorizontal: 20,
    color: "#4374F4",
    fontSize: 18,
  },
  formView: {
    paddingHorizontal: 20,
  },
  register: {
    width: "100%",
    height: 60,
    backgroundColor: "gray",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 40,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  term: {
    color: "#4374F4",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  box1: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderWidth: 0.4,
    borderColor: "black",
    marginTop: 24,
  },
  click: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
    marginTop: 24,
    color: "#353535",
  },
});

export default RegisterScreen;
