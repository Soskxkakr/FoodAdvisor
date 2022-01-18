import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import FAButton from "../components/FAButton";
import FAHeader from "../components/FAHeader";
import FATextInput from "../components/FATextInput";
import styles from "../styles/styles";

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FAHeader />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.primaryText}>
          Just let us know the email you use to sign in to FoodAdvisor and we’ll
          help you get your password back
        </Text>
        <FATextInput placeholder="Email Address" />
        <FAButton title="Send Password Reset Email" />
        <Text style={[styles.primaryText, { textAlign: "center" }]}>
          Take me back to{" "}
          <Text
            style={{ fontWeight: "bold", textDecorationLine: "underline" }}
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
