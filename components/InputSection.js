import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useCalculator from "../hooks/useCalculator";

const InputSection = () => {
  const { showDatePicker, birthDate, currentDate, calculate, reload } =
    useCalculator();

  return (
    <View style={styles.inputSection}>
      <TouchableOpacity style={styles.reload}>
        <AntDesign onPress={reload} style={styles.reloadIcon} name="reload1" />
      </TouchableOpacity>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Birth Date</Text>
        <TouchableOpacity
          style={styles.inputControll}
          onPress={() => showDatePicker("birthDate")}
        >
          <Text style={styles.inputText}>
            {birthDate ? birthDate.toLocaleDateString() : "(ex: 12/12/2000)"}
          </Text>
          <AntDesign style={styles.inputIcon} name="calendar" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Date at now</Text>
        <TouchableOpacity
          style={styles.inputControll}
          onPress={() => showDatePicker("currentDate")}
        >
          <Text style={styles.inputText}>
            {currentDate
              ? currentDate.toLocaleDateString()
              : "(ex: 12/12/2000)"}
          </Text>
          <AntDesign style={styles.inputIcon} name="calendar" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={calculate}>
        <Text style={styles.inputButton}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputSection;

const styles = StyleSheet.create({
  inputSection: {
    marginBottom: 20,
  },
  reload: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  reloadIcon: {
    fontSize: 25,
    backgroundColor: "#03803b",
    color: "#fff",
    height: 40,
    width: 40,
    lineHeight: 40,
    textAlign: "center",
    borderRadius: 10,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  inputLabel: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "#03803b",
  },
  inputControll: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    color: "gray",
  },
  inputIcon: {
    color: "gray",
    fontSize: 25,
  },
  inputButton: {
    backgroundColor: "#03803b",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
    fontWeight: "bold",
  },
});
