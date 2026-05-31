import { View, Text, TextInput } from "react-native";

export default function ChatInput() {
  return (
    <View className="flex-row justify-center items-center">
      <View className="bg-white rounded-full px-1 mx-2 ">
        <Text className="text-2xl">+</Text>
      </View>
      <View className="flex-grow bg-white rounded-full">
        <TextInput className="text-2xl px-2" multiline />
      </View>
    </View>
  );
}
