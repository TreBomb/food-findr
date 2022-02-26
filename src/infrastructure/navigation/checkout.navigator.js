import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const CheckoutStack = createStackNavigator();

import { CheckoutScreen } from "../../screens/checkout/checkout.screen";
import { CheckoutErrorScreen } from "../../screens/checkout/checkout-error.screen";
import { CheckoutSuccessScreen } from "../../screens/checkout/checkout-success.screen";

export const CheckoutNavigator = () => {
  return (
    <CheckoutStack.Navigator headerMode="none">
      <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
      <CheckoutStack.Screen
        name="Checkout Success"
        component={CheckoutSuccessScreen}
      />
      <CheckoutStack.Screen
        name="Checkout Error"
        component={CheckoutErrorScreen}
      />
    </CheckoutStack.Navigator>
  );
};
