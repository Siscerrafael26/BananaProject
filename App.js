import React from "react";
import { SafeAreaView, StyleSheet, Platform, View, Switch } from "react-native";
import Constants from "expo-constants";
import Index from "./Screens/Index";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import FarmerPage from "./Screens/FarmerPage";
import CartScreen from "./Screens/CartScreen";
import OrderPage from "./Screens/ProductPage";
import { NativeRouter, Route, Routes } from "react-router-native";
import ProductPage from "./Screens/ProductPage";
import FarmerForm from "./Screens/FarmerForm";

//import LocationScreen from "./Screens/LocationScreen";


const App = () => {

  //const Stack = createNativeStackNavigator();

  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" Component={Index}/>
        <Route exact path="/signup" Component={SignUpScreen}/>
        <Route exact path="/login" Component={LoginScreen} />
        <Route exact path="/farmerpage" Component={FarmerPage} />
        <Route exact path="/products" Component={ProductPage} /> 
      </Routes>
    </NativeRouter>
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
