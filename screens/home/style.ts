import { StyleSheet } from "react-native";

const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#464646",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
  },
  logo: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HomeScreenStyles;
