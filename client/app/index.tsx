import { TextInput, View, Text } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="m-10">
        <Text className="text-4xl pb-2">Write your chat pin</Text>
        <View className="bg-white rounded-full">
          <TextInput
            className="px-2 text-black text-center text-4xl w-inherit"
            keyboardType="number-pad"
            inputMode="numeric"
            placeholder="XXXX"
            maxLength={4}
          />
        </View>
      </View>
      <Link
        href="/chat"
        className="text-3xl bg-blue-500 p-2 rounded-xl text-white"
      >
        Go!
      </Link>
    </View>
  );
}
