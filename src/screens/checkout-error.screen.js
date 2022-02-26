import React from "react";

import { SafeArea } from "../components/safe-area.component";
import { Text } from "../components/text.component";
import { colors } from "../infrastructure/theme/colors";
import { CartIconContainer, CartIcon } from "../styles/checkout.styles";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params.error;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
