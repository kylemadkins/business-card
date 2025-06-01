import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Linking,
} from "react-native";

export function Project({ image, title, description, url }) {
  const handlePressProject = () => {
    Linking.openURL(url);
  };

  return (
    <Pressable onPress={handlePressProject}>
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
