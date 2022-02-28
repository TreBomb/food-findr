import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";

import { SafeArea } from "../components/safe-area.component";
import { Text } from "../components/text.component";
import { CartIconContainer, AnimationWrapper } from "../styles/checkout.styles";

export const CheckoutErrorScreen = ({ route }) => {
  const { error } = route.params;
  console.log("error", error);

  const [lottie, setLottie] = useState("");

  useEffect(() => {
    fetch("https://assets3.lottiefiles.com/packages/lf20_qpwbiyxf.json")
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
        <Text variant="lg">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
