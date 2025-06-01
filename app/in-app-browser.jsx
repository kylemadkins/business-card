import { Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default function InAppBrowser() {
  const { url } = useLocalSearchParams();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Screen options={{ title: "Web View" }} />
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  );
}
