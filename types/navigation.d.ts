import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Movie: { item: number };
};

export type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Movie"
>;
