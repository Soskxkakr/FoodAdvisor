import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
import FAButton from "../components/FAButton";
import FATextInput from "../components/FATextInput";
import useFoodAdvisor from "../contexts/useFoodAdvisor";
import useFirebase from "../contexts/useFirebase";
import styles from "../styles/styles";

const EditProfile = () => {
  const { pickImage, profilePicture } = useFoodAdvisor();
  const { userData, updateUserDetails } = useFirebase();

  const [name, setName] = useState(userData.name ? userData.name : "");
  const [location, setLocation] = useState(
    userData.location ? userData.location : ""
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={pickImage}>
          {userData.profile_picture || profilePicture ? (
            <Image
              style={{
                marginTop: 12,
                width: 150,
                height: 150,
                alignSelf: "center",
                borderRadius: 100,
              }}
              source={{
                // uri: profilePicture,
                uri: profilePicture ? profilePicture : userData.profile_picture,
              }}
              resizeMode="cover"
            />
          ) : (
            <Avatar.Icon
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
            />
          )}
        </TouchableOpacity>

        <Text style={[styles.primaryText, { textAlign: "center" }]}>
          {userData.user_email}
        </Text>
        <FATextInput placeholder="Name" value={name} onChangeText={setName} />
        <FATextInput
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />
      </ScrollView>
      <FAButton
        title="Update Profile"
        style={{ marginBottom: 12 }}
        onPress={() =>
          updateUserDetails(userData.id, profilePicture, name, location)
        }
      />
    </SafeAreaView>
  );
};

export default EditProfile;
