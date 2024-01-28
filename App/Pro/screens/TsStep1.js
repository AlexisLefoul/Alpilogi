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
import Icon from "react-native-vector-icons/Octicons";
import BtnPrimary from "../components/BtnPrimary";
import data from "../datas.json";

export default function TsStep1({ route }) {
  const navigation = useNavigation();
  const { patientId } = route.params;
  const patient = data.patients.find((p) => p.id === patientId);
  const pName =
    patient.sexe === "F" ? "Mme. " + patient.lname : "M. " + patient.lname;

  function setTsWhen(value) {
    const tsh = {
      tsWhen: value,
      tsSoins: [],
      tsTraitements: [],
      tsHumeurs: [],
      tsRemarques: "",
      tsPatientId: "",
    };

    navigation.navigate("TsStep2", {
      patientId: patient.id,
      patientName: pName,
      treaSh: tsh,
    });
  }

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
          <Text style={styles.textContainer}>
            <Text style={styles.textBlack}>Les soins de </Text>
            <Text style={styles.textSecondary}>{pName} </Text>
            <Text style={styles.textBlack}>
              sont réalisés à quelle moment de la journée ?
            </Text>
          </Text>
        </View>
        <View style={styles.btns}>
          <BtnPrimary
            mode="outlined"
            text="Matin"
            outline={true}
            onPress={() => setTsWhen("Matin")}
            disabled={false}
          ></BtnPrimary>
          <BtnPrimary
            mode="outlined"
            text="Midi"
            outline={true}
            onPress={() => setTsWhen("Midi")}
            disabled={false}
          ></BtnPrimary>
          <BtnPrimary
            mode="outlined"
            text="Soir"
            outline={true}
            onPress={() => setTsWhen("Soir")}
            disabled={false}
          ></BtnPrimary>
        </View>
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
  textContainer: {
    fontSize: FontSize.size_26,
    fontFamily: FontFamily.title,
  },
  body: {
    marginHorizontal: "5%",
    marginTop: 20,
  },
  textBlack: { color: Color.black },
  textPrimary: { color: Color.bleu1 },
  textSecondary: { color: Color.orange },

  btns: {
    width: "70%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    gap: 70,
    marginTop: "35%",
  },
});
