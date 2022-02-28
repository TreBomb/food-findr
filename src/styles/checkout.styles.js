import styled from "styled-components/native";
import {
  Avatar,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native-paper";

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || "tomato"};
`;

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
  color: "lightgreen",
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
`;

export const ClearButton = styled(Button).attrs({
  color: "tomato",
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: 128,
  animating: true,
  color: "tomato",
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;

export const AnimationWrapper = styled.View`
  width: 50%;
  height: 50%;
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
