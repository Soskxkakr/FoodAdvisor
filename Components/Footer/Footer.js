import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../MainComponents/Design/GlobalStyles";

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.footerTextBold}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
