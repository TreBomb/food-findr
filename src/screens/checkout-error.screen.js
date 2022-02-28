import React from "react";
import LottieView from "lottie-react-native";

import { SafeArea } from "../components/safe-area.component";
import { Text } from "../components/text.component";
import { colors } from "../infrastructure/theme/colors";
import { CartIconContainer, AnimationWrapper } from "../styles/checkout.styles";

export const CheckoutErrorScreen = ({ route }) => {
  const { error } = route.params;
  console.log("error", error);

  return (
    <SafeArea>
      <CartIconContainer>
        <AnimationWrapper>
          <LottieView
            key="animation"
            autoPlay
            loop={false}
            resizeMode="contain"
            source={require("../../assets/fail.json")}
          />
        </AnimationWrapper>
        <Text variant="lg">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
