import { Text, View } from "react-native";
import "../../global.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Text className="text-3xl font-rubik font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

    </View>
  );
}
