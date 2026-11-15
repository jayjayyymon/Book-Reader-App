import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReaderScreen() {
  const { page } = useLocalSearchParams<{ page: string }>();

  return (
    <SafeAreaView style={styles.container}>
      <Link href="/contents" asChild>
        <Pressable style={styles.backButton}>
          <Text style={styles.backText}>← Table of Contents</Text>
        </Pressable>
      </Link>

      <View style={styles.content}>
        <Text style={styles.title}>Book Reader</Text>

        <Text style={styles.pageLabel}>PDF PAGE {page}</Text>

        <View style={styles.placeholder}>
          <Text style={styles.placeholderTitle}>
            Your scanned book page will appear here.
          </Text>
          <Text style={styles.placeholderDescription}>
            We will integrate the original PDF page images in the next
            development stage.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F3",
    padding: 24,
  },
  backButton: {
    paddingVertical: 15,
  },
  backText: {
    color: "#263C50",
    fontSize: 14,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#292820",
  },
  pageLabel: {
    marginTop: 10,
    color: "#888479",
    fontSize: 13,
  },
  placeholder: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 14,
    marginTop: 35,
    width: "100%",
    alignItems: "center",
  },
  placeholderTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#292820",
    textAlign: "center",
  },
  placeholderDescription: {
    marginTop: 12,
    color: "#888479",
    textAlign: "center",
    lineHeight: 22,
    fontSize: 13,
  },
});
