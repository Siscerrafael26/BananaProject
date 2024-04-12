import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/Signupscreen";
//import Signupscreen from './Screens/Signupscreen';
import Index from "./Screens/Index";
import ProductPage from "./Screens/ProductPage";
import OrderPage from "./Screens/OrderPage";
import FarmerPage from "./Screens/FarmerPage";

import { CustomUserInput } from "./components/CustomUserInput";
import Farmer from "./Screens/Farmer";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FarmerPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
export default App;
