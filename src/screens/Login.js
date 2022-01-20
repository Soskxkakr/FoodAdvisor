import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import FAHeader from "../components/FAHeader";
import FAFooter from "../components/FAFooter";
import FATextInput from "../components/FATextInput";
import FAButton from "../components/FAButton";
import useFoodAdvisor from "../contexts/useFoodAdvisor";
import useFirebase from "../contexts/useFirebase";
import styles from "../styles/styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInUser } = useFirebase();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FAHeader />
        <Text style={styles.title}>Sign In</Text>
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
        <FAButton title="Sign In" onPress={() => signInUser(email, password)} />
        <TouchableOpacity
          style={{ alignItems: "flex-end" }}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.primaryText}>Forgot Password?</Text>
        </TouchableOpacity>
        <FAFooter navigation={navigation} currentScreen="Login" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
