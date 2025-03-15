import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NavigationProps } from "types/navigation";
import { CastStyles } from "./style";

interface ICastProps {
  cast?: number[];
}

const Cast = ({ cast }: ICastProps) => {
  const navigation = useNavigation<NavigationProps>();

  const personName = "Keanu Reevs";
  const characterName = "John Wick";
  return (
    <View style={CastStyles.container}>
      <Text style={CastStyles.title}>Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast?.map((person, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Person", { id: person })}
            style={CastStyles.cast}
            key={index}
          >
            <View style={CastStyles.imageWrapper}>
              <Image
                style={CastStyles.image}
                source={require("../../assets/images/keanu-reeves.webp")}
              />
            </View>
            <Text style={CastStyles.characterName}>
              {characterName.length > 10
                ? characterName.slice(0, 10) + "..."
                : characterName}
            </Text>
            <Text style={CastStyles.personName}>
              {personName.length > 10
                ? personName.slice(0, 10) + "..."
                : personName}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Cast;
