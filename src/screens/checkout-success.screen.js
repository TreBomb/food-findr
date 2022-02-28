import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";

import { SafeArea } from "../components/safe-area.component";
import { Text } from "../components/text.component";
import { CartIconContainer, AnimationWrapper } from "../styles/checkout.styles";

export const CheckoutSuccessScreen = () => {
  const [lottie, setLottie] = useState("");

  useEffect(() => {
    fetch("https://assets3.lottiefiles.com/packages/lf20_yvli2ph8.json")
      .then((resp) => resp.json())
      .then((data) => setLottie(data));
  }, []);

  return (
    <SafeArea>
      <CartIconContainer>
        <AnimationWrapper>
          <LottieView
            key="animation"
            autoPlay
            loop={false}
            resizeMode="contain"
            source={lottie}
          />
        </AnimationWrapper>
        <Text variant="label">Your order has been placed!</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
