import { memo } from "react";
import { View, Text } from "react-native";

function Message({
  author = "Autor desconocido",
  value = "",
  me = false,
  type = "text",
}: MessageData) {
  return (
    <View className={` mb-2 mx-2`}>
      <Text className={`${me ? "text-right" : ""} font-extrabold text-lg`}>
        {me ? "me" : author}:
      </Text>
      <Text
        className={`${me ? "text-right pr-4" : "pl-4"} text-xl font-medium`}
      >
        {value}
      </Text>
    </View>
  );
}

export default memo(Message);
