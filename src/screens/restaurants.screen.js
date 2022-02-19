import React, { useContext, useState } from "react";
import styled from "styled-components";
import { View, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { FadeInView } from "../animations/fade.animation";
import { SafeArea } from "../components/safe-area.component";
import { Spacer } from "../components/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../services/restaurants/restaurants.context";
import { FavoritesContext } from "../services/favorites/favorites.context";
import { Search } from "../components/restaurant-search.component";
import { FavoritesBar } from "../components/favorites-bar.component";
import { RestaurantList } from "../styles/restaurant-list.styles";

const Loading = styled(ActivityIndicator)`
  margin-top: ${(props) => props.theme.space[5]};
`;

const LoadingContainer = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={"tomato"} />
        </LoadingContainer>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Restaurant Detail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
