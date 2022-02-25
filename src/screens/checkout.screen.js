import React from "react";

import { SafeArea } from "../components/safe-area.component";
import { CreditCardInput } from "../components/credit-card.component";

export const CheckoutScreen = () => {
  return (
    <SafeArea>
      <CreditCardInput />
    </SafeArea>
  );
};
