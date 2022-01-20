import React from "react";
import { View, Text, Image } from "react-native";
import { Rating } from "react-native-ratings";
import styles from "../styles/styles";

const FavoriteList = () => {
  return (
    <View style={styles.restaurantFavoriteListContainer}>
      <Image
        style={{ width: 75, height: 75 }}
        source={{
          uri: "https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0",
        }}
      />
      <View>
        <Text style={[styles.primaryText, { marginTop: 12 }]}>KyoChon</Text>
        <Rating
          style={{ marginHorizontal: 12, marginTop: 12 }}
          type="custom"
          defaultRating={3}
          imageSize={20}
          readonly
          ratingColor="#FF7A00"
        />
      </View>
    </View>
  );
};

export default FavoriteList;
