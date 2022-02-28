import React from "react";
import LottieView from "lottie-react-native";

import { SafeArea } from "../components/safe-area.component";
import { Text } from "../components/text.component";
import { colors } from "../infrastructure/theme/colors";
import {
  CartIconContainer,
  CartIcon,
  AnimationWrapper,
} from "../styles/checkout.styles";

export const CheckoutErrorScreen = ({ route }) => {
  const { error } = route.params;
  console.log("error", error);

  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <AnimationWrapper>
          <LottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../../assets/fail.json")}
          />
          ;
        </AnimationWrapper>
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
