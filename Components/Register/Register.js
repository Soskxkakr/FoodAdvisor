import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../MainComponents/Design/GlobalStyles";
import Footer from "../Footer/Footer";

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View stlye={styles.innerContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.textInput} placeholder="Name" />
        <TextInput
          style={styles.textInput}
          placeholder="Email Address"
          autoComplete="email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          secureTextEntry
        />
        <Text style={[styles.primaryText, styles.textCenter]}>
          By signing up, I accept and agree to the{" "}
          <Text style={[styles.textUnderline, styles.textBold]}>
            Terms of Service
          </Text>{" "}
          and{" "}
          <Text style={[styles.textUnderline, styles.textBold]}>
            Privacy Policy
          </Text>
        </Text>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonTextPrimary}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Register;
