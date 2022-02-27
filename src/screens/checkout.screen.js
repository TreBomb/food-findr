import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SafeArea } from "../components/safe-area.component";
import { CreditCardInput } from "../components/credit-card.component";
import { CartContext } from "../services/cart/cart.context";
import { PayRequest } from "../services/checkout/checkout.service";

import { Text } from "../components/text.component";
import { Spacer } from "../components/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from "../styles/checkout.styles";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, cartRestaurant, clearCart, sum } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate("Checkout Error", {
        error: "Please fill in a valid credit card",
      });
      return;
    }
    PayRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        clearCart();
        navigation.navigate("Checkout Success");
      })
      .catch((err) => {
        setIsLoading(false);
        navigation.navigate("Checkout Error", {
          error: err,
        });
      });
  };

  if (!cart.length || !cartRestaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={cartRestaurant} />
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, index) => {
              return (
                <List.Item
                  key={`${item} ${index}`}
                  title={`${item} - ${price / 100}`}
                />
              );
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <NameInput
          activeUnderlineColor="tomato"
          label="Name"
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
        />
        <Spacer position="top" size="large">
          {name.length > 0 && (
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={() =>
                navigation.navigate("Checkout Error", {
                  error: "Something went wrong processing your credit card",
                })
              }
            />
          )}
        </Spacer>
        <Spacer position="top" size="xxl" />

        <PayButton
          disabled={isLoading}
          icon="cash-usd"
          mode="contained"
          onPress={onPay}
        >
          Pay
        </PayButton>
        <Spacer position="top" size="large">
          <ClearButton
            disabled={isLoading}
            icon="cart-off"
            mode="contained"
            onPress={clearCart}
          >
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
