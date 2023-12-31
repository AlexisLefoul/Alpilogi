import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { VStack } from "@gluestack-ui/themed";
import IconOcticons from "react-native-vector-icons/Octicons";
import BottomBar from "../components/BottomBar";
import TreatmentSheetForList from "../components/TreatmentSheetForList";
import data from "../datas.json";

export default function HistoryTreatmentSheets({ route }) {
  const navigation = useNavigation();

  const { patientId } = route.params;
  const { patientName } = route.params;
  const personelattitre = data.patients.find(
    (p) => p.id === patientId
  ).personelattitre;

  const list = [
    {
      id: "1",
      date: "Mercredi 13 décembre 2023",
      personelattitre: personelattitre,
    },
    {
      id: "2",
      date: "Mercredi 6 décembre 2023",
      personelattitre: personelattitre,
    },
    {
      id: "3",
      date: "Mercredi 29 novembre 2023",
      personelattitre: personelattitre,
    },
    {
      id: "4",
      date: "Mercredi 22 novembre 2023",
      personelattitre: personelattitre,
    },
    {
      id: "5",
      date: "Mercredi 15 novembre 2023",
      personelattitre: personelattitre,
    },
    {
      id: "6",
      date: "Mercredi 08 novembre 2023",
      personelattitre: personelattitre,
    },
    {
      id: "7",
      date: "Mercredi 01 novembre 2023",
      personelattitre: personelattitre,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.marginBotBar}>
        <View style={styles.top}>
          <View>
            <IconOcticons
              name="chevron-left"
              size={50}
              color={Color.bleu1}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
        <View style={styles.body}>
          <View>
            <Text style={[styles.textTitre, styles.textBlack]}>
              Feuilles de soins de{" "}
              {<Text style={[styles.textSecondary]}>{patientName}</Text>}
            </Text>
          </View>
          <VStack space="lg" style={styles.listTreatmentSheet}>
            {list?.map((l) => (
              <TreatmentSheetForList
                date={l.date}
                personelattitre={l.personelattitre}
                key={l.id}
              />
            ))}
          </VStack>
        </View>
      </ScrollView>
      <BottomBar active="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  marginBotBar: {
    marginBottom: 85,
  },
  top: {
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 20,
    gap: 30,
    alignItems: "center",
  },
  body: {
    paddingHorizontal: "5%",
    marginTop: 20,
  },
  textTitre: {
    fontSize: FontSize.size_26,
    fontFamily: FontFamily.title,
  },
  textBlack: { color: Color.black },
  textSecondary: { color: Color.orange },
  nameMessage: {
    fontFamily: FontFamily.robo_bold,
    fontSize: FontSize.size_14,
    color: Color.black,
  },
  message: {
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_14,
    color: Color.black,
    opacity: 0.8,
  },
  content: {
    alignItems: "center",
  },
  boxText: {
    flexShrink: 1,
  },
  line: {
    height: 7,
  },
  listTreatmentSheet: {
    marginTop: 30,
    marginBottom: 30,
  },
});
