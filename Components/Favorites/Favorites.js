import React from "react";
import { View, Text } from "react-native";
import styles from "../MainComponents/Design/GlobalStyles";

const Favorites = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>My Favorites</Text>
      </View>
    </View>
  );
};

export default Favorites;
