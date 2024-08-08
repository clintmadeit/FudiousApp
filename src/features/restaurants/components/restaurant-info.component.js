import { View, Text } from "react-native";
import React from "react";

export const RestaurantInfo = ({ restaurant }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/1c/6b/8f/caption.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
