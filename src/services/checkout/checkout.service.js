import createStripe from "stripe-client";
import { host } from "../../utils/env";
export const stripe = () =>
  createStripe(
    "pk_test_51KX89UJ5zyidjFOHqJ51qnfFUn5UkGZ5hV6d1INMDK0p1Gh2DzJ1GGP7kfLhloWXtHAQH534kG4VJqDUyJc2B0wU00OHiCKiQT"
  );

export const CardTokenRequest = (card) => stripe.createToken({ card });

export const PayRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({ token, amount, name }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("Something went wrong");
    } else {
      return res.json();
    }
  });
};
