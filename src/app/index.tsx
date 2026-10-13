import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/theme";

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.banner} edges={["top"]}>
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
              style={({ pressed }) => [
                styles.tile,
                styles.tileCity,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.tileIcon}>🗺️</Text>
              <Text style={styles.tileTitle}>Моє місто</Text>
              <Text style={styles.tileHint}>Місця, які варто побачити</Text>
            </Pressable>
          </Link>

          <Link href="/about" asChild>
            <Pressable
              accessibilityRole="link"
              style={({ pressed }) => [
                styles.tile,
                styles.tileAbout,
                pressed && styles.pressed,
              ]}
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
  greeting: {
    color: colors.sand,
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 10,
  },
  tagline: {
    color: "#D9E4E2",
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
  tile: {
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
  },
  tileCity: {
    backgroundColor: colors.teal,
  },
  tileAbout: {
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
    color: "rgba(255,255,255,0.85)",
    fontSize: 13,
    lineHeight: 18,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
});
