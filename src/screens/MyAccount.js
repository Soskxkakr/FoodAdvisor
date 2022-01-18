import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Touchable,
} from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import FAButton from "../components/FAButton";
import FAExternalLink from "../components/FAExternalLink";
import useFirebase from "../contexts/useFirebase";
import styles from "../styles/styles";

const MyAccount = ({ navigation }) => {
  const { logout } = useFirebase();
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
          <Text style={{ fontSize: 24, marginLeft: 12 }}>John Doe</Text>
        </View>
        <FAButton title="Edit Profile" />
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
            Kuala Lumpur, Malaysia
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
            Joined since Jan 2022
          </Text>
        </View>
        <FAExternalLink
          text="My Favorites"
          style={{ marginTop: 36 }}
          onPress={() => navigation.navigate("Favorites")}
        />
        <Text style={[styles.subTitle, { marginTop: 36 }]}>FoodAdvisor</Text>
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
