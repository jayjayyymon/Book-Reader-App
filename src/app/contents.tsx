import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { bookContents } from "../data/bookContents";

const COLORS = {
  background: "#121212",
  surface: "#1E1E1E",
  elevated: "#252525",
  primary: "#8B9CF7",
  text: "#FFFFFF",
  secondary: "#A0A0A0",
  border: "#333333",
};

export default function ContentsScreen() {
  const router = useRouter();

  const [expandedUnits, setExpandedUnits] = React.useState<number[]>([]);

  const toggleUnit = (unitIndex: number) => {
    setExpandedUnits((previous) =>
      previous.includes(unitIndex)
        ? previous.filter((index) => index !== unitIndex)
        : [...previous, unitIndex],
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backButton}>← Back</Text>
        </Pressable>

        <Text style={styles.title}>Table of Contents</Text>
        <Text style={styles.subtitle}>
          Corporate Governance · 2019–2020 Edition
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {bookContents.map((unit, unitIndex) => {
          const isExpanded = expandedUnits.includes(unitIndex);

          return (
            <View key={unitIndex} style={styles.unitCard}>
              <Pressable
                style={styles.unitHeader}
                onPress={() => toggleUnit(unitIndex)}
              >
                <View style={styles.unitInfo}>
                  <Text style={styles.unitLabel}>UNIT {unitIndex + 1}</Text>
                  <Text style={styles.unitTitle}>{unit.title}</Text>
                  <Text style={styles.chapterCount}>
                    {unit.chapters.length} Chapters
                  </Text>
                </View>

                <Text style={styles.expandIcon}>{isExpanded ? "−" : "+"}</Text>
              </Pressable>

              {isExpanded && (
                <View style={styles.chapterList}>
                  {unit.chapters.map((chapter, chapterIndex) => (
                    <Pressable
                      key={chapterIndex}
                      style={styles.chapterItem}
                      onPress={() => router.push(`/reader/${chapter.page}`)}
                    >
                      <View style={styles.chapterNumber}>
                        <Text style={styles.chapterNumberText}>
                          {chapterIndex + 1}
                        </Text>
                      </View>

                      <View style={styles.chapterInfo}>
                        <Text style={styles.chapterTitle}>{chapter.title}</Text>
                        <Text style={styles.pageNumber}>
                          Page {chapter.page}
                        </Text>
                      </View>

                      <Text style={styles.chapterArrow}>›</Text>
                    </Pressable>
                  ))}
                </View>
              )}
            </View>
          );
        })}

        <Text style={styles.footer}>Select a chapter to start reading.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
  },

  backButton: {
    color: COLORS.primary,
    fontSize: 15,
    marginBottom: 24,
  },

  title: {
    color: COLORS.text,
    fontSize: 27,
    fontWeight: "700",
  },

  subtitle: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: 8,
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  unitCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 14,
    overflow: "hidden",
  },

  unitHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
  },

  unitInfo: {
    flex: 1,
  },

  unitLabel: {
    color: COLORS.primary,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 7,
  },

  unitTitle: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: "600",
  },

  chapterCount: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: 6,
  },

  expandIcon: {
    color: COLORS.primary,
    fontSize: 27,
    marginLeft: 12,
  },

  chapterList: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },

  chapterItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  chapterNumber: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: COLORS.elevated,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  chapterNumberText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: "700",
  },

  chapterInfo: {
    flex: 1,
  },

  chapterTitle: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "500",
  },

  pageNumber: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 5,
  },

  chapterArrow: {
    color: COLORS.secondary,
    fontSize: 23,
    marginLeft: 10,
  },

  footer: {
    color: COLORS.secondary,
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
  },
});
