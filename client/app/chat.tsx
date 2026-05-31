import MessageList from "@/components/MessageList";
import { TextInput, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Chat() {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1">
      <View
        className="flex-1 flex-col bg-blue-100"
        style={{ paddingBottom: insets.bottom }}
      >
        <MessageList />
        <View className="flex-row justify-center items-center">
          <View className="bg-white rounded-full px-1 mx-2 ">
            <Text className="text-2xl">+</Text>
          </View>
          <View className="flex-grow bg-white rounded-full">
            <TextInput className="text-2xl px-2" multiline />
          </View>
        </View>
      </View>
    </View>
  );
}
