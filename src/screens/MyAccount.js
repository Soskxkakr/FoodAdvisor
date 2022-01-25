import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Touchable,
  Image,
} from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import FAButton from "../components/FAButton";
import FAExternalLink from "../components/FAExternalLink";
import useFirebase from "../contexts/useFirebase";
import useFoodAdvisor from "../contexts/useFoodAdvisor";
import styles from "../styles/styles";

const MyAccount = ({ navigation }) => {
  const { profilePicture } = useFoodAdvisor();
  const { userData, logout } = useFirebase();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>My Account</Text>
        <View
          style={{
            marginTop: 18,
            marginHorizontal: 12,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {userData.profile_picture || profilePicture ? (
            <Image
              style={{
                width: 54,
                height: 54,
                borderRadius: 100,
              }}
              source={{
                uri: userData.profile_picture
                  ? userData.profile_picture
                  : profilePicture,
                // uri: "https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0",
              }}
              resizeMode="cover"
            />
          ) : (
            <Avatar.Icon
              style={{
                backgroundColor: "#FFFFFF",
                borderWidth: 2,
                borderColor: "#FF7A00",
              }}
              size={54}
              icon="account"
              color="#FF7A00"
            />
          )}
          <Text style={{ fontSize: 24, marginLeft: 12 }}>{userData.name}</Text>
        </View>
        <FAButton
          title="Edit Profile"
          onPress={() => navigation.navigate("EditProfile")}
        />
        <View
          style={{
            marginTop: 18,
            marginHorizontal: 12,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon name="map-marker-alt" size={24} color="#FFA700" />
          <Text style={{ fontSize: 18, marginLeft: 12 }}>
            {userData.location
              ? userData.location
              : "Location has not been set yet."}
          </Text>
        </View>
        <View
          style={{
            marginTop: 18,
            marginHorizontal: 12,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon name="calendar" size={24} color="#FFA700" />
          <Text style={{ fontSize: 18, marginLeft: 12 }}>
            Joined since {userData.date_registered}
          </Text>
        </View>
        <FAExternalLink
          text="My Favorites"
          style={{ marginTop: 36 }}
          onPress={() => navigation.navigate("Favorites")}
        />
        <Text style={[styles.subTitle, { marginTop: 36 }]}>
          FoodAdvisor <Icon name="drumstick-bite" size={20} />
        </Text>
        <FAExternalLink text="Terms of Service" style={{ marginTop: 18 }} />
        <FAExternalLink text="Privacy Policy" style={{ marginTop: 18 }} />
      </ScrollView>
      <FAButton
        title="Sign Out"
        style={{ marginBottom: 12 }}
        onPress={logout}
      />
    </SafeAreaView>
  );
};

export default MyAccount;
