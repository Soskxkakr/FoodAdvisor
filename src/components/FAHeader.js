import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>FoodAdvisor</Text>
    </View>
  );
};

export default Header;
