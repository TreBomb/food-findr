import { mocks } from "./mock";

export const RestaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject(new Error("No mock data for this location"));
    }
    resolve(mock);
  });
};
