import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Icon } from "react-native-elements";
import Favorites from "../Favorites/Favorites";
import Home from "../Home/Home";
import MyAccount from "../MyAccount/MyAccount";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveBackgroundColor: "#FFFFFF",
        tabBarActiveTintColor: "#FF7A00",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarShowLabel: false,
        tabBarStyle: {
          margin: 12,
          borderRadius: 20,
          height: 75,
          backgroundColor: "#FF7A00",
        },
        tabBarIcon: ({ color }) => {
          const icons = {
            Feed: "home",
            Favorites: "heart",
            Profile: "user",
          };
          return (
            <Icon
              name={icons[route.name]}
              color={color}
              type="font-awesome-5"
              size={36}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Feed" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={MyAccount} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
