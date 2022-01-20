import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import ProfileStack from "./ProfileStack";

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
          height: 50,
          backgroundColor: "#FF7A00",
        },
        tabBarIcon: ({ color }) => {
          const icons = {
            Feed: "home",
            Favorites: "heart",
            ProfileStack: "user",
          };
          return (
            <Icon
              name={icons[route.name]}
              color={color}
              type="font-awesome-5"
              size={28}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Feed" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
