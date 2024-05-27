import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Spacer from '../components/Spacer';

const data = [
    { label: "Malindi", value: 'Malindi' },
    { label: "Bukoba", value: 'Bukoba' },
    { label: "Mshare", value: 'Mshare' },
    { label: "Matoke", value: 'Matoke' },
    { label: "Uganda", value: 'Uganda' },
    { label: "Malindi", value: 'Malindi' },
    { label: "Bukoba", value: 'Bukoba' },
    { label: "Mshare", value: 'Mshare' },
    { label: "Matoke", value: 'Matoke' },
    { label: "Uganda", value: 'Uganda' },
  ];

  const dataKiasi = [
    { label: "Mkungu", kiasi: 'Mkungu' },
    { label: "Kichane", kiasi: 'Kichane' }
  ];


  const FarmerForm = () => {
    const [value, setValue] = useState(null);
    const [ kiasi, setKiasi ] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold", paddingVertical: 10}}>Ongeza bidhaa mpya</Text>
        <Text style={styles.menuTitle}>Aina ya ndizi</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#70c945' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="kiasi"
          placeholder={!isFocus ? 'Chagua aina ya ndizi' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />

          <Spacer size={10} spacerType={"columnSpacer"} />

        <Text style={styles.menuTitle}>Bei ya ndizi</Text>
        <TextInput
        style={styles.textInput}
        />

        <Text style={styles.menuTitle}>Kiasi ya ndizi</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#70c945' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={dataKiasi}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Chagua aina ya ndizi' : '...'}
          value={kiasi}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setKiasi(item.kiasi);
            setIsFocus(false);
          }}
        />

        <TouchableOpacity style={{paddingVertical: 20, width: 150, backgroundColor: "#70c945", justifyContent: "center", alignItems: "center", borderRadius: 25, marginTop: 20, alignSelf: "center"}} activeOpacity={0.7} ><Text style={{color: "#f3fff3"}}>Hifadhi</Text></TouchableOpacity>
      </View>
      </View>
    );
  };

  export default FarmerForm;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3fff3",
    },
    formContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 500,
      marginHorizontal: 20,
      borderRadius: 15,
      marginTop: 50
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 10,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    menuTitle: {
        paddingVertical: 10,
        fontSize: 16
    },
    textInput: {
        height: 50,
        borderRadius: 8,
        borderWidth: 0.5,
        paddingHorizontal: 10,
        fontSize: 16,
        borderColor: "gray"
    }
  });