import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Box ,Image, ImageBackground, SafeAreaView, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BlurView } from 'expo-blur';

import { CustomUserInput } from '../components/CustomUserInput';
import appColors from '../appColors';
import ScreenNames from './ScreenNames';

const LoginScreen = ( { navigation } )=> {
    return(
  <ImageBackground style={{flex:1}} source={require("../assets/Bgimg.png")}>
    <BlurView intensity={50} experimentalBlurMethod='dimezisBlurView' style={{flex: 1 ,justifyContent: "center", alignItems : "center", backgroundColor: "transparent", opacity:1}}>
    <View>
      <Text style={{fontSize: 25, textAlign: "center"}}>LOGIN</Text>
      <View style={{height:30}}></View>
      <CustomUserInput name="user" color={appColors.appColor} containerType="antdesign" placeholder="Email"/>
      <View style={{height:10}}></View>
      <CustomUserInput name="eye" color={appColors.appColor} containerType="feather" placeholder="Password"/>
    </View>

    <View style={{height:20}}></View>

    <TouchableOpacity style={{backgroundColor: appColors.appColor, height: 40, width: 150, borderRadius: 20, alignItems: "center", justifyContent: "center"}}>
      <Text style={{color: 'white'}}>LOGIN</Text>
    </TouchableOpacity>

    <View style={{height:40}}></View>

    <TouchableOpacity style={{backgroundColor: "transparent", height: 40, width: 150, borderRadius: 20, alignItems: "center", justifyContent: "center"}} onPress={() => {navigation.navigate(ScreenNames.SIGNUP_SCREEN)}}>  
      <Text style={{color: 'black',borderBottomWidth: 1}}>SIGN UP</Text>
    </TouchableOpacity>
      </BlurView>
  </ImageBackground>
    );
};
export default LoginScreen;


