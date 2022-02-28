import React, { useState, useContext } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { CartContext } from "../services/cart/cart.context";

import { SafeArea } from "../components/safe-area.component";
import { OrderButton, CartButton } from "../styles/restaurant-list.styles";
import { Spacer } from "../components/spacer.component";

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  const { addToCart, cart, cartRestaurant } = useContext(CartContext);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <List.Accordion
          theme={{ colors: { primary: "tomato", background: "#FFF" } }}
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item
            title="Eggs Benedict"
            right={(props) => (
              <CartButton
                onPress={() => {
                  addToCart({ item: "Eggs Benedict", price: 899 }, restaurant);
                }}
              >
                $8.99
              </CartButton>
            )}
          />
          <Divider />
          <List.Item
            title="Classic Breakfast"
            right={(props) => (
              <CartButton
                onPress={() => {
                  addToCart(
                    { item: "Classic Breakfast", price: 899 },
                    restaurant
                  );
                }}
              >
                $8.99
              </CartButton>
            )}
          />
          <Divider />
        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: "tomato", background: "#FFF" } }}
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item
            title="Burger w/ Fries"
            right={(props) => (
              <CartButton
                onPress={() => {
                  addToCart(
                    { item: "Burger w/ Fries", price: 1199 },
                    restaurant
                  );
                }}
              >
                $11.99
              </CartButton>
            )}
          />
          <Divider />
          <List.Item
            title="Steak Sandwich"
            right={(props) => (
              <CartButton
                onPress={() => {
                  addToCart(
                    { item: "Steak Sandwich", price: 1599 },
                    restaurant
                  );
                }}
              >
                $15.99
              </CartButton>
            )}
          />
          <Divider />
          <List.Item
            title="Mushroom Soup"
            right={(props) => (
              <CartButton
                onPress={() => {
                  addToCart({ item: "Mushroom Soup", price: 999 }, restaurant);
                }}
              >
                $9.99
              </CartButton>
            )}
          />
          <Divider />
        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: "tomato", background: "#FFF" } }}
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item
            title="Spaghetti Bolognese"
            right={(props) => (
              <CartButton
                onPress={() => {
                  addToCart(
                    { item: "Spaghetti Bolognese", price: 1199 },
                    restaurant
                  );
                }}
              >
                $11.99
              </CartButton>
            )}
          />
          <Divider />
          <List.Item
            title="Chicken Mushroom Rotini"
            right={(props) => (
              <CartButton
                onPress={() => {
                  addToCart(
                    {
                      item: "Chicken Mushroom Rotini",
                      price: 1299,
                    },
                    restaurant
                  );
                }}
              >
                $12.99
              </CartButton>
            )}
          />
          <Divider />
          <List.Item
            title="Steak Frites"
            right={(props) => (
              <CartButton
                onPress={() => {
                  addToCart({ item: "Steak Frites", price: 1599 }, restaurant);
                }}
              >
                $15.99
              </CartButton>
            )}
          />
          <Divider />
        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: "tomato", background: "#FFF" } }}
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item
            title="Coffee"
            right={(props) => (
              <CartButton
                onPress={() => {
                  addToCart({ item: "Coffee", price: 499 }, restaurant);
                }}
              >
                $3.99
              </CartButton>
            )}
          />
          <Divider />
          <List.Item
            title="Tea"
            right={(props) => (
              <CartButton
                onPress={() => {
                  addToCart({ item: "Tea", price: 499 }, restaurant);
                }}
              >
                $4.99
              </CartButton>
            )}
          />
          <Divider />
          <List.Item
            title="Modelo"
            right={(props) => (
              <CartButton
                onPress={() => {
                  addToCart({ item: "Modelo", price: 799 }, restaurant);
                }}
              >
                $7.99
              </CartButton>
            )}
          />
          <Divider />
          <List.Item
            title="Coke"
            right={(props) => (
              <CartButton
                onPress={() => {
                  addToCart({ item: "Coke", price: 399 }, restaurant);
                }}
              >
                $3.99
              </CartButton>
            )}
          />
          <Divider />
          <List.Item
            title="Fanta"
            right={(props) => (
              <CartButton
                onPress={() => {
                  addToCart({ item: "Fanta", price: 399 }, restaurant);
                }}
              >
                $3.99
              </CartButton>
            )}
          />
          <Divider />
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        {cart.length > 0 && cartRestaurant.name === restaurant.name && (
          <OrderButton
            onPress={() => {
              navigation.navigate("Checkout");
            }}
          >
            Continue To Checkout
          </OrderButton>
        )}
      </Spacer>
    </SafeArea>
  );
};
