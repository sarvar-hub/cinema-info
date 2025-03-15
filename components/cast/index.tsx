import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CastStyles } from "./style";

interface ICastProps {
  cast?: number[];
}

const Cast = ({ cast }: ICastProps) => {
  const personName = "Keanu Reevs";
  const characterName = "John Wick";
  return (
    <View style={CastStyles.container}>
      <Text style={CastStyles.title}>Hello</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast?.map((person, index) => (
          <TouchableOpacity style={CastStyles.cast} key={index}>
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
