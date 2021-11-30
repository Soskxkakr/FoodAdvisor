import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../MainComponents/Design/GlobalStyles";

const MyAccount = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>My Account</Text>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonTextPrimary}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonTextPrimary}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAccount;
