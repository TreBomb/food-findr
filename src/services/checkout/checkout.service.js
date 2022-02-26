import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51KX89UJ5zyidjFOHqJ51qnfFUn5UkGZ5hV6d1INMDK0p1Gh2DzJ1GGP7kfLhloWXtHAQH534kG4VJqDUyJc2B0wU00OHiCKiQT"
);

export const cardTokenRequest = (card) =>
  stripe.createToken({ card }).then(console.log("success"));

export const PayRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
