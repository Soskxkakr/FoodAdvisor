import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "../styles/styles";
import FATextInput from "../components/FATextInput";
import FAButton from "../components/FAButton";
import FAFooter from "../components/FAFooter";
import useFirebase from "../contexts/useFirebase";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { registerNewUser } = useFirebase();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Sign Up</Text>
        <FATextInput placeholder="Name" value={name} onChangeText={setName} />
        <FATextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <FATextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secured={true}
        />
        <FATextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secured={true}
        />
        <Text style={[styles.primaryText, { textAlign: "center" }]}>
          By signing up, I accept and agree to the{" "}
          <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
            Terms of Service
          </Text>{" "}
          and{" "}
          <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
            Privacy Policy
          </Text>
        </Text>
        <FAButton
          title="Sign Up"
          onPress={() => {
            const user = {
              name: name,
              email: email,
              password: password,
              confirmPassword: confirmPassword,
            };
            registerNewUser(user);
          }}
        />
        <FAFooter navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
