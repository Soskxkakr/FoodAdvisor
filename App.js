import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FirebaseProvider } from "./src/contexts/useFirebase";
import { FoodAdvisorProvider } from "./src/contexts/useFoodAdvisor";
import LoginStack from "./src/navigations/LoginStack";

export default function App() {
  return (
    <NavigationContainer>
      <FoodAdvisorProvider>
        <FirebaseProvider>
          <LoginStack />
        </FirebaseProvider>
      </FoodAdvisorProvider>
    </NavigationContainer>
  );
}
