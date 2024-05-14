import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import Index from "./Screens/Index";
//import { NativeRouter, Route, Routes } from "react-router-native";
import ProductPage from "./Screens/ProductPage";
import FarmerForm from "./Screens/FarmerForm";
import SignUpScreen from "./Screens/SignUpScreen";
import LoginScreen from "./Screens/LoginScreen";
import FarmerPage from "./Screens/FarmerPage";
import LocationScreen from "./Screens/LocationScreen";

import ScreenNames from "./Screens/ScreenNames";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import LocationScreen from "./Screens/LocationScreen";


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.HOME_SCREEN}>
        <Stack.Screen name={ScreenNames.HOME_SCREEN} component={Index} />
        <Stack.Screen name={ScreenNames.FARMERFORM_SCREEN} component={FarmerForm} />
        <Stack.Screen name={ScreenNames.SIGNUP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name={ScreenNames.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={ScreenNames.FARMER_SCREEN} component={FarmerPage} />
        <Stack.Screen name={ScreenNames.PRODUCT_SCREEN} component={ProductPage} />
        <Stack.Screen name={ScreenNames.LOCATION_SCREEN} component={LocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    backgroundColor: "#f3fff3"
  },
});
export default App;
