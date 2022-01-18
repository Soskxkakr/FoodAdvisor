import React, { createContext, useContext, useState } from "react";
import { StatusBar } from "react-native";
import FASnack from "../components/FASnack";

const FoodAdvisorContext = createContext({});

export const FoodAdvisorProvider = ({ children }) => {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackVisible, setSnackVisible] = useState(false);
  return (
    <FoodAdvisorContext.Provider
      value={{
        snackbarMessage,
        snackVisible,
        setSnackbarMessage,
        setSnackVisible,
      }}
    >
      <StatusBar backgroundColor="#FF7A00" />
      {children}
      <FASnack
        snackbarMessage={snackbarMessage}
        snackVisible={snackVisible}
        setSnackVisible={setSnackVisible}
      />
    </FoodAdvisorContext.Provider>
  );
};

export default useFoodAdvisor = () => {
  return useContext(FoodAdvisorContext);
};
