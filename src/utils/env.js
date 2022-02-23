const liveHost = "https://us-central1-foodfindr-ac4b8.cloudfunctions.net";
const localHost = "http://localhost:5001/foodfindr-ac4b8/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = liveHost;
