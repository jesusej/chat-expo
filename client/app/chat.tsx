import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";

export default function Chat() {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1">
      <View
        className="flex-1 flex-col bg-blue-100"
        style={{ paddingBottom: insets.bottom }}
      >
        <MessageList />
        <ChatInput />
      </View>
    </View>
  );
}
