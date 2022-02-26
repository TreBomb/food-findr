import React from "react";

import { SafeArea } from "../components/safe-area.component";
import { Text } from "../components/text.component";
import { CartIconContainer, CartIcon } from "../styles/checkout.styles";

export const CheckoutSuccessScreen = () => {
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="check" />
        <Text variant="label">Your order has been placed!</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
