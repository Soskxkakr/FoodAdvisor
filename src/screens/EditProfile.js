import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { Avatar } from "react-native-paper";
import FAButton from "../components/FAButton";
import FATextInput from "../components/FATextInput";
import styles from "../styles/styles";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={{
            marginTop: 12,
            width: 150,
            height: 150,
            alignSelf: "center",
            borderRadius: 100,
          }}
          source={{
            uri: "https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0",
          }}
          resizeMode="cover"
        />
        <Text style={[styles.primaryText, { textAlign: "center" }]}>
          johndoe@mail.com
        </Text>
        {/* <Avatar.Icon
          style={{
            backgroundColor: "#FFFFFF",
            borderWidth: 2,
            borderColor: "#FF7A00",
            alignSelf: "center",
            marginTop: 12,
          }}
          size={150}
          icon="account"
          color="#FF7A00"
        /> */}
        <FATextInput placeholder="Name" value={name} onChangeText={setName} />
        <FATextInput
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />
      </ScrollView>
      <FAButton title="Update Profile" style={{ marginBottom: 12 }} />
    </SafeAreaView>
  );
};

export default EditProfile;
