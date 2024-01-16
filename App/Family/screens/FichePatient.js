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
import {
  VStack,
  Avatar,
  AvatarImage,
  HStack,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/Octicons";

import data from "../datas.json";

export default function FichePatient({ route }) {
  const navigation = useNavigation();
  const { patientId } = route.params;

  const patient = data.patients.find((p) => p.id === patientId);

  return (
    <ScrollView>
      <View style={styles.top}>
        <View>
          <Icon
            name="chevron-left"
            size={50}
            color={Color.bleu1}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      <View style={styles.body}>
        <VStack space="lg" style={styles.bgbleu2}>
          <HStack space="lg" style={styles.firstbloc}>
            <VStack space="none">
              <Text style={[styles.textTitre]}>{patient.name}</Text>
              <Text style={[styles.textTitre]}>{patient.lname}</Text>
            </VStack>
            <Avatar bgColor={Color.bleu1} size="xl" borderRadius="$full">
              <AvatarFallbackText>
                {patient.name} {patient.lname}
              </AvatarFallbackText>
              <AvatarImage source={{ uri: patient.img }} alt={Color.bleu1} />
            </Avatar>
          </HStack>
          <HStack space="3xl">
            <HStack space="sm">
              <Text style={[styles.textContent, styles.textBlack]}>Âge :</Text>
              <Text style={[styles.textContent, styles.textPrimary]}>
                {patient.age} ans
              </Text>
            </HStack>
            <HStack space="sm">
              <Text style={[styles.textContent, styles.textBlack]}>Sexe :</Text>
              <Text style={[styles.textContent, styles.textPrimary]}>
                {patient.sexe}
              </Text>
            </HStack>
          </HStack>
          <HStack space="sm">
            <Text style={[styles.textContent, styles.textBlack]}>
              Résidence :
            </Text>
            <Text
              style={[
                styles.textContent,
                styles.textPrimary,
                styles.fsize16,
                styles.Textreponse,
              ]}
            >
              {patient.adresse}
            </Text>
          </HStack>
        </VStack>
        <View style={styles.seperator}></View>
        <VStack space="lg" style={styles.bgbleu2}>
          <HStack space="sm">
            <Text style={[styles.textContent, styles.textBlack]}>
              Médecin traitant :
            </Text>
            <Text
              style={[
                styles.textContent,
                styles.textPrimary,
                styles.fsize16,
                styles.Textreponse,
              ]}
            >
              {patient.medtraitant}
            </Text>
          </HStack>
          <HStack space="sm">
            <Text style={[styles.textContent, styles.textBlack]}>
              Traitement particulier :
            </Text>
            <Text
              style={[
                styles.textContent,
                styles.textPrimary,
                styles.fsize16,
                styles.Textreponse,
              ]}
            >
              {patient.specifictmt}
            </Text>
          </HStack>
          <HStack space="sm">
            <Text style={[styles.textContent, styles.textBlack]}>
              Remarque sur le patient :
            </Text>
            <Text
              style={[
                styles.textContent,
                styles.textPrimary,
                styles.fsize16,
                styles.Textreponse,
              ]}
            >
              {patient.noteonpt}
            </Text>
          </HStack>
          <View>
            <Text style={[styles.textContent, styles.textBlack]}>
              Services dont bénéficie le patient :
            </Text>
            <Text
              style={[styles.textContent, styles.textPrimary, styles.fsize16]}
            >
              {patient.services}
            </Text>
          </View>
          <HStack space="sm">
            <Text style={[styles.textContent, styles.textBlack]}>
              Infirmière attitrée :
            </Text>
            <Text
              style={[
                styles.textContent,
                styles.textPrimary,
                styles.fsize16,
                styles.Textreponse,
              ]}
            >
              {patient.personelattitre}
            </Text>
          </HStack>
        </VStack>
        <View style={styles.seperator}></View>
        <VStack space="lg" style={styles.bgbleu2}>
          <View>
            <Text style={[styles.textContent, styles.textBlack]}>
              Humeurs la semaine précédente :
            </Text>
            <Text
              style={[styles.textContent, styles.textPrimary, styles.fsize16]}
            >
              {patient.moodslastweek}
            </Text>
          </View>
        </VStack>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("TreatmentSheet", {
              tsId: patient.lastTSId,
            })
          }
        >
          <HStack space="lg" style={styles.bot}>
            <Text style={styles.sousTitle}>
              Voir la dernière feuille de soin de ce proche
            </Text>
            <View>
              <Icon name="chevron-right" size={50} color={Color.bleu1} />
            </View>
          </HStack>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 20,
    gap: 30,
    alignItems: "center",
  },
  textTitre: {
    color: Color.black,
    fontSize: FontSize.title_size,
    fontFamily: FontFamily.title,
  },
  body: {
    marginHorizontal: "5%",
    marginTop: 20,
  },
  bgbleu2: {
    backgroundColor: Color.bleu2,
    padding: 15,
    paddingBottom: 25,
  },
  textContent: {
    fontSize: FontSize.sous_title_size,
    fontFamily: FontFamily.title,
  },
  textBlack: { color: Color.black },
  textPrimary: { color: Color.bleu1 },
  firstbloc: {
    justifyContent: "space-between",
    paddingRight: 10,
  },
  fsize16: {
    fontSize: FontSize.size_16,
  },
  Textreponse: {
    flexShrink: 1,
    alignSelf: "center",
  },
  seperator: {
    height: 3,
    backgroundColor: Color.white,
  },
  sousTitle: {
    fontFamily: FontFamily.title,
    fontSize: FontSize.sous_title_size,
    color: Color.black,
    ...Platform.select({
      ios: {
        marginTop: 12,
      },
    }),
  },
  bot: {
    padding: 15,
    paddingBottom: 25,
  },
});
