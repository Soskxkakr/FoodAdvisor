import { StyleSheet } from "react-native";

/* THEME COLORS
    Primary = #FF7A00 (Orange)
    Secondary = #FFFFFF (White)
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF7A00",
  },
  headerText: {
    fontSize: 58,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    color: "#FF7A00",
  },
  footerText: {
    fontSize: 24,
    color: "#FF7A00",
  },
  footerTextBold: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF7A00",
  },
  textInput: {
    marginTop: 18,
    marginHorizontal: 24,
    padding: 16,
    borderWidth: 2,
    fontSize: 24,
    borderColor: "#FF7A00",
    borderRadius: 10,
  },
  buttonPrimary: {
    marginTop: 18,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#FF7A00",
  },
  buttonTextPrimary: {
    textAlign: "center",
    fontSize: 24,
    color: "#FFFFFF",
  },
});

export default styles;
