import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../styles/styles";

const FATextInput = (props) => {
  // Destructure the object passed from props
  const { placeholder, value, onChangeText, secured } = props;
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secured ? secured : false}
    />
  );
};

export default FATextInput;
