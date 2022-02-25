import React, { useContext } from "react";

import { SafeArea } from "../components/safe-area.component";
import { CreditCardInput } from "../components/credit-card.component";
import { CartContext } from "../services/cart/cart.context";

export const CheckoutScreen = () => {
  const cart = useContext(CartContext);

  return (
    <SafeArea>
      <CreditCardInput />
    </SafeArea>
  );
};
