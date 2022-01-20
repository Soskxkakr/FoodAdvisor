import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AirbnbRating, Rating } from "react-native-ratings";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteList from "../components/FavoriteList";
import styles from "../styles/styles";

const Favorites = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ overflow: "hidden", paddingBottom: 5 }}>
        <Text style={styles.title}>My Favorites</Text>
        <TouchableOpacity>
          <FavoriteList />
        </TouchableOpacity>
        <TouchableOpacity>
          <FavoriteList />
        </TouchableOpacity>
        <TouchableOpacity>
          <FavoriteList />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;
