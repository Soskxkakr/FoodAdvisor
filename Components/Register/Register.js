import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../MainComponents/Design/GlobalStyles";
import RegisterStyles from "./Design/RegisterStyles";

const Register = () => {
  return (
    <View style={styles.container}>
      <View stlye={RegisterStyles.inputContainer}>
        <Text style={RegisterStyles.registerHeaderText}>Sign Up</Text>
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
        <Text style={RegisterStyles.tncText}>
          By signing up, I accept and agree to the{" "}
          <Text style={RegisterStyles.underlineBold}>Terms of Service</Text> and{" "}
          <Text style={RegisterStyles.underlineBold}>Privacy Policy</Text>
        </Text>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonTextPrimary}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
