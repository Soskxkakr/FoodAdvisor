import React from "react";
import { View, Text } from "react-native";
import styles from "../MainComponents/Design/GlobalStyles";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Home</Text>
      </View>
    </View>
  );
};

export default Home;
