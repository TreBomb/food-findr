import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "./spacer.component";
import { CompactRestaurantInfo } from "./compact-restaurant-info.component";
import { Text } from "./text.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favorites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("Restaurant Detail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
