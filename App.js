import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import CalculatorProvider from "./contexts/CalculatorContext";
import Main from "./components/Main";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CalculatorProvider>
        <StatusBar backgroundColor="#03803b" style="auto" />
        <Main />
      </CalculatorProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
