import { Link } from "expo-router";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <View style={styles.header}>
        <Text style={styles.appName}>MY LIBRARY</Text>
        <Text style={styles.headerIcon}>▤</Text>
      </View>

      <View style={styles.welcome}>
        <Text style={styles.greeting}>Your reading space</Text>
        <Text style={styles.subtitle}>Pick up where you left off.</Text>
      </View>

      <View style={styles.bookCard}>
        <View style={styles.cover}>
          <Text style={styles.coverSmall}>2019–2020 EDITION</Text>
          <Text style={styles.coverTitle}>CORPORATE{"\n"}GOVERNANCE</Text>
          <View style={styles.coverLine} />
          <Text style={styles.coverFooter}>319 PAGES</Text>
        </View>

        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>Corporate Governance</Text>
          <Text style={styles.bookEdition}>2019–2020 Edition</Text>
          <Text style={styles.pageCount}>319 pages · Offline book</Text>

          <Link href="/contents" asChild>
            <Pressable style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Browse Contents →</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>ABOUT THIS BOOK</Text>
        <Text style={styles.description}>
          Your personal offline copy of Corporate Governance. Navigate through
          units and chapters without needing an internet connection.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>YOUR PERSONAL DIGITAL BOOK</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  appName: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    color: "#A0A0A0",
  },
  headerIcon: {
    fontSize: 25,
    color: "#E0E0E0",
  },
  welcome: {
    marginTop: 35,
    marginBottom: 30,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 14,
    color: "#A0A0A0",
    marginTop: 8,
  },
  bookCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    gap: 18,
    elevation: 3,
  },
  cover: {
    width: 112,
    height: 165,
    backgroundColor: "#263C50",
    borderRadius: 5,
    padding: 12,
    justifyContent: "space-between",
  },
  coverSmall: {
    fontSize: 7,
    color: "#D9CBAA",
    letterSpacing: 1,
  },
  coverTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#FFFFFF",
    lineHeight: 20,
  },
  coverLine: {
    height: 1,
    backgroundColor: "#D9CBAA",
  },
  coverFooter: {
    fontSize: 8,
    color: "#D9CBAA",
  },
  bookInfo: {
    flex: 1,
    justifyContent: "center",
    gap: 7,
  },
  bookTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  bookEdition: {
    fontSize: 12,
    color: "#B0B0B0",
  },
  pageCount: {
    fontSize: 11,
    color: "#888888",
    marginBottom: 8,
  },
  primaryButton: {
    backgroundColor: "#8B9CF7",
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#121212",
    fontSize: 11,
    fontWeight: "700",
  },
  infoSection: {
    marginTop: 38,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.5,
    color: "#A0A0A0",
  },
  description: {
    fontSize: 14,
    lineHeight: 23,
    color: "#B0B0B0",
  },
  footer: {
    marginTop: "auto",
    paddingVertical: 24,
    alignItems: "center",
  },
  footerText: {
    fontSize: 9,
    letterSpacing: 1.5,
    color: "#666666",
  },
});
