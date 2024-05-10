import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Box ,Image, ImageBackground, SafeAreaView, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { CustomUserInput } from '../components/CustomUserInput';
import { BlurView } from 'expo-blur';
import { Fontisto } from '@expo/vector-icons';
import appColors from '../appColors';
import { Link } from 'react-router-native';

const SignUpScreen = ( { navigation } )=> {

    return(
  <ImageBackground style={{flex:1}} source={require("../assets/Bgimg.png")}>
    <BlurView intensity={50} experimentalBlurMethod='dimezisBlurView' style={{flex: 1 ,justifyContent: "center", alignItems : "center", backgroundColor: "transparent", opacity:1}}>
    <View>
      <Text style={{fontSize: 25, paddingLeft: 10, textAlign: "center", fontWeight: "bold"}}>SIGN UP</Text>
      <View style={{height:30}}></View>
      <CustomUserInput name="user" containerType="antdesign" color={appColors.appColor} placeholder="FirstName"/>
      <View style={{height:10}}></View>
      <CustomUserInput name="user" color={appColors.appColor} containerType="antdesign" placeholder="LastName"/>
      <View style={{height:10}}></View>
      <CustomUserInput name="email" color={appColors.appColor} containerType="fontisto" placeholder="Email"/>
      <View style={{height:10}}></View>
      <CustomUserInput name="phone" color={appColors.appColor} containerType="antdesign" placeholder="PhoneNumber"/>
      <View style={{height:10}}></View>
      <CustomUserInput name="location" containerType="evilicons" color={appColors.appColor} placeholder="Location"/>
      <View style={{height:10}}></View>
      <CustomUserInput name="eye" color={appColors.appColor} containerType="feather" placeholder="Password"/>
      <View style={{height:10}}></View>
    </View>

    <View style={{height:20}}></View>

    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor: appColors.appColor, height: 40, width: 150, borderRadius: 20, alignItems: "center", justifyContent: "center"}}>
      <Text style={{color: 'white'}}>SIGN UP</Text>
    </TouchableOpacity>

    <View style={{height:40}}></View>

    <Link to={"/login"} style={{backgroundColor: "transparent", height: 40, width: 250, borderRadius: 20, alignItems: "center", justifyContent: "center"}} >
      <Text style={{color: 'black', fontWeight: "bold", borderBottomWidth: 1}}>Already have an account? Login</Text>
    </Link>
    </BlurView>

  </ImageBackground>
    );
};
export default SignUpScreen;


