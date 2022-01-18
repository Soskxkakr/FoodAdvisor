import React from "react";
import { Snackbar } from "react-native-paper";

const FASnack = ({ snackbarMessage, snackVisible, setSnackVisible }) => {
  return (
    <Snackbar
      style={{ backgroundColor: "#FF7A00" }}
      visible={snackVisible}
      onDismiss={() => setSnackVisible(false)}
      action={{
        label: "OK",
        color: "#FFFFFF",
        onPress: () => setSnackVisible(false),
      }}
    >
      {snackbarMessage}
    </Snackbar>
  );
};

export default FASnack;
