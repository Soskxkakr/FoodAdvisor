import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword";
import MainBottomNav from "./MainBottomNav";
import useFirebase from "../contexts/useFirebase";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  const { user } = useFirebase();
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="Home"
            component={MainBottomNav}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <>
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
              headerTitle: "New User Registration",
              headerStyle: { backgroundColor: "#FF7A00" },
              headerTintColor: "#FFF",
              headerTitleStyle: { fontSize: 28 },
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default LoginStack;
