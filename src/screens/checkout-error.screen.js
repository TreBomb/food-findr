import React from "react";

import { SafeArea } from "../components/safe-area.component";
import { Text } from "../components/text.component";
import { CartIconContainer, CartIcon } from "../styles/checkout.styles";

export const CheckoutErrorScreen = ({ route }) => {
  const { error } = route.params;
  console.log("error", error);

  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg="tomato" />
        <Text variant="lg">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
