import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const Index = () => {
    return (
            <SafeAreaView style={{flex:1,backgroundColor: "#70c945", justifyContent: "center", alignItems: "center"}}>
                <View style={{height: 500, justifyContent: "space-around", alignItems: "center"}}>
                <View style={{width: 100, height: 100, backgroundColor: "white", borderRadius: 50, paddingLeft: 20, justifyContent: 'center', alignItems: "center"}}>
                    <Image source={require("../assets/plant.png")} resizeMode="contain" style={{width: 90, height: 90}}></Image>
                </View>
                <View>
                    <TouchableOpacity style={[styles.button, {backgroundColor: "black", marginBottom: 20}]} activeOpacity={0.7}>
                        <Text style={{color: "white"}}>REGISTER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {backgroundColor: "white"}]} activeOpacity={0.7}>
                        <Text >LOGIN</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        height: 50,
        width: 280,
        borderRadius: 20
    }
})

export default Index;