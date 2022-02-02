import React, { useContext } from "react";
import styled from "styled-components";
import { FlatList, View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../components/safe-area.component";
import { Spacer } from "../components/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-top: ${(props) => props.theme.space[5]};
`;

const LoadingContainer = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
