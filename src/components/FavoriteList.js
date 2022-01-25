import React from "react";
import { View, Text, Image } from "react-native";
import { Rating } from "react-native-ratings";
import styles from "../styles/styles";

const FavoriteList = (props) => {
  // Destructure the object passed from props
  const { name, image, rating } = props;
  return (
    <View style={styles.restaurantFavoriteListContainer}>
      <Image
        style={{ width: 75, height: 75 }}
        source={{
          uri: image,
        }}
      />
      <View>
        <Text style={[styles.primaryText, { marginTop: 12 }]}>{name}</Text>
        <Rating
          style={{ marginHorizontal: 12, marginTop: 12 }}
          type="custom"
          startingValue={rating}
          imageSize={20}
          readonly
          ratingColor="#FF7A00"
        />
      </View>
    </View>
  );
};

export default FavoriteList;
