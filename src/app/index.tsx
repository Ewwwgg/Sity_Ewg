import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/theme";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.emoji}>🏙️</Text>
          <Text style={styles.title}>Вітаю!</Text>
          <Text style={styles.subtitle}>
            Невеликий застосунок про Київ та мої інтереси
          </Text>
        </View>

        <View style={styles.links}>
          <Link href="/city" asChild>
            <Pressable
              accessibilityRole="link"
              style={({ pressed }) => [
                styles.linkButton,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.linkIcon}>📍</Text>
              <View style={styles.linkCopy}>
                <Text style={styles.linkTitle}>Моє місто</Text>
                <Text style={styles.linkText}>Визначні місця Києва</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </Pressable>
          </Link>
          <Link href="/about" asChild>
            <Pressable
              accessibilityRole="link"
              style={({ pressed }) => [
                styles.linkButton,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.linkIcon}>👤</Text>
              <View style={styles.linkCopy}>
                <Text style={styles.linkTitle}>Про мене</Text>
                <Text style={styles.linkText}>Знайомство та мої інтереси</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  hero: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    color: colors.primary,
    fontSize: 38,
    fontWeight: "800",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: colors.secondary,
    fontSize: 17,
    lineHeight: 25,
    maxWidth: 360,
    textAlign: "center",
  },
  links: {
    alignSelf: "stretch",
    gap: 12,
    maxWidth: 320,
    paddingBottom: 20,
    width: "100%",
  },
  linkButton: {
    alignItems: "center",
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    padding: 16,
  },
  linkIcon: {
    fontSize: 30,
    marginRight: 14,
  },
  linkCopy: {
    flex: 1,
  },
  linkTitle: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  linkText: {
    color: colors.secondary,
    fontSize: 14,
  },
  arrow: {
    color: colors.accent,
    fontSize: 32,
  },
  pressed: {
    opacity: 0.75,
  },
});
