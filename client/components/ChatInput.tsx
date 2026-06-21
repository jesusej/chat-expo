import { View, TextInput, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function ChatInput() {
  return (
    <View className="flex-row justify-center items-center px-4">
      <Pressable
        onPressIn={() => console.log("Plus")}
        className="bg-white rounded-full p-2 mr-2 "
      >
        <Feather name="plus" size={24} color="black" />
      </Pressable>
      <View className="flex-row flex-1 bg-white rounded-full max-h-20">
        <TextInput className="text-2xl px-2 py-2 flex-1" multiline />
        <Pressable
          className="bg-green-500 px-2 m-2 rounded-full"
          onPressIn={() => console.log("Press")}
        >
          <Feather name="arrow-up" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
}
