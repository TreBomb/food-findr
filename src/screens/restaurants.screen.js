import React from "react";
import styled from "styled-components";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { SafeArea } from "../components/safe-area.component";
import { Spacer } from "../components/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 1 },
          { name: 1 },
          { name: 1 },
          { name: 1 },
          { name: 1 },
          { name: 1 },
          { name: 1 },
          { name: 1 },
          { name: 1 },
          { name: 1 },
        ]}
        keyExtractor={(item) => item.name}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
      />
    </SafeArea>
  );
};
