import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { VStack, HStack } from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/Octicons";
import LineSep from "../assets/line.png";
import CardForTS from "../components/CardForTS";

import data from "../datas.json";

export default function TreatmentSheet({ route }) {
  const navigation = useNavigation();
  const { tsId } = route.params;
  const ts = data.treatmentSheets.find((p) => p.id === tsId);
  const patient = data.patients.find((p) => p.id === ts.patientId);
  const listSoins = data.soins;
  const listTraitements = data.traitements;
  const listHumours = data.humours;

  const images = {
    Toilette_partielle: require("../assets/Soins/Toilette_partielle.png"),
    Toilette_complete: require("../assets/Soins/Toilette_complete.png"),
    Douche: require("../assets/Soins/Douche.png"),
    Shampoing: require("../assets/Soins/Shampoing.png"),
    Rasage: require("../assets/Soins/Rasage.png"),
    Bouche: require("../assets/Soins/Bouche.png"),
    Habillage: require("../assets/Soins/Habillage.png"),
    Manucure: require("../assets/Soins/Manucure.png"),
    Soins_cutanes: require("../assets/Soins/Soins_cutanes.png"),
    Varice_bande: require("../assets/Soins/Varice_bande.png"),
    Prevention_escarre: require("../assets/Soins/Prevention_escarre.png"),
    Change: require("../assets/Soins/Change.png"),
    Injections: require("../assets/Traitements/Injections.png"),
    Pansement: require("../assets/Traitements/Pansement.png"),
    Patchs: require("../assets/Traitements/Patchs.png"),
    Medica: require("../assets/Traitements/Medica.png"),
    Prelevement_sanguin: require("../assets/Traitements/Prelevement_sanguin.png"),
    Temperature: require("../assets/Traitements/Temperature.png"),
    Poids: require("../assets/Traitements/Poids.png"),
    Tension: require("../assets/Traitements/Tension.png"),
    Joyeux: require("../assets/Humeurs/Joyeux.png"),
    Triste: require("../assets/Humeurs/Triste.png"),
    Deprimer: require("../assets/Humeurs/Deprimer.png"),
    Inquiet: require("../assets/Humeurs/Inquiet.png"),
    Apeure: require("../assets/Humeurs/Apeure.png"),
    Agresif: require("../assets/Humeurs/Agresif.png"),
    Enforme: require("../assets/Humeurs/Enforme.png"),
    Fatigue: require("../assets/Humeurs/Fatigue.png"),
  };

  const listForSoin = [];
  const listForTraitements = [];
  const listForHumeurs = [];
  ts.tsSoins.forEach((element) => {
    const soin = listSoins.find((p) => p.img === element);
    listForSoin.push(soin);
  });
  ts.tsTraitements.forEach((element) => {
    const trait = listTraitements.find((p) => p.img === element);
    listForTraitements.push(trait);
  });
  ts.tsHumeurs.forEach((element) => {
    const humeur = listHumours.find((p) => p.img === element);
    listForHumeurs.push(humeur);
  });

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
        <View>
          <Text style={[styles.textTitre, styles.textBlack]}>
            Feuilles de soins de{" "}
            {
              <Text style={[styles.textSecondary]}>
                {patient.name + " " + patient.lname + " - "}
              </Text>
            }
            {<Text style={[styles.textBlack, styles.textSous]}>{ts.date}</Text>}
          </Text>
        </View>
        <VStack space="lg" marginTop={50}>
          <VStack space="md">
            <HStack space="sm">
              <Text style={[styles.textSous, styles.textPrimary]}>
                Les soins ont été réalisés le :
              </Text>
              <Text style={[styles.textSous, styles.textSecondary]}>
                {ts.tsWhen}
              </Text>
            </HStack>
            <Image style={styles.line} contentFit="cover" source={LineSep} />
          </VStack>
          <VStack space="md">
            <VStack space="lg">
              <Text style={[styles.textSous, styles.textPrimary]}>
                Les soins qui ont été réalisés :
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <HStack space="xl">
                  {listForSoin?.map((l) => (
                    <CardForTS
                      key={l.id}
                      color={l.color}
                      img={images[l.img]}
                      value={l.value}
                    />
                  ))}
                </HStack>
              </ScrollView>
            </VStack>
            <Image style={styles.line} contentFit="cover" source={LineSep} />
          </VStack>
          <VStack space="md">
            <VStack space="lg">
              <Text style={[styles.textSous, styles.textPrimary]}>
                Les traitements apportés :
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <HStack space="xl">
                  {listForTraitements?.map((l) => (
                    <CardForTS
                      key={l.id}
                      color={l.color}
                      img={images[l.img]}
                      value={l.value}
                    />
                  ))}
                </HStack>
              </ScrollView>
            </VStack>
            <Image style={styles.line} contentFit="cover" source={LineSep} />
          </VStack>
          <VStack space="md">
            <VStack space="lg">
              <Text style={[styles.textSous, styles.textPrimary]}>
                Concernant l’humeur de votre proche :
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <HStack space="xl">
                  {listForHumeurs?.map((l) => (
                    <CardForTS
                      key={l.id}
                      color={l.color}
                      img={images[l.img]}
                      value={l.value}
                    />
                  ))}
                </HStack>
              </ScrollView>
            </VStack>
            <Image style={styles.line} contentFit="cover" source={LineSep} />
          </VStack>
          <VStack space="sm" marginBottom={20}>
            <Text style={[styles.textSous, styles.textPrimary]}>
              Les remarques éffectuées :
            </Text>
            <Text style={[styles.textSous, styles.textSecondary]}>
              {ts.tsRemarques.length > 1 ? ts.tsRemarques : "Aucunes"}
            </Text>
          </VStack>
        </VStack>
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
  body: {
    marginHorizontal: "5%",
    marginTop: 20,
  },
  textTitre: {
    fontSize: FontSize.size_26,
    fontFamily: FontFamily.title,
  },
  textSous: {
    fontSize: FontSize.sous_title_size,
    fontFamily: FontFamily.title,
  },
  textBlack: { color: Color.black },
  textSecondary: { color: Color.orange },
  line: {
    height: 7,
  },
  textPrimary: {
    color: Color.bleu1,
  },
  img: {
    height: 60,
    width: 60,
    alignSelf: "center",
  },
  textValue: {
    fontSize: FontSize.size_15,
    fontFamily: FontFamily.corps,
    textAlign: "center",
  },
});
