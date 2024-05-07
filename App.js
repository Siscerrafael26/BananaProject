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
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from "./Screens/TestScreen";
import * as SystemUI from 'expo-system-ui';
import TestScreen1 from "./Screens/TestScreen1";
import LocationScreen from "./Screens/LocationScreen";


const App = () => {

  const Stack = createNativeStackNavigator();
  SystemUI.setBackgroundColorAsync("transparent");

  return (
    <View style={{flex: 1}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LocationScreen" >
        <Stack.Screen name='test' component={TestScreen} />
        <Stack.Screen name='test1' component={TestScreen1} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
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
