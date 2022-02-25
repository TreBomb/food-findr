import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SafeArea } from "../components/safe-area.component";
import { CreditCardInput } from "../components/credit-card.component";
import { CartContext } from "../services/cart/cart.context";

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

export const CheckoutScreen = () => {
  const { cart, clearCart, restaurant, sum } = useContext(CartContext);
  const [name, setName] = useState("");

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
          <Text>{JSON.stringify(cart)}</Text>
        </Spacer>
        <List.Section>
          {cart.map(({ item, price }) => {
            return <List.Item title={`${item} - ${price / 100}`} />;
          })}
        </List.Section>
        <Text>Total: {sum / 100}</Text>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
        />
        {name.length > 0 && <CreditCardInput name={name} />}
      </ScrollView>
      <Spacer position="top" size="xxl" />
      <PayButton icon="cash-usd" mode="contained" onPress={() => {}}>
        Purchase Order
      </PayButton>
      <Spacer position="top" size="large">
        <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
          Clear Cart
        </ClearButton>
      </Spacer>
    </SafeArea>
  );
};
