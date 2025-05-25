import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    if (username.trim() && email.trim() && password.trim()) {
      setMessage("✅ Kayıt başarılı! Giriş yapıldı.");
      setTimeout(() => {
        router.replace("/"); 
      }, 2000);
    } else {
      setMessage("❌ Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <View className="flex-1 bg-white px-6 pt-20">
      <Text className="text-3xl font-bold mb-2">Sign Up</Text>
      <Text className="text-gray-500 mb-6">
        Create an account so you can order your favorite products easily and quickly.
      </Text>

      <TextInput
        placeholder="Username"
        className="bg-gray-100 px-4 py-3 rounded-lg mb-4"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        className="bg-gray-100 px-4 py-3 rounded-lg mb-4"
        value={email}
        onChangeText={setEmail}
      />
      <View className="flex-row items-center bg-gray-100 rounded-lg mb-6 px-4">
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          className="flex-1 py-3"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      {/* 🔔 Mesaj kutusu */}
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
        className="bg-orange-400 py-3 rounded-lg mb-4"
        onPress={handleRegister}
      >
        <Text className="text-white font-semibold text-center">Register Now</Text>
      </TouchableOpacity>

      <Text className="text-center text-gray-400 text-sm mb-3">Or Continue With</Text>

      <View className="flex-row justify-center space-x-4 mb-6">
        <TouchableOpacity className="bg-red-500 px-6 py-3 rounded-lg">
          <Text className="text-white font-bold">G</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-600 px-6 py-3 rounded-lg">
          <Text className="text-white font-bold">f</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center text-sm text-gray-400">
        Already Have An Account?
        <Text
          onPress={() => router.push("/login")}
          className="text-orange-400 font-semibold"
        >
          {" "}
          Log In
        </Text>
      </Text>
    </View>
  );
}
