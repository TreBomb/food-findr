import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { CardTokenRequest } from "../services/checkout/checkout.service";

export const CreditCardInput = ({ name, onSuccess }) => {
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

    if (!isIncomplete) {
      const info = await CardTokenRequest(card);
      onSuccess(info);
    }
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
