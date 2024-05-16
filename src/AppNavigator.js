import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./screens/SplashScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import AuthScreen from "./screens/Auth/AuthScreen";
import FaceScreen from "./screens/Auth/FaceScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import VerifyLoginScreen from "./screens/Auth/VerifyLoginScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="face" component={FaceScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="verifylogin" component={VerifyLoginScreen} />
        <Stack.Screen name="auth" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
