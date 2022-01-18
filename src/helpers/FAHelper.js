import useFoodAdvisor from "../contexts/useFoodAdvisor";

const { setSnackbarMessage, setSnackVisible } = useFoodAdvisor();

const validateUser = (user) => {
  // Check for user's credentials
  if (
    user.name === "" ||
    user.email === "" ||
    user.password === "" ||
    user.confirmPassword === ""
  ) {
    setSnackbarMessage("Please fill in the required fields.");
    setSnackVisible(true);
    return false;
  }
  // Email Validation
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
    setSnackbarMessage("Please enter a valid email address.");
    setSnackVisible(true);
    return false;
  }
  // Check for Password and Confirm Password
  if (user.password.length < 8 || user.confirmPassword < 8) {
    setSnackbarMessage(
      "Password and Confirm Password must be at least 8 characters."
    );
    setSnackVisible(true);
    return false;
  }
  // Match Password and Confirm Password
  if (user.password !== user.confirmPassword) {
    setSnackbarMessage("Password and Confirm Password must be the same.");
    setSnackVisible(true);
    return false;
  }
  return true;
};

export default validateUser;
