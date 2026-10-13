import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/theme";

const interests = [
  { id: "1", icon: "💻", label: "Програмування" },
  { id: "2", icon: "📱", label: "Мобільні застосунки" },
  { id: "3", icon: "🎵", label: "Музика" },
  { id: "4", icon: "🚶", label: "Прогулянки та подорожі" },
];

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Yehor</Text>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>Y</Text>
        </View>
        <Text style={styles.role}>Майбутній React Native розробник</Text>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>👋 Коротко про мене</Text>
          <Text style={styles.body}>
            У вільний час я люблю цікавитися технологіями, слухати музику та
            гуляти. Мені подобається дізнаватися, як працюють цифрові продукти,
            і пробувати створювати власні. Я вирішив вивчати React Native, щоб
            навчитися робити мобільні застосунки для iOS та Android. Так я можу
            перетворювати власні ідеї на корисні інструменти.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>✨ Навички та інтереси</Text>
        <View style={styles.interests}>
          {interests.map((item) => (
            <View key={item.id} style={styles.interestCard}>
              <Text style={styles.interestIcon}>{item.icon}</Text>
              <Text style={styles.interestText}>{item.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  title: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 16,
    textAlign: "center",
  },
  avatar: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.accent,
    borderColor: colors.primary,
    borderRadius: 56,
    borderWidth: 4,
    height: 112,
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    width: 112,
  },
  avatarText: {
    color: colors.primary,
    fontSize: 38,
    fontWeight: "900",
  },
  role: {
    color: colors.secondary,
    fontSize: 16,
    marginBottom: 22,
    textAlign: "center",
  },
  sectionTitle: {
    color: colors.primary,
    fontSize: 21,
    fontWeight: "700",
    marginBottom: 14,
  },
  card: {
    backgroundColor: colors.surface,
    borderLeftColor: colors.primary,
    borderLeftWidth: 6,
    borderRadius: 12,
    marginBottom: 24,
    padding: 20,
    shadowColor: "#1B3A6B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
  },
  body: {
    color: colors.body,
    fontSize: 16,
    lineHeight: 25,
  },
  interests: {
    gap: 10,
  },
  interestCard: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderLeftColor: colors.accent,
    borderLeftWidth: 6,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#1B3A6B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  interestIcon: {
    fontSize: 28,
    marginRight: 14,
  },
  interestText: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: "600",
  },
});
