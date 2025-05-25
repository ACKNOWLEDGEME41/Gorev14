import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

export default function Welcome() {
  return (
    <View className="flex-1 bg-black px-6 justify-center items-center">
    
      <Image
        source={require("../assets/jacket.png")}
        className="w-full h-[300px] mb-6"
        resizeMode="cover"
      />

   
      <View className="w-full items-center">
        <Text className="text-white text-2xl font-bold mb-2 text-center">
          Start Your Shopping Journey Now
        </Text>
        <Text className="text-white text-sm text-center mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/login")}
          className="bg-white py-3 w-full rounded-lg mb-3"
        >
         <Text className="text-center text-yellow-400 font-semibold">Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/signup")}
          className="bg-orange-400 py-3 w-full rounded-lg"
        >
          <Text className="text-center text-white font-semibold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
