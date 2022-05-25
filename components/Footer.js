import React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Linking from "expo-linking";

const Footer = () => {
  const openLink = (href) => {
    Linking.openURL(href);
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Made with ❤️ by -{" "}
        <Text
          style={styles.author}
          onPress={() => openLink("https://www.facebook.com/rimonians")}
        >
          Rimon Ahmed
        </Text>
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    backgroundColor: "#03803b",
    borderTopRightRadius: 30,
  },
  footerText: {
    color: "#a0debc",
  },
  author: {
    color: "#fff",
    fontWeight: "bold",
  },
});
