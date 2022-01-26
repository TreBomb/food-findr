import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "#00ff00",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "#0000ff",
  },
})
