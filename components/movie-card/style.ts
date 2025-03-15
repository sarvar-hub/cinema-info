import { Dimensions, StyleSheet } from "react-native";

var { width, height } = Dimensions.get("window");

export const MovieCardStyles = StyleSheet.create({
  image: {
    width: width * 0.6,
    height: height * 0.4,
    borderRadius: 24,
  },
});
