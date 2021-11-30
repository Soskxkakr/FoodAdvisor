import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Header from "../Header/Header";
import styles from "../MainComponents/Design/GlobalStyles";

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.primaryText}>
          Just let us know the email you use to sign in to FoodAdvisor and we’ll
          help you get your password back
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email Address"
          autoComplete="email"
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonTextPrimary}>
            Send Password Reset Email
          </Text>
        </TouchableOpacity>
        <Text style={[styles.primaryText, styles.textCenter]}>
          Take me back to{" "}
          <Text
            style={[styles.textUnderline, styles.textBold]}
            onPress={() => navigation.navigate("Login")}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ForgotPassword;
