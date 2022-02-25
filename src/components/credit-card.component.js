import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51KX89UJ5zyidjFOHqJ51qnfFUn5UkGZ5hV6d1INMDK0p1Gh2DzJ1GGP7kfLhloWXtHAQH534kG4VJqDUyJc2B0wU00OHiCKiQT"
);

export const CreditCardInput = () => {
  const onChange = async (FormData) => {
    const { values, status } = FormData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const card = {};
    const info = await stripe.createToken({ card });
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
