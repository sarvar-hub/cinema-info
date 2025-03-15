import { useNavigation, useRoute } from "@react-navigation/native";
import { Cast } from "components";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { theme } from "theme";
import { NavigationProps } from "types/navigation";
import MovieScreenStyles from "./style";

const MovieScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation<NavigationProps>();
  const [isFavourite, setIsFavourite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const movieName = "Ant-Man and the Wasp: Quantumania";

  useEffect(() => {
    //call the movie from api
  }, [item]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={MovieScreenStyles.container}
    >
      <View style={MovieScreenStyles.wrapper}>
        <SafeAreaView
          pointerEvents="box-none"
          style={MovieScreenStyles.safeArea}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={MovieScreenStyles.back}
          >
            <ChevronLeftIcon size={28} strokeWidth={2.5} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavourite((prev) => !prev)}>
            <HeartIcon
              size={35}
              color={isFavourite ? theme.background : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require("../../assets/images/ant-man.jpg")}
            style={MovieScreenStyles.poster}
          />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23, 1)"]}
            style={MovieScreenStyles.gradient}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View>
      </View>

      {/* Movie details */}
      <View style={MovieScreenStyles.movieDetails}>
        <Text style={MovieScreenStyles.movieName}>{movieName}</Text>
        <Text style={MovieScreenStyles.release}>
          Released &bull; 2020 &bull; 170 min
        </Text>
        <View style={MovieScreenStyles.genres}>
          <Text style={MovieScreenStyles.genresText}>Action &bull;</Text>
          <Text style={MovieScreenStyles.genresText}>Thrill &bull;</Text>
          <Text style={MovieScreenStyles.genresText}>Comedy</Text>
        </View>
        <Text style={MovieScreenStyles.description}>
          Scott Lang and Hope Van Dyne are dragged into the Quantum Realm, along
          with Hope's parents and Scott's daughter Cassie. Together they must
          find a way to escape, but what secrets is Hope's mother hiding? And
          who is the mysterious Kang?
        </Text>
      </View>

      {/* Cast */}
      <Cast cast={cast} />
    </ScrollView>
  );
};

export default MovieScreen;
