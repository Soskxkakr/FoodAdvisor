import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { NavigationContainer } from "@react-navigation/native";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerStyle: { backgroundColor: "#FF7A00" },
            headerTintColor: "#FFF",
            headerTitleStyle: { fontSize: 28 },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
