import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DataCard from "../components/DataCard";
import OrderCard from "../components/OrderCard";
import ProductCard from "../components/ProductCard";
import Spacer from "../components/Spacer";

export default FarmerPage = () => {

    const Cards = () => {
        const cards_ = []
        const cardIds = ["1", "2", "3"]
        cardIds.forEach( id => {
                cards_.push(
                    <View key={id}>
                    <DataCard cardType={"total"} />
                    </View>);
            })

        return cards_;
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <View style={styles.WrapperForIconAndTxt}>
          <Text style={styles.headerText}>Taarifa zako</Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.uploadButton}>
            <FontAwesome6 name="add" size={23} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Spacer size={25} spacerType={"columnSpacer"}/>
      <View style={styles.farmerPageContents}>
        <ScrollView style={{height: 120}} horizontal={true}>
            <Cards />
        </ScrollView>
      <Spacer size={25} spacerType={"columnSpacer"}/>
      <OrderCard image={require("../assets/Banana1.jpg")} ainaYaNdizi={"Malindi"} beiKichane={"3500"} beiMkungu={"14000"}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3fff3",
  },
  topHeader: {
    justifyContent: "flex-end",
    backgroundColor: "#70c945",
    height: 150,
    borderBottomRightRadius: 21,
    borderBottomLeftRadius: 21,
  },
  headerText: {
    color: "#f3fff3",
    fontSize: 23,
  },
  uploadButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#f3fff3",
  },
  WrapperForIconAndTxt: {
    flexDirection: "row",
    marginBottom: 7,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "space-between",
  },
  farmerPageContents: {
    paddingLeft: 20
  }
});
