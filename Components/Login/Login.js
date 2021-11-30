import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "../MainComponents/Design/GlobalStyles";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Sign In</Text>
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
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonTextPrimary}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={[styles.primaryText, styles.textRight]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} currentScreen="Login" />
    </View>
  );
};

export default Login;
