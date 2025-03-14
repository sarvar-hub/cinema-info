import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { NavigationProps } from "types/navigation";
import { MovieListStyles } from "./styles";

interface IMovieListProps {
  title: string;
  data: number[];
}

var { width, height } = Dimensions.get("window");

export default function MovieList({ title, data }: IMovieListProps) {
  const movieName = "Ant-Man and the Wasp: Quantumania";
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={MovieListStyles.container}>
      <View style={MovieListStyles.wrapper}>
        <Text style={MovieListStyles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={MovieListStyles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* movie row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => navigation.navigate("Movie", { item })}
          >
            <View style={MovieListStyles.movieCard}>
              <Image
                source={require("../../assets/images/ant-man.jpg")}
                style={{
                  borderRadius: 24,
                  width: width * 0.33,
                  height: height * 0.22,
                }}
              />
              <Text style={MovieListStyles.movieName}>
                {movieName.length > 14
                  ? movieName.slice(0, 14) + "..."
                  : movieName}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}
