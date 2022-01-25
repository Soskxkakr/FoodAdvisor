import React, { createContext, useContext, useState } from "react";
import { StatusBar } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Notifications from "expo-notifications";
import FASnack from "../components/FASnack";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const FoodAdvisorContext = createContext({});

export const FoodAdvisorProvider = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackVisible, setSnackVisible] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    })
      .then((result) => {
        if (result.cancelled) {
          return;
        }
        console.log("SET!");
        setProfilePicture(result.uri);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const pushNotification = async (title, body, seconds) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
      },
      trigger: {
        seconds: seconds,
      },
    });
  };

  return (
    <FoodAdvisorContext.Provider
      value={{
        profilePicture,
        snackbarMessage,
        snackVisible,
        setSnackbarMessage,
        setSnackVisible,
        pickImage,
        pushNotification,
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
