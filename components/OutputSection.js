import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";

const OutputSection = ({ data }) => {
  return (
    <ScrollView
      style={styles.outputSection}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>You passed away : </Text>
      <Text style={styles.para}>
        <Text style={styles.value}>{data.ms}</Text> milliseconds
      </Text>
      <Text style={styles.para}>
        or <Text style={styles.value}>{data.s}</Text> seconds
      </Text>
      <Text style={styles.para}>
        or <Text style={styles.value}>{data.m}</Text> minutes
      </Text>
      <Text style={styles.para}>
        or <Text style={styles.value}>{data.h}</Text> hours
      </Text>
      <Text style={styles.para}>
        or <Text style={styles.value}>{data.d}</Text> days
      </Text>
      <Text style={styles.para}>
        or <Text style={styles.value}>{data.w}</Text> weeks{" "}
        <Text style={styles.value}>{data.wEd}</Text> days
      </Text>
      <Text style={styles.para}>
        or <Text style={styles.value}>{data.mn}</Text> months{" "}
        <Text style={styles.value}>{data.mnEw}</Text> weeks{" "}
        <Text style={styles.value}>{data.mnEd}</Text> days
      </Text>
      <Text style={styles.para}>
        or <Text style={styles.value}>{data.y}</Text> years{" "}
        <Text style={styles.value}>{data.yEmn}</Text> months{" "}
        <Text style={styles.value}>{data.yEw}</Text> weeks{" "}
        <Text style={styles.value}>{data.yEd}</Text> days
      </Text>
    </ScrollView>
  );
};

export default OutputSection;

const styles = StyleSheet.create({
  outputSection: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#03803b",
  },
  para: {
    color: "#222",
    marginBottom: 5,
  },
  value: {
    color: "#03803b",
    fontWeight: "bold",
    marginLeft: 20,
  },
});
