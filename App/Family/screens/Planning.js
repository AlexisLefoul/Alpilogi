import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { HStack, VStack } from "@gluestack-ui/themed";
import BottomBar from "../components/BottomBar";
import RdvForList from "../components/RdvForList";
import data from "../datas.json";

export default function Planning() {
  const [rdv, setRdv] = React.useState(true);
  const list = rdv ? data.rdvcomingsoon : data.rdvpast;

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.body}>
          <View>
            <Text style={[styles.textTitre, styles.textBlack]}>
              Rendez-vous de{" "}
              {<Text style={[styles.textSecondary]}>vos proches</Text>}
            </Text>
          </View>
          <HStack space="lg" style={styles.btns}>
            <TouchableOpacity onPress={() => setRdv(!rdv)}>
              <Text style={[styles.btn, rdv ? null : styles.btnactive]}>
                Rendez-vous passés
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRdv(!rdv)}>
              <Text style={[styles.btn, rdv ? styles.btnactive : null]}>
                Rendez-vous à venir
              </Text>
            </TouchableOpacity>
          </HStack>
          <VStack space="lg" style={styles.listRdv}>
            {list?.map((l) => (
              <RdvForList
                name={data.patients.find((p) => p.id === l.patientId).name}
                url={data.patients.find((p) => p.id === l.patientId).img}
                date={l.date}
                heures={l.heures}
                key={l.id}
              />
            ))}
          </VStack>
        </View>
      </ScrollView>
      <BottomBar active="planning" />
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
  listRdv: {
    marginTop: 30,
    marginBottom: 30,
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Color.bleu3,
    color: Color.black,
    fontFamily: FontFamily.robo_medium,
    borderRadius: Border.br_40,
    elevation: 3,
    shadowColor: "#636363",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    fontSize: 13,
    ...Platform.select({
      ios: {
        overflow: "hidden",
        borderRadius: Border.br_15,
        fontSize: FontSize.size_16,
      },
    }),
  },
  btnactive: {
    backgroundColor: Color.bleu1,
    color: Color.white,
  },
  btns: {
    marginTop: 20,
    ...Platform.select({
      ios: {
        justifyContent: "space-evenly",
      },
    }),
  },
});
