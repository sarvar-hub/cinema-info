import { Image, TouchableWithoutFeedback } from "react-native";
import { MovieCardStyles } from "./style";

interface IMovieCardProps<T> {
  item: T;
  handleClick: (item: T) => void;
}

export default function MovieCard<T>({
  item,
  handleClick,
}: IMovieCardProps<T>) {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={require("../../assets/images/capitan-marvel.webp")}
        style={MovieCardStyles.image}
      />
    </TouchableWithoutFeedback>
  );
}
