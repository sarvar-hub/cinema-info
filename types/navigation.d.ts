import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Movie: { item: number };
  Person: { id: number };
};

export type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Movie" | "Person"
>;
