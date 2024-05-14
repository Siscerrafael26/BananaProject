import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import Index from "./Screens/Index";
//import { NativeRouter, Route, Routes } from "react-router-native";
import ProductPage from "./Screens/ProductPage";
import FarmerForm from "./Screens/FarmerForm";
import SignUpScreen from "./Screens/SignUpScreen";
import LoginScreen from "./Screens/LoginScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import LocationScreen from "./Screens/LocationScreen";


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Form" component={FarmerForm} />
        <Stack.Screen name="Register" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
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
