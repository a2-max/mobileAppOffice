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
import React from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeInDown,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";
import { COLORS } from "../../constant/Constant";
import RedImg from "../../Images/redScreenImg.png";

const ImageComponent = Animated.createAnimatedComponent(Image);
const AuthScreen = () => {
  const navigation = useNavigation();
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
          Empower your child' with
        </Animated.Text>
        <Animated.Text entering={FadeInRight.delay(600)} style={styles.info}>
          college-ready portfolios
        </Animated.Text>
        <Animated.View
          entering={FadeInUp.delay(800).springify().stiffness(10)}
          style={styles.box}
        >
          <TouchableOpacity style={styles.signupfree}>
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
            <Pressable onPress={() => navigation.navigate("register")}>
              <Text style={styles.login}>Login With Email</Text>
            </Pressable>
            <TouchableOpacity>
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
