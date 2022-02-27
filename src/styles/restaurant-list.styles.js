import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Button } from "react-native-paper";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const OrderButton = styled(Button).attrs({
  mode: "contained",
  icon: "cash-usd",
})`
  background-color: tomato;
  padding: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[2]};
  width: 80%;
  align-self: center;
`;

export const CartButton = styled(Button).attrs({
  mode: "contained",
})`
  background-color: tomato;
  padding: 0;
  width: 25%;
  align-self: center;
`;
