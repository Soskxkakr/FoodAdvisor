import React, { useState, useContext, createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../helpers/Firebase";
import useFoodAdvisor from "./useFoodAdvisor";

const FirebaseContext = createContext({});

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { setSnackbarMessage, setSnackVisible } = useFoodAdvisor();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [user]);

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
        console.log("Login");
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
      value={{ user, signInUser, registerNewUser, logout }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default useFirebase = () => {
  return useContext(FirebaseContext);
};
