import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/theme";

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.banner} edges={["top"]}>
        <Image
          source={require("../../assets/images/react-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.greeting}>Привіт, я Yehor 👋</Text>
        <Text style={styles.tagline}>
          Це мій міні-путівник по Києву та коротка візитка
        </Text>
      </SafeAreaView>

      <View style={styles.body}>
        <Text style={styles.label}>Куди підемо?</Text>
        <View style={styles.tiles}>
          <Link href="/city" asChild>
            <Pressable
              accessibilityRole="link"
              style={styles.tileCity}
            >
              <Text style={styles.tileIcon}>🗺️</Text>
              <Text style={styles.tileTitle}>Моє місто</Text>
              <Text style={styles.tileHint}>Місця, які варто побачити</Text>
            </Pressable>
          </Link>

          <Link href="/about" asChild>
            <Pressable
              accessibilityRole="link"
              style={styles.tileAbout}
            >
              <Text style={styles.tileIcon}>🙋‍♂️</Text>
              <Text style={styles.tileTitle}>Про мене</Text>
              <Text style={styles.tileHint}>Хто я і що люблю</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}

const tileBase = {
  borderRadius: 24,
  flex: 1,
  minHeight: 170,
  justifyContent: "flex-end",
  padding: 18,
  shadowColor: colors.dark,
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.2,
  shadowRadius: 10,
  elevation: 5,
} as const;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  banner: {
    backgroundColor: colors.dark,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    paddingBottom: 40,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  logo: {
    height: 56,
    marginBottom: 16,
    width: 56,
  },
  greeting: {
    color: colors.sand,
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 10,
  },
  tagline: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 24,
  },
  body: {
    flex: 1,
    padding: 24,
  },
  label: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 14,
    textTransform: "uppercase",
  },
  tiles: {
    flexDirection: "row",
    gap: 14,
  },
  tileCity: {
    ...tileBase,
    backgroundColor: colors.teal,
  },
  tileAbout: {
    ...tileBase,
    backgroundColor: colors.coral,
  },
  tileIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  tileTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 4,
  },
  tileHint: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 19,
  },
});
