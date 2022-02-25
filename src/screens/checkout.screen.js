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
} from "../styles/checkout.styles";
import { payRequest } from "../../functions/pay";

export const CheckoutScreen = () => {
  const { cart, clearCart, restaurant, sum } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);

  const onPay = () => {
    if (!card || !card.id) {
      console.log("error");
    } else {
      payRequest(card.id, sum, name);
    }
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your Cart Is Empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="top" size="large">
          <Text>Your Order</Text>
        </Spacer>
        <Spacer position="left" size="medium">
          <List.Section>
            {cart.map(({ item, price }) => {
              return (
                <List.Item key={item} title={`${item} - ${price / 100}`} />
              );
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
        />
        {name.length > 0 && <CreditCardInput name={name} onSuccess={setCard} />}
        <Spacer position="top" size="xxl" />
        <PayButton icon="cash-usd" mode="contained" onPress={onPay}>
          Purchase Order
        </PayButton>
        <Spacer position="top" size="large">
          <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
