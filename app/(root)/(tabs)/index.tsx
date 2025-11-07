import { Link } from "expo-router";
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

      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/sign-in">Go to Sign in</Link>
       <Link href="/explore">Go to Explore</Link>
        <Link href="/profile">Go to Profile</Link>
        <Link href={`/properties/1`}>Go to Property 1</Link>
    </View>
  );
}
