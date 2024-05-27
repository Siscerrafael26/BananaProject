import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenNames from "../ScreenNames";
import FarmerPage from "./FarmerPage";
import CartScreen from "./CartScreen";
import LocationScreen from "./LocationScreen";
import ProductPage from "./ProductPage";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  //Scwitch user (buyer/farmer)
  const userType = "buyer";

  if (userType == "farmer") {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Farmer" component={FarmerPage} />
        <Tab.Screen name="Location" component={LocationScreen} />
      </Tab.Navigator>
    );
  } else {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Products" component={ProductPage} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Location" component={LocationScreen} />
      </Tab.Navigator>
    );
  }
};

export default TabNavigator;
