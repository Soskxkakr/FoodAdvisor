import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyAccount from "../screens/MyAccount";
import EditProfile from "../screens/EditProfile";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: "Edit Profile",
          headerTitleAlign: "center",
          headerTintColor: "#FFFFFF",
          headerStyle: { backgroundColor: "#FF7A00" },
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
