import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { CardTokenRequest } from "../services/checkout/checkout.service";

export const CreditCardInput = (name) => {
  const onChange = async (FormData) => {
    const { values, status } = FormData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const expiry = values.expiry.split("/");
    const card = {
      number: values.number,
      expMonth: expiry[0],
      expYear: expiry[1],
      cvc: values.cvc,
      name: name,
    };
    const info = await CardTokenRequest(card);
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
