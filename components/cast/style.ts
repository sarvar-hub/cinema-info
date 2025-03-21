import { StyleSheet } from "react-native";

export const CastStyles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  title: {
    color: "white",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  cast: {
    marginRight: 16,
    alignItems: "center",
  },
  characterName: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
  personName: {
    color: "#B6B6B6",
    fontSize: 12,
    marginTop: 4,
  },
  imageWrapper: {
    overflow: "hidden",
    borderRadius: "100%",
    borderWidth: 1,
    height: 80,
    width: 80,
    alignItems: "center",
    borderColor: "#909090",
  },
  image: {
    borderRadius: 16,
    height: 96,
    width: 80,
  },
});
