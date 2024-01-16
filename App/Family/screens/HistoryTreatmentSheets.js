import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { VStack } from "@gluestack-ui/themed";
import BottomBar from "../components/BottomBar";
import TreatmentSheetForList from "../components/TreatmentSheetForList";
import data from "../datas.json";

export default function HistoryTreatmentSheets() {
  const navigation = useNavigation();
  const list = data.treatmentSheets;

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.body}>
          <View>
            <Text style={[styles.textTitre, styles.textBlack]}>
              Feuilles de soins de{" "}
              {<Text style={[styles.textSecondary]}>vos proches</Text>}
            </Text>
          </View>
          <VStack space="lg" style={styles.listTreatmentSheet}>
            {list?.map((l) => (
              <TouchableOpacity
                key={l.id}
                onPress={() =>
                  navigation.navigate("TreatmentSheet", {
                    tsId: l.id,
                  })
                }
              >
                <TreatmentSheetForList
                  date={l.date}
                  name={
                    data.patients.find((p) => p.id === l.patientId).name +
                    " " +
                    data.patients.find((p) => p.id === l.patientId).lname
                  }
                  personelattitre={
                    data.patients.find((p) => p.id === l.patientId)
                      .personelattitre
                  }
                />
              </TouchableOpacity>
            ))}
          </VStack>
        </View>
      </ScrollView>
      <BottomBar active="historyTreatmentSheets" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  body: {
    paddingHorizontal: "5%",
    marginTop: 20,
    marginBottom: 80,
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
