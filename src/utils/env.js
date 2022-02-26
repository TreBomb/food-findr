import { Platform } from "react-native";

const liveHost = "https://us-central1-foodfindr-ac4b8.cloudfunctions.net";
const localHost = "http://localhost:5001/foodfindr-ac4b8/us-central1";

const OVERRIDE = false;
export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
const baseCheck = !isDevelopment || isAndroid ? true : false;
export const host = baseCheck || OVERRIDE ? liveHost : localHost;
