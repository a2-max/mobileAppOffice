import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeInDown,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";
import { COLORS } from "../../constant/Constant";
import blueImg from "../../Images/blueScreenImg.png";
import RedImg from "../../Images/redScreenImg.png";
import greenImg from "../../Images/greenScreenImg.png";

const ImageComponent = Animated.createAnimatedComponent(Image);

const AuthScreen = () => {
  const navigation = useNavigation();
  // changing image text and background color
  const [img, setImg] = useState("");
  const [txt, setTxt] = useState("");
  const [bg, setBg] = useState("");

  // useEffect(() => {
  //   setTimeout(() => {
  //     // Code for changing content
  //     for (let i = 0; i < 3; i++) {
  //       setImg(screenData[i].img);
  //       setTxt(screenData[i].txt);
  //       setBg(screenData[i].bgcolor);
  //     }
  //   }, 3000);
  // }, [3000]);

  const screenData = [
    {
      img: blueImg,
      txt: "Empower Your Child' with college-ready portfolios",
      bgcolor: "#4374F4",
    },
    {
      img: RedImg,
      txt: "Track and celebrate every educational milestone",
      bgcolor: "#F37C54",
    },
    {
      img: greenImg,
      txt: "Share your child's educational journey",
      bgcolor: "#7DC8C2",
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.main}>
        <ImageComponent
          entering={FadeInDown.delay(400).randomDelay()}
          source={RedImg}
          style={styles.image}
        />
        <Animated.Text
          entering={FadeInRight.delay(500).springify()}
          style={styles.info}
        >
          Track and celebrate every
        </Animated.Text>
        <Animated.Text entering={FadeInRight.delay(600)} style={styles.info}>
          educational milestone
        </Animated.Text>
        <Animated.View
          entering={FadeInUp.delay(800).springify().stiffness(10)}
          style={[styles.box, { backgroundColor: COLORS.ORANDE }]}
        >
          <TouchableOpacity
            style={styles.signupfree}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={{ fontSize: 20, fontWeight: "900" }}>
              Sign Up For Free
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.connected}>
            <AntDesign
              name="linkedin-square"
              size={24}
              color="white"
              style={{ paddingLeft: 20 }}
            />
            <Text style={styles.continuetext}>Continue With Linkedin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.connected}>
            <Entypo
              name="google--with-circle"
              size={24}
              color="white"
              style={{ paddingLeft: 20 }}
            />
            <Text style={styles.continuetext}>Continue With Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.connected}>
            <Ionicons
              name="logo-apple-appstore"
              size={24}
              color="white"
              style={{ paddingLeft: 20 }}
            />
            <Text style={styles.continuetext}>Continue With Apple</Text>
          </TouchableOpacity>
          <View style={styles.last}>
            <Pressable onPress={() => navigation.navigate("login")}>
              <Text style={styles.login}>Login With Email</Text>
            </Pressable>
            <TouchableOpacity onPress={() => navigation.navigate("face")}>
              <Image
                style={styles.face}
                source={require("../../Images/face.png")}
                tintColor="white"
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: Platform.OS === "android" && 40,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    objectFit: "cover",
    marginTop: 30,
    marginBottom: 30,
  },
  info: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },
  box: {
    flex: 1,
    backgroundColor: COLORS.ORANDE,
    width: "180%",
    marginTop: 35,
    alignItems: "center",
    borderTopLeftRadius: 340,
    borderTopRightRadius: 340,
    paddingTop: 30,
  },
  signupfree: {
    width: "45%",
    backgroundColor: COLORS.YELLOW,
    height: 50,
    marginTop: 30,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  connected: {
    width: "45%",
    borderColor: "white",
    borderWidth: 1,
    height: 50,
    marginTop: 30,
    borderRadius: 60,
    alignItems: "center",
    flexDirection: "row",
  },
  continuetext: {
    fontSize: 20,
    fontWeight: "900",
    color: "white",
    paddingLeft: 30,
  },
  last: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "45%",
    alignItems: "center",
    paddingBottom: 30,
  },
  login: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "white",
  },
  face: {
    width: 50,
    height: 50,
  },
});

export default AuthScreen;
