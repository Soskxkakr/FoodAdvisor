import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import styles from "../styles/styles";

const Favorites = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>My Favorites</Text>
        <View style={styles.restaurantFavoriteListContainer}>
          <Image
            style={{ width: 75, height: 75 }}
            source={{
              uri: "https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0",
            }}
          />
          <Text style={[styles.primaryText, { marginTop: 12 }]}>KyoChon</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;
