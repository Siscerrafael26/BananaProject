import React from "react";
import { SafeAreaView, StyleSheet, Platform, View } from "react-native";
import Constants from "expo-constants";
import FarmerPage from "./Screens/FarmerPage";
import FarmerForm from "./Screens/FarmerForm";
import Index from "./Screens/Index";
import LoginScreen from "./Screens/LoginScreen";
import ProductPage from "./Screens/ProductPage";
import CartScreen from "./Screens/CartScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import LocationScreen from "./Screens/LocationScreen";


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ProductScreen" component={ProductPage} />
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
