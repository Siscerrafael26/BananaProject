import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import CustomSearchInput from "../components/CustomSearchInput";
import ProductCard from "../components/ProductCard";
import appColors from "../appColors";

const products = [
    {
        "id": 1,
        "image": require('../assets/Banana1.jpg'),
        "beiYaKichane": 6000,
        "beiYaMkungu": 15000,
        "ainaYaNdizi": "Mshare"
    },
    {
        "id": 2,
        "image": require('../assets/Banana2.jpg'),
        "beiYaKichane": 5000,
        "beiYaMkungu": 10000,
        "ainaYaNdizi": "Malindi"
    },
    {
        "id" : 3,
        "image": require('../assets/banana3.jpg'),
        "beiYaKichane": 2500,
        "beiYaMkungu": 9000,
        "ainaYaNdizi": "Kisukari"
    },
    {
        "id" : 4,
        "image": require('../assets/banana4.jpg'),
        "beiYaKichane": 5000,
        "beiYaMkungu": 11000,
        "ainaYaNdizi": "Mshare"
    },
    {
        "id" : 5,
        "image": require('../assets/banana5.jpg'),
        "beiYaKichane": 7000,
        "beiYaMkungu": 12000,
        "ainaYaNdizi": "Malindi"
    },
    {
        "id" : 6,
        "image": require('../assets/banana6.jpg'),
        "beiYaKichane": 5500,
        "beiYaMkungu": 13000,
        "ainaYaNdizi": "Malindi"
    },
    {
        "id" : 7,
        "image": require('../assets/banana7.jpg'),
        "beiYaKichane": 5000,
        "beiYaMkungu": 10000,
        "ainaYaNdizi": "Kisukari"
    },
    {
        "id" : 8,
        "image": require('../assets/banana8.jpg'),
        "beiYaKichane": 4000,
        "beiYaMkungu": 11500,
        "ainaYaNdizi": "Uganda"
    },
    {
        "id" : 9,
        "image": require('../assets/banana9.jpg'),
        "beiYaKichane": 4500,
        "beiYaMkungu": 9000,
        "ainaYaNdizi": "Bukoba"
    },
    {
        "id" : 10,
        "image": require('../assets/banana10.jpg'),
        "beiYaKichane": 3500,
        "beiYaMkungu": 8000,
        "ainaYaNdizi": "Malindi"
    }
]

const ProductList = ({filterText}) => {
        console.log(filterText.length)
        const length = filterText.length
        const products_ = []

        if ( length < 1  ) {
            products.forEach((element) => {
            products_.push(<ProductCard key={element.id} image={element.image} beiKichane={element.beiYaKichane} beiMkungu={element.beiYaMkungu} ainaYaNdizi={element.ainaYaNdizi}/>)
        })
    }
        else {
            products.forEach((element) => {
                if ( element.ainaYaNdizi.includes(filterText) ) {
                    products_.push(<ProductCard key={element.id} image={element.image} beiKichane={element.beiYaKichane} beiMkungu={element.beiYaMkungu} ainaYaNdizi={element.ainaYaNdizi}/>)
            }})
        }

    return products_;
}


const ProductPage = () => {

    const [ filterText, setFilterText ] = useState("")

    return (
        <View style={{flex: 1}}>
            <View style={{height: 143, backgroundColor: appColors.appColor, justifyContent: "center", alignItems: "center"}}>
                <CustomSearchInput onUserTyping={(e) => {setFilterText(e)}} />
            </View>
            <ScrollView style={{flex: 1, backgroundColor: "#F3FFF3"}}>
                <ProductList filterText={filterText}/>
            </ScrollView>
        </View>
    )
}

export default ProductPage;