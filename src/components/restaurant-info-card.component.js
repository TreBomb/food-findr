import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title } from "react-native-paper";

const RestaurantCard = styled(Card)`
  padding: 20px;
  background-color: #fff;
`;

const RestaurantCover = styled(Card.Cover)`
  padding: 16px;
  background-color: #fff;
`;

const RestaurantTitle = styled(Title)`
  padding-left: 16px;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "The Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "123 Street Name",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover source={{ uri: photos[0] }} />
      <RestaurantTitle>{name}</RestaurantTitle>
    </RestaurantCard>
  );
};
