import { Dimensions, Platform, StyleSheet } from "react-native";
import { theme } from "theme";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

const MovieScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
  },
  wrapper: {
    width: "100%",
  },
  safeArea: {
    position: "absolute",
    zIndex: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    left: 16,
    right: 16,
    marginTop: ios ? 0 : 12,
  },
  back: {
    padding: 4,
    borderRadius: 12,
    backgroundColor: theme.background,
  },
  poster: {
    width: width,
    height: height * 0.55,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: width,
    height: height * 0.4,
  },
  movieDetails: {
    marginTop: -(height * 0.09),
    gap: 12,
  },
  movieName: {
    paddingHorizontal: 10,
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 0.8,
  },
  release: {
    color: "#B6B6B6",
    fontWeight: "semibold",
    fontSize: 16,
    textAlign: "center",
  },
  genres: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 16,
    gap: 2,
  },
  genresText: {
    color: "#B6B6B6",
    fontWeight: "semibold",
    fontSize: 16,
    alignItems: "center",
  },
  description: {
    color: "#B6B6B6",
    marginHorizontal: 16,
    letterSpacing: 0.4,
  },
});

export default MovieScreenStyles;
