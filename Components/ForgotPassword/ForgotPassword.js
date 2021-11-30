import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Header from "../Header/Header";
import loginStyles from "../Login/Design/LoginStyles";
import styles from "../MainComponents/Design/GlobalStyles";
import RegisterStyles from "../Register/Design/RegisterStyles";

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={loginStyles.inputContainer}>
        <Text style={loginStyles.loginHeaderText}>Forgot Password</Text>
        <Text style={loginStyles.forgotPasswordText}>
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
        <Text style={[loginStyles.forgotPasswordText, { textAlign: "center" }]}>
          Take me back to{" "}
          <Text
            style={RegisterStyles.underlineBold}
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
