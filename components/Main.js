import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";
import Footer from "./Footer";
import useCalculator from "../hooks/useCalculator";

const Main = () => {
  const { data } = useCalculator();

  return (
    <>
      <Header />
      <View style={styles.wrapper}>
        <InputSection />
        {data && <OutputSection data={data} />}
      </View>
      <Footer />
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
});
