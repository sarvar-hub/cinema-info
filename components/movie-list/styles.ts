import { StyleSheet } from "react-native";
import { theme } from "theme";

export const MovieListStyles = StyleSheet.create({
  container: {
    marginBottom: 32,
    gap: 16,
  },
  wrapper: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  seeAll: {
    color: theme.text,
    fontSize: 18,
  },
  movieCard: {
    gap: 4,
    marginRight: 16,
  },
  movieName: {
    color: "#dedede",
    marginLeft: 4,
  },
});
