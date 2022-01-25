import React, { useEffect } from "react";
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
import useFirebase from "../contexts/useFirebase";
import styles from "../styles/styles";

const Favorites = () => {
  const { favorites, getFavorites } = useFirebase();

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ overflow: "hidden", paddingBottom: 5 }}>
        <Text style={styles.title}>My Favorites</Text>
        {favorites
          ? favorites.map((restaurant, i) => {
              return (
                <TouchableOpacity key={i}>
                  <FavoriteList
                    name={restaurant.restaurant_name}
                    image={restaurant.restaurant_image}
                    rating={restaurant.rating}
                  />
                </TouchableOpacity>
              );
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;
