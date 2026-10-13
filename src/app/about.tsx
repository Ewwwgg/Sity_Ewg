import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/theme";

const interests = [
  { id: "1", icon: "💻", label: "Програмування", level: 0.6 },
  { id: "2", icon: "📱", label: "Мобільні застосунки", level: 0.4 },
  { id: "3", icon: "🎵", label: "Музика", level: 0.85 },
  { id: "4", icon: "🚶", label: "Прогулянки", level: 0.9 },
];

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.cover} />
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>Y</Text>
        </View>
        <View style={styles.identity}>
          <Text style={styles.name}>Yehor</Text>
          <Text style={styles.role}>Початківець у React Native</Text>
        </View>

        <View style={styles.quote}>
          <Text style={styles.quoteMark}>“</Text>
          <Text style={styles.bio}>
            У вільний час я люблю цікавитися технологіями, слухати музику та
            гуляти. Мені подобається дізнаватися, як працюють цифрові продукти,
            і пробувати створювати власні. Я вирішив вивчати React Native, щоб
            навчитися робити мобільні застосунки для iOS та Android. Так я можу
            перетворювати власні ідеї на корисні інструменти.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Навички та інтереси</Text>
        <View style={styles.grid}>
          {interests.map((item) => (
            <View key={item.id} style={styles.chip}>
              <Text style={styles.chipIcon}>{item.icon}</Text>
              <Text style={styles.chipLabel}>{item.label}</Text>
              <View style={styles.bar}>
                <View
                  style={[styles.barFill, { width: `${item.level * 100}%` }]}
                />
              </View>
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
    paddingBottom: 32,
  },
  cover: {
    backgroundColor: colors.teal,
    height: 120,
  },
  avatar: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.coral,
    borderColor: colors.background,
    borderRadius: 60,
    borderWidth: 6,
    height: 120,
    justifyContent: "center",
    marginTop: -60,
    width: 120,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 48,
    fontWeight: "900",
  },
  identity: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 12,
  },
  name: {
    color: colors.dark,
    fontSize: 30,
    fontWeight: "900",
  },
  role: {
    color: colors.muted,
    fontSize: 15,
    marginTop: 2,
  },
  quote: {
    backgroundColor: colors.dark,
    borderRadius: 22,
    marginHorizontal: 20,
    padding: 22,
    paddingTop: 10,
  },
  quoteMark: {
    color: colors.sand,
    fontSize: 56,
    fontWeight: "900",
    lineHeight: 60,
  },
  bio: {
    color: "#FFFFFF",
    fontSize: 15,
    lineHeight: 24,
  },
  sectionTitle: {
    color: colors.dark,
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 12,
    marginHorizontal: 20,
    marginTop: 28,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingHorizontal: 20,
  },
  chip: {
    backgroundColor: colors.surface,
    borderColor: colors.sand,
    borderRadius: 18,
    borderWidth: 2,
    flexGrow: 1,
    flexBasis: "45%",
    padding: 14,
  },
  chipIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  chipLabel: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 10,
  },
  bar: {
    backgroundColor: colors.background,
    borderRadius: 4,
    height: 6,
    overflow: "hidden",
  },
  barFill: {
    backgroundColor: colors.coral,
    borderRadius: 4,
    height: 6,
  },
});
