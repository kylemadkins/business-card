import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Project } from "./components/Project";

const { width } = Dimensions.get("window");

export default function App() {
  const handleContactMe = () => {
    Linking.openURL("mailto:kyle.m.adkins@gmail.com");
  };

  const ICONS = [
    {
      name: "github",
    },
    { name: "linkedin" },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Image
              source={require("./assets/projection.jpg")}
              style={{ width: "100%", height: 200 }}
            />
            <Image
              source={require("./assets/profile.png")}
              style={{
                width: width / 2,
                height: width / 2,
                borderRadius: "100%",
                marginBottom: 12,
                marginTop: -75,
                borderWidth: 5,
                borderColor: "#fff",
              }}
            />
            <Text style={{ fontWeight: 700, fontSize: 30, marginBottom: 8 }}>
              Kyle Adkins
            </Text>
            <Text style={{ marginBottom: 12, fontSize: 16 }}>
              Senior Software Engineer
            </Text>
            <View style={{ flexDirection: "row", gap: 16, marginBottom: 16 }}>
              {ICONS.map((icon) => (
                <FontAwesome6 key={icon.name} name={icon.name} size={24} />
              ))}
            </View>
            <Pressable
              style={{
                backgroundColor: "#000",
                paddingVertical: 16,
                paddingHorizontal: 24,
                borderRadius: 100,
              }}
              onPress={handleContactMe}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>Contact Me</Text>
            </Pressable>
            <Text
              style={{
                textAlign: "center",
                padding: 24,
                fontSize: 16,
                lineHeight: 24,
              }}
            >
              Hello hello, I'm Kyle Adkins. I'm a senior software engineer and
              game developer. I currently work for the Applied Machine Learning
              Group at Paramount+.
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 700,
                alignSelf: "flex-start",
                paddingHorizontal: 16,
              }}
            >
              Projects
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ width }}
            >
              <Project
                image={require("./assets/squirtle.jpg")}
                title="3D Renderer"
                description="A 3D software renderer in C"
                url="https://github.com/kylemadkins/cgfx"
              />
              <Project
                image={require("./assets/asteroids.png")}
                title="Asteroids"
                description="A classic arcade game in Python"
                url="https://github.com/kylemadkins/asteroids"
              />
            </ScrollView>
            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
