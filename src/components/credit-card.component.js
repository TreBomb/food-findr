import React from "react";
import { CardField } from "@stripe/stripe-react-native";
import { cardTokenRequest } from "../services/checkout/checkout.service";

export const CreditCardInput = ({ name, onSuccess, onError }) => {
  const onChange = async (formData) => {
    const { complete, expiryMonth, expiryYear } = formData;
    const card = {
      number: "4242 4242 4242 4242",
      exp_month: expiryMonth,
      exp_year: expiryYear,
      cvc: "242",
      name: name,
    };

    if (complete) {
      try {
        const info = await cardTokenRequest(card);
        onSuccess(info);
      } catch (e) {
        onError();
      }
    }
  };

  return (
    <CardField
      postalCodeEnabled={false}
      placeholder={{
        number: "4242 4242 4242 4242",
      }}
      cardStyle={{
        backgroundColor: "#FFFFFF",
        textColor: "#000000",
      }}
      style={{
        width: "100%",
        height: 50,
        marginVertical: 30,
      }}
      onCardChange={(cardDetails) => {
        onChange(cardDetails);
      }}
    />
  );
};
