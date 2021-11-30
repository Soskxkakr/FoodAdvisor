import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "../MainComponents/Design/GlobalStyles";
import loginStyles from "./Design/LoginStyles";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={loginStyles.inputContainer}>
        <Text style={loginStyles.loginHeaderText}>Sign In</Text>
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
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonTextPrimary}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={loginStyles.loginForgotPasswordText}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Login;
