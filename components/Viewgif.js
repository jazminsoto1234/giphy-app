import { Image, Text, View } from "react-native";
import FastImage from "react-native-fast-image";


function ViewGif({ gif }) {
  console.log("Hola")
  if (!gif) {
    console.error("GIF NULO");
    return <p>No data</p>;
  }
  
  console.log(gif.images.original.url);
  return (
    <View>
        <Text>{gif.title}</Text>
        

        <Image
            source={{ uri: gif.images.original.url }}
            resizeMode="contain"
        />
      
        <Text>Username: {gif.username}</Text>
    </View>
  );
}

export default ViewGif;