import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import FAButton from "../components/FAButton";
import FAHeader from "../components/FAHeader";
import FATextInput from "../components/FATextInput";
import useFirebase from "../contexts/useFirebase";
import styles from "../styles/styles";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useFirebase();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FAHeader />
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.primaryText}>
          Just let us know the email you use to sign in to FoodAdvisor and we’ll
          help you get your password back
        </Text>
        <FATextInput
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <FAButton
          title="Send Password Reset Email"
          onPress={() => resetPassword(email)}
        />
        <Text style={[styles.primaryText, { textAlign: "center" }]}>
          Take me back to{" "}
          <Text
            style={{ fontWeight: "bold", textDecorationLine: "underline" }}
            onPress={() => navigation.navigate("Login")}
          >
            Sign In
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
