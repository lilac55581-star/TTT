import { View, Text } from "react-native";

export default function SplashScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0F172A",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 42,
          fontWeight: "bold",
          color: "#FFFFFF",
          letterSpacing: 3,
        }}
      >
        SAMAQ
      </Text>

      <Text
        style={{
          color: "#94A3B8",
          marginTop: 12,
          fontSize: 16,
        }}
      >
        قريباً ستبدأ المغامرة...
      </Text>
    </View>
  );
}
