import { Dimensions, Image, TouchableWithoutFeedback } from "react-native";

interface IMovieCardProps<T> {
  item: T;
  handleClick: (item: T) => void;
}

var { width, height } = Dimensions.get("window");

export default function MovieCard<T>({
  item,
  handleClick,
}: IMovieCardProps<T>) {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={require("../../assets/images/capitan-marvel.webp")}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 24,
        }}
      />
    </TouchableWithoutFeedback>
  );
}
