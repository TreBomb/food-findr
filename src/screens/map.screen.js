import React, { useEffect, useState, useContext } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { ActivityIndicator } from "react-native-paper";

import { LocationContext } from "../services/location/location.context";
import { RestaurantsContext } from "../services/restaurants/restaurants.context";

import { Search } from "../components/map-search.component";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
  flex: 1;
`;

const Loading = styled(ActivityIndicator)`
  margin-top: ${(props) => props.theme.space[5]};
  justify-content: center;
  align-self: center;
  flex: 1;
`;

const LoadingContainer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
`;

const RestaurantMap = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { isLoading, restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={"tomato"} />
        </LoadingContainer>
      )}
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("Restaurant Detail", {
                    restaurant: restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  if (!location) {
    return (
      <Map
        region={{
          latitude: 0,
          longitude: 0,
        }}
      />
    );
  }
  return <RestaurantMap navigation={navigation} />;
};
