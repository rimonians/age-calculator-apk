import React, { createContext, useState, useEffect } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import dateExtractor from "../utils/dateExtractor";
import { Alert } from "react-native";

export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
  const [birthDate, setBirthDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);
  const [data, setData] = useState(null);

  const onChange = (event, selectedDate, target) => {
    target === "birthDate"
      ? setBirthDate(selectedDate)
      : setCurrentDate(selectedDate);
  };

  const showDatePicker = (target) => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange: (e, s) => onChange(e, s, target),
      mode: "date",
      is24Hour: true,
    });
  };

  const calculate = () => {
    if (birthDate && currentDate) {
      const ms = currentDate.getTime() - birthDate.getTime();
      setData(dateExtractor(ms));
    } else {
      Alert.alert("Warning", "You have to pass valid date as input", [
        { text: "Okey" },
      ]);
    }
  };

  const reload = () => {
    setBirthDate(null);
    setCurrentDate(null);
    setData(null);
  };

  return (
    <CalculatorContext.Provider
      value={{
        birthDate,
        currentDate,
        data,
        showDatePicker,
        calculate,
        reload,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
