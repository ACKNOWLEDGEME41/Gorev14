import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      setMessage("✅ Giriş yapıldı.");
      setTimeout(() => {
        router.replace("/"); 
      }, 2000);
    } else {
      setMessage("❌ Lütfen tüm alanları doldurunuz.");
    }
  };

  return (
    <View className="flex-1 bg-white px-6 pt-20">
      <Text className="text-2xl font-bold mb-1 text-black">Welcome Back!</Text>
      <Text className="text-sm text-gray-500 mb-6">Sign in to your account.</Text>

      <TextInput
        placeholder="Email"
        className="bg-gray-100 p-4 rounded-xl mb-4"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="bg-gray-100 p-4 rounded-xl mb-2"
        value={password}
        onChangeText={setPassword}
      />

      <Text className="text-right text-xs text-gray-400 mb-6">Forgot Password?</Text>

    
      {message !== "" && (
        <Text
          className={`text-center font-semibold mb-4 ${
            message.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </Text>
      )}

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-orange-400 py-4 rounded-xl mb-6"
      >
        <Text className="text-center text-white font-semibold">Login</Text>
      </TouchableOpacity>

      <Text className="text-center text-gray-400 text-sm mb-3">Or Continue With</Text>

      <View className="flex-row justify-center space-x-4 mb-6">
        <TouchableOpacity className="bg-red-500 px-6 py-3 rounded-xl">
          <Text className="text-white font-bold">G</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-600 px-6 py-3 rounded-xl">
          <Text className="text-white font-bold">f</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center text-sm text-gray-400">
        Not A Member?
        <Text
          onPress={() => router.push("/signup")}
          className="text-orange-400 font-semibold"
        >
          {" "}
          Join Now
        </Text>
      </Text>
    </View>
  );
}
