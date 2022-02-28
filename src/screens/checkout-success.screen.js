import React from "react";
import LottieView from "lottie-react-native";

import { SafeArea } from "../components/safe-area.component";
import { Text } from "../components/text.component";
import { CartIconContainer, AnimationWrapper } from "../styles/checkout.styles";

export const CheckoutSuccessScreen = () => {
  return (
    <SafeArea>
      <CartIconContainer>
        <AnimationWrapper>
          <LottieView
            key="animation"
            autoPlay
            loop={false}
            resizeMode="contain"
            source={require("../../assets/success.json")}
          />
        </AnimationWrapper>
        <Text variant="label">Your order has been placed!</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
