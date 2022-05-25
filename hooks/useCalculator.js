import React, { useContext } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";

const useCalculator = () => {
  return useContext(CalculatorContext);
};

export default useCalculator;
