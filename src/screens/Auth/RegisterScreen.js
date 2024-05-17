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
import React, { useEffect, useRef, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import CustomDropDown from "../../components/CustomDropDown";
import TermandConditon from "../../components/TermandConditon";
import CustomTextInput from "../../components/CustomTextInput";
import CustomHeader from "../../components/CustomHeader";
import Checkbox from "expo-checkbox";
import { COLORS } from "../../constant/Constant";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [isError, setIsError] = useState(false);

  // Input Fields Hook
  const [firstname, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);

  // Input Fields Error Hook
  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [roleErr, setRoleErr] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  const [isActiveRegister, setIsActiveRegister] = useState(false);
  const [show, setShow] = useState(false);

  // Handling First Name Inbput
  const handleFirstName = (e) => {
    const fNameVar = e.nativeEvent.text;
    setFirstName(fNameVar);
    // regex for first name
    if (/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fNameVar)) {
      setFirstName(fNameVar);
      setFirstNameErr("");
    } else {
      setFirstNameErr("First letter must be capital and more than 2 letter");
    }
  };
  // Handling Last Name Inbput
  const handleLastName = (e) => {
    const lNameVar = e.nativeEvent.text;
    setLastName(lNameVar);
    // regex for last name
    if (/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(lNameVar)) {
      setLastName(lNameVar);
      setLastNameErr("");
    } else {
      setLastNameErr("First letter must be capital and more than 2 letter");
    }
  };

  // Handling Role Dropdown
  const handleDropdown = (role) => {
    setRole(role);
  };

  // Handling Email Input
  const handleEmail = (e) => {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    // regex for email
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailVar)) {
      setEmail(emailVar);
      setEmailErr("");
    } else {
      setEmailErr("Invalid Email");
    }
  };
  // handle register function
  const handleRegister = () => {
    // some code
    !isActiveRegister ? setIsError(true) : setIsError(false);
  };
  // function to check if all the input field are filled or not
  const checkInputField = () => {
    if (
      firstname == null ||
      lastName == null ||
      role == null ||
      email == null ||
      firstname == "" ||
      lastName == "" ||
      role == "" ||
      email == "" ||
      !isChecked ||
      !firstNameErr == "" ||
      !lastNameErr == "" ||
      !emailErr == ""
    ) {
      setIsError(true);
      return true;
    } else {
      setIsError(false);
      return false;
    }
  };
  // console.log(`firstname: ${firstname}
  // lastname:${lastName}
  // role: ${role}
  // email: ${email}
  // isChecked: ${isChecked}
  // isActiveBtn: ${isActiveRegister}
  // `);
  useEffect(() => {
    const anyEmptyField = checkInputField();

    setIsActiveRegister(!anyEmptyField);
  }, [firstname, lastName, role, email, isChecked]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <CustomHeader title="Sign Up For Free" />
        {isError ? (
          <Text style={styles.errToast}>All Fields are required.</Text>
        ) : (
          <Text></Text>
        )}
        <Text style={styles.mandatory}>
          All fields marked with * are mandatory
        </Text>
        {/* for input fields */}
        <View style={styles.formView}>
          {/* ============ First Name =============== */}
          <CustomTextInput
            label="First Name*"
            error={firstNameErr}
            handleInput={(e) => handleFirstName(e)}
          />
          {firstNameErr != "" ? (
            <Text style={styles.errMsg}>{firstNameErr}</Text>
          ) : (
            <Text></Text>
          )}

          {/* ============== Last Name ================ */}
          <CustomTextInput
            label="Last Name*"
            error={lastNameErr}
            handleInput={(e) => handleLastName(e)}
          />
          {lastNameErr != "" ? (
            <Text style={styles.errMsg}>{lastNameErr}</Text>
          ) : (
            <Text></Text>
          )}

          {/* =========== Role ========= */}
          <CustomDropDown
            label="Role*"
            error={roleErr}
            onSelect={handleDropdown}
          />
          {roleErr ? <Text style={styles.errMsg}>Role is Required</Text> : ""}

          {/* ============== Email ================ */}
          <CustomTextInput
            label="Email*"
            error={emailErr}
            handleInput={(e) => handleEmail(e)}
          />
          {emailErr != "" ? (
            <Text style={styles.errMsg}>{emailErr}</Text>
          ) : (
            <Text></Text>
          )}
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              marginTop: 20,
              width: "90%",
            }}
          >
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? COLORS.BLUE : undefined}
            />
            {/* text */}
            <Text style={styles.click}>
              By clicking on "Register" I accept the{" "}
              <Text onPress={() => setShow(!show)} style={styles.term}>
                Terms and Conditions.
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.register,
              { backgroundColor: isActiveRegister ? "#4374F4" : "#c4c4c4" },
            ]}
            onPress={() => {
              // navigation.navigate("face");
              handleRegister();
            }}
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
  errMsg: {
    color: "#f00000",
    fontSize: 16,
  },
  term: {
    color: "#4374F4",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  checkbox: {
    marginTop: 25,
  },
  click: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
    marginTop: 24,
    color: "#353535",
  },
  errToast: {
    color: "#fff",
    zIndex: 999999999,
    backgroundColor: "#f00000",
    padding: 10,
    textAlign: "center",
    fontSize: 18,
  },
});

export default RegisterScreen;
