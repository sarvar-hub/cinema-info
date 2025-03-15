import { Dimensions, Platform, StyleSheet } from "react-native";
import { theme } from "theme";

let { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export const PersonScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353535",
  },
  safeArea: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderColor: "red",
    borderWidth: 2,
    marginVertical: ios ? 0 : 12,
  },
  back: {
    padding: 4,
    borderRadius: 12,
    backgroundColor: theme.background,
  },
});
