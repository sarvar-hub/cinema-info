import { MovieList, TrendingMovies } from "components";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "theme";
import HomeScreenStyles from "./style";

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);

  return (
    <View style={HomeScreenStyles.container}>
      <SafeAreaView
        style={{
          marginBottom: 12,
        }}
      >
        <StatusBar barStyle="light-content" />
        <View style={HomeScreenStyles.header}>
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text style={HomeScreenStyles.logo}>
            <Text style={styles.text}>M</Text>
            ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending movies carousel */}
        <TrendingMovies data={trending} />

        {/* Upcoming movies row */}
        <MovieList title="Upcoming" data={upcoming} />
        {/* Top rated movies row */}
        <MovieList title="Top rated" data={topRated} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
