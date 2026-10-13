import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/theme";

const places = [
  {
    id: "1",
    icon: "⛪",
    tag: "Історія",
    tint: "#2D6A6A",
    name: "Софійський собор",
    description:
      "Одна з найдавніших пам’яток Києва. Собор відомий старовинними мозаїками та фресками.",
  },
  {
    id: "2",
    icon: "🎨",
    tag: "Мистецтво",
    tint: "#C2492B",
    name: "Андріївський узвіз",
    description:
      "Історична вулиця з музеями, галереями та майстернями. Тут завжди відчувається творча атмосфера міста.",
  },
  {
    id: "3",
    icon: "🏛️",
    tag: "Пам’ятка",
    tint: "#6A4C93",
    name: "Києво-Печерська лавра",
    description:
      "Великий монастирський комплекс над Дніпром. Це важлива історична та духовна пам’ятка України.",
  },
  {
    id: "4",
    icon: "🌳",
    tag: "Відпочинок",
    tint: "#3E7A3E",
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
            <Text style={styles.kicker}>МІСТО</Text>
            <Text style={styles.title}>Київ</Text>
            <Text style={styles.subtitle}>
              Чотири місця, з яких я б почав знайомство з містом
            </Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <View style={[styles.cover, { backgroundColor: item.tint }]}>
              <Text style={styles.coverIcon}>{item.icon}</Text>
              <Text style={styles.number}>0{index + 1}</Text>
            </View>
            <View style={styles.info}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.tag}</Text>
              </View>
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
    gap: 18,
    padding: 20,
  },
  header: {
    marginBottom: 6,
  },
  kicker: {
    color: colors.coral,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 4,
  },
  title: {
    color: colors.dark,
    fontSize: 40,
    fontWeight: "900",
  },
  subtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 4,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  cover: {
    alignItems: "center",
    flexDirection: "row",
    height: 84,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  coverIcon: {
    fontSize: 44,
  },
  number: {
    color: "#FFFFFF",
    fontSize: 44,
    fontWeight: "900",
  },
  info: {
    padding: 18,
  },
  tag: {
    alignSelf: "flex-start",
    backgroundColor: colors.background,
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  tagText: {
    color: colors.teal,
    fontSize: 12,
    fontWeight: "700",
  },
  placeName: {
    color: colors.dark,
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 6,
  },
  description: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
});
