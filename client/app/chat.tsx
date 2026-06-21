import { KeyboardAvoidingView, Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";
import { useHeaderHeight } from "@react-navigation/elements";

export default function Chat() {
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  return (
    <View
      className="flex-1 bg-blue-100"
      style={{ paddingBottom: insets.bottom }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
        keyboardVerticalOffset={headerHeight}
      >
        <MessageList />
        <ChatInput />
      </KeyboardAvoidingView>
    </View>
  );
}
