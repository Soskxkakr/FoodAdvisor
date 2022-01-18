import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "../styles/styles";

const FAExternalLink = (props) => {
  // Destructure the object passed from props
  const { text, style, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.externalLink, style]}>
        <Text style={{ fontSize: 18 }}>{text}</Text>
        <Icon
          style={{ position: "absolute", right: 12, bottom: 12 }}
          name="external-link-alt"
          size={24}
          color="#FFA700"
        />
      </View>
    </TouchableOpacity>
  );
};

export default FAExternalLink;
