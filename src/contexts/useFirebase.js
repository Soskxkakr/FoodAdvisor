import React, { useState, useContext, createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import uuid from "react-native-uuid";
import { auth, db, storage } from "../helpers/Firebase";
import useFoodAdvisor from "./useFoodAdvisor";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { convertToMonth } from "../helpers/FAHelper";

const FirebaseContext = createContext({});

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const { setSnackbarMessage, setSnackVisible, pushNotification } =
    useFoodAdvisor();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchUserData(user.uid);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  const fetchUserData = async (userId) => {
    await getDoc(doc(db, "users", userId))
      .then((docSnap) => {
        let userObject = docSnap.data();
        userObject.id = userId;
        setUserData(userObject);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signInUser = async (email, password) => {
    if (email === "" || password === "") {
      setSnackbarMessage("Email and Password fields can't be empty.");
      setSnackVisible(true);
      return;
    }
    if (password.length < 6) {
      setSnackbarMessage("Password must be greater than 8 characters.");
      setSnackVisible(true);
      return;
    }
    await signInWithEmailAndPassword(auth, email, password)
      .then((creds) => {
        fetchUserData(creds.user.uid);
      })
      .catch((error) => {
        setSnackbarMessage("Invalid Email or Password. Please try again.");
        setSnackVisible(true);
        console.log(error);
      });
  };

  // New User Registration
  const registerNewUser = async (user) => {
    // Check for user's credentials
    if (
      user.name === "" ||
      user.email === "" ||
      user.password === "" ||
      user.confirmPassword === ""
    ) {
      setSnackbarMessage("Please fill in the required fields.");
      setSnackVisible(true);
      return;
    }
    // Email Validation
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
      setSnackbarMessage("Please enter a valid email address.");
      setSnackVisible(true);
      return;
    }
    // Check for Password and Confirm Password
    if (user.password.length < 8 || user.confirmPassword < 8) {
      setSnackbarMessage(
        "Password and Confirm Password must be at least 8 characters."
      );
      setSnackVisible(true);
      return;
    }
    // Match Password and Confirm Password
    if (user.password !== user.confirmPassword) {
      setSnackbarMessage("Password and Confirm Password must be the same.");
      setSnackVisible(true);
      return;
    }

    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredentials) => {
        setDoc(doc(db, "users", userCredentials.user.uid), {
          name: user.name,
          user_email: user.email,
          date_registered: `${convertToMonth(
            new Date().getMonth + 1
          )} ${new Date().getFullYear()}`,
        });
        setSnackbarMessage("Registration Success.");
        setSnackVisible(true);
      })
      .catch((error) => {
        setSnackbarMessage("Registration Failed.");
        setSnackVisible(true);
        console.log(error);
      });
  };

  const updateUserDetails = async (id, profilePicture, name, location) => {
    let imageUrl = "";
    if (profilePicture) {
      let randomId = uuid.v4();
      let fileExtension = profilePicture.split(".").pop();
      let fileName = `${randomId}.${fileExtension}`;
      let response = await fetch(profilePicture);
      let blob = await response.blob();
      const imageRef = ref(storage, `profile_picture/${fileName}`);

      await uploadBytes(imageRef, blob).then((snapshot) => {});
      await getDownloadURL(imageRef).then((url) => {
        imageUrl = url;
      });
    }

    await updateDoc(doc(db, "users", id), {
      profile_picture: imageUrl,
      name: name,
      location: location,
    })
      .then(() => {
        setSnackbarMessage("Profile Updated.");
        setSnackVisible(true);
      })
      .catch((error) => {
        setSnackbarMessage("An error occured while updating profile.");
        setSnackVisible(true);
        console.log(error);
      });
  };

  const resetPassword = async (email) => {
    if (email === "") {
      setSnackbarMessage("Email field can't be empty.");
      setSnackVisible(true);
      return;
    }
    await sendPasswordResetEmail(auth, email)
      .then(async () => {
        await pushNotification(
          "Reset Password 🔁",
          "Reset Password has been sent to your email.",
          1
        );
        setSnackbarMessage("Reset password has been sent to your email.");
        setSnackVisible(true);
      })
      .catch((error) => {
        setSnackbarMessage("An error has occured. Please try again.");
        setSnackVisible(true);
      });
  };

  const getFavorites = async () => {
    setFavorites([]);
    const querySnapshot = await getDocs(collection(db, "restaurants"));
    querySnapshot.forEach((restaurant) => {
      if (restaurant.data().liked_by.includes(user.uid)) {
        setFavorites((prevState) => [...prevState, restaurant.data()]);
      }
    });
  };

  const logout = async () => {
    await signOut(auth)
      .then((response) => {
        console.log("Logout");
      })
      .catch((error) => {
        setSnackbarMessage(
          "An error occured while logging out. Please try again."
        );
        setSnackVisible(true);
        console.log(error);
      });
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        userData,
        favorites,
        signInUser,
        registerNewUser,
        updateUserDetails,
        resetPassword,
        getFavorites,
        logout,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default useFirebase = () => {
  return useContext(FirebaseContext);
};
