import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "../styles/styles";

const FAFooter = (props) => {
  const { navigation, currentScreen } = props;
  return (
    <View style={styles.footer}>
      {currentScreen == "Login" ? (
        <>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.footerTextBold}>Sign Up</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.footerTextBold}>Sign In</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default FAFooter;
