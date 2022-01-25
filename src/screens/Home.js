import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import FAButton from "../components/FAButton";
import useFirebase from "../contexts/useFirebase";
import useFoodAdvisor from "../contexts/useFoodAdvisor";
import styles from "../styles/styles";

const Home = () => {
  const { userData } = useFirebase();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
