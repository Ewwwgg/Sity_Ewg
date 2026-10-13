import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/theme";

const places = [
  {
    id: "1",
    icon: "⛪",
    name: "Софійський собор",
    description:
      "Одна з найдавніших пам’яток Києва. Собор відомий старовинними мозаїками та фресками.",
  },
  {
    id: "2",
    icon: "🎨",
    name: "Андріївський узвіз",
    description:
      "Історична вулиця з музеями, галереями та майстернями. Тут завжди відчувається творча атмосфера міста.",
  },
  {
    id: "3",
    icon: "🏛️",
    name: "Києво-Печерська лавра",
    description:
      "Великий монастирський комплекс над Дніпром. Це важлива історична та духовна пам’ятка України.",
  },
  {
    id: "4",
    icon: "🌳",
    name: "Володимирська гірка",
    description:
      "Затишний парк із чудовим видом на Поділ і Дніпро. Гарне місце для прогулянок у будь-яку пору року.",
  },
];

export default function CityScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.cityIcon}>🏙️</Text>
            <Text style={styles.title}>Київ</Text>
            <Text style={styles.subtitle}>
              Місто з багатою історією, зеленими парками та красивими краєвидами
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardIcon}>{item.icon}</Text>
            <View style={styles.cardContent}>
              <Text style={styles.placeName}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 30,
    gap: 14,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  cityIcon: {
    fontSize: 58,
    marginBottom: 8,
  },
  title: {
    color: colors.primary,
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    color: colors.secondary,
    fontSize: 16,
    lineHeight: 23,
    maxWidth: 520,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 18,
    padding: 18,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 3,
  },
  cardIcon: {
    fontSize: 34,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  placeName: {
    color: colors.accent,
    fontSize: 19,
    fontWeight: "700",
    marginBottom: 7,
  },
  description: {
    color: colors.body,
    fontSize: 15,
    lineHeight: 22,
  },
});
