import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const FAButton = (props) => {
  // Destructure the object passed from props
  const { title, style, onPress } = props;
  return (
    <TouchableOpacity style={[styles.buttonPrimary, style]} onPress={onPress}>
      <Text style={styles.buttonTextPrimary}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default FAButton;
