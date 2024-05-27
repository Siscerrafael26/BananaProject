import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default CardButton = ({ title }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button : {
        height: 40, 
        width: 80, 
        backgroundColor: "#70c945", 
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: 22
    },
    buttonText: {
        color: "white"
    }
})