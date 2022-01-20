import { Platform, StatusBar, StyleSheet } from "react-native";

/* THEME COLORS
    Primary = #FF7A00 (Orange)
    Secondary = #FFFFFF (White)
*/

const FoodTheme = {
  primaryColor: "#FF7A00",
  secondaryColor: "#FFFFFF",
  bgColor: "#FFFFFF",
  marginX: 12,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FoodTheme.bgColor,
  },
  restaurantFavoriteListContainer: {
    flexDirection: "row",
    marginTop: 12,
    marginHorizontal: FoodTheme.marginX,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10,
  },
  title: {
    fontSize: 48,
    color: FoodTheme.primaryColor,
    marginTop: 24,
    marginHorizontal: FoodTheme.marginX,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: FoodTheme.primaryColor,
    marginHorizontal: FoodTheme.marginX,
  },
  header: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: FoodTheme.primaryColor,
  },
  headerText: {
    fontSize: 58,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 44,
    backgroundColor: FoodTheme.secondaryColor,
    color: FoodTheme.primaryColor,
  },
  footerText: {
    fontSize: 18,
    marginTop: 12,
    color: "#FF7A00",
  },
  footerTextBold: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF7A00",
  },
  primaryText: {
    marginTop: 18,
    marginHorizontal: FoodTheme.marginX,
    fontSize: 18,
    color: FoodTheme.primaryColor,
  },
  textInput: {
    marginTop: 18,
    marginHorizontal: FoodTheme.marginX,
    padding: 16,
    borderWidth: 2,
    fontSize: 24,
    borderColor: "#FF7A00",
    borderRadius: 10,
  },
  buttonPrimary: {
    marginTop: 18,
    marginHorizontal: FoodTheme.marginX,
    padding: 16,
    borderRadius: 10,
    backgroundColor: FoodTheme.primaryColor,
  },
  buttonTextPrimary: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
  },
  externalLink: {
    marginHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: FoodTheme.primaryColor,
  },
});

export default styles;
