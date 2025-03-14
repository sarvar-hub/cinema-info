import { useNavigation } from "@react-navigation/native";
import MovieCard from "components/movie-card";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { NavigationProps } from "types/navigation";
import { TrendingMoviesStyles } from "./style";

interface ITrendingMoviesProps {
  data: number[];
}

var { width } = Dimensions.get("window");

export default function TrendingMovies({ data }: ITrendingMoviesProps) {
  const navigation = useNavigation<NavigationProps>();

  const handleClick = (item: number) => {
    navigation.navigate("Movie", { item });
  };

  return (
    <View style={TrendingMoviesStyles.container}>
      <Text style={TrendingMoviesStyles.text}>Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={() => handleClick(item)} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
        vertical={false}
      />
    </View>
  );
}
