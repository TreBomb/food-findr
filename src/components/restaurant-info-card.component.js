import React from "react";
import styled from "styled-components/native";
import {} from "react-native";
import { Card, Title } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantTitle = styled(Title)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
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
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      <RestaurantTitle>{name}</RestaurantTitle>
    </RestaurantCard>
  );
};
