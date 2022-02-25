import createStripe from "stripe-client";

export const stripe = () =>
  createStripe(
    "pk_test_51KX89UJ5zyidjFOHqJ51qnfFUn5UkGZ5hV6d1INMDK0p1Gh2DzJ1GGP7kfLhloWXtHAQH534kG4VJqDUyJc2B0wU00OHiCKiQT"
  );

export const CardTokenRequest = (card) => stripe.createToken({ card });
