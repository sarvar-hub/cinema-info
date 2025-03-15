import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { HeartIcon } from "react-native-heroicons/outline";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { theme } from "theme";
import { NavigationProps } from "types/navigation";
import { PersonScreenStyles } from "./style";

export default function PersonScreen() {
  const navigation = useNavigation<NavigationProps>();
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <ScrollView
      style={PersonScreenStyles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView style={PersonScreenStyles.safeArea}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={PersonScreenStyles.back}
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
    </ScrollView>
  );
}
