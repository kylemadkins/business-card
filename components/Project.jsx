import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import * as WebBrowser from "expo-web-browser";

export function Project({ image, title, description, url }) {
  const handleOpenUrl = async () => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <Pressable onPress={handleOpenUrl}>
      <View style={styles.project}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  project: {
    padding: 16,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    marginTop: 12,
  },
  description: {
    marginTop: 8,
  },
});
