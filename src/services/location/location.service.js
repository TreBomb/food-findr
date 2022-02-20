import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://localhost:5001/foodfindr-ac4b8/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};

// "emulators": {
//   "ui": {
//     "enabled": true,
//     "port": 4001
//   },
//   "functions": {
//     "source": "functions",
//     "name": "functions",
//     "host": "localhost",
//     "port": 4002
//   },
//   "storage": {
//     "port": 4003
//   }
// }
