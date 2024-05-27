import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import Index from "./src/screens/Index";
//import { NativeRouter, Route, Routes } from "react-router-native";
import ProductPage from "@screens/(tabs)/ProductPage";
import FarmerForm from "@screens/FarmerForm";
import SignUpScreen from "@screens/SignUpScreen";
import LoginScreen from "@screens/LoginScreen";
import FarmerPage from "@screens/(tabs)/FarmerPage";
import LocationScreen from "@screens/(tabs)/LocationScreen";
import AuthScreen from "@screens/(tabs)/AuthScreen";

import ScreenNames from "@screens/ScreenNames";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import LocationScreen from "@screens/LocationScreen";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.HOME_SCREEN}>
        <Stack.Screen name={ScreenNames.HOME_SCREEN} component={Index} />
        <Stack.Screen
          name={ScreenNames.FARMERFORM_SCREEN}
          component={FarmerForm}
        />
        <Stack.Screen
          name={ScreenNames.SIGNUP_SCREEN}
          component={SignUpScreen}
        />
        <Stack.Screen name={ScreenNames.LOGIN_SCREEN} component={LoginScreen} />
        {/* <Stack.Screen name={ScreenNames.FARMER_SCREEN} component={FarmerPage} /> */}
        <Stack.Screen
          name={ScreenNames.PRODUCT_SCREEN}
          component={ProductPage}
        />
        {/* <Stack.Screen name={ScreenNames.LOCATION_SCREEN} component={LocationScreen} /> */}
        <Stack.Screen
          name={ScreenNames.AUTH_SCREEN}
          component={AuthScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#f3fff3",
  },
});
export default App;
