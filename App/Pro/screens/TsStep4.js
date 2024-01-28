import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import Icon from "react-native-vector-icons/Octicons";
import BtnPrimary from "../components/BtnPrimary";
import data from "../datas.json";
import { VStack, HStack } from "@gluestack-ui/themed";

export default function TsStep4({ route }) {
  const navigation = useNavigation();
  const { patientId } = route.params;
  const { patientName } = route.params;
  const { treaSh } = route.params;

  const listHumours = data.humours;

  const images = {
    Joyeux: require("../assets/Humeurs/Joyeux.png"),
    Triste: require("../assets/Humeurs/Triste.png"),
    Deprimer: require("../assets/Humeurs/Deprimer.png"),
    Inquiet: require("../assets/Humeurs/Inquiet.png"),
    Apeure: require("../assets/Humeurs/Apeure.png"),
    Agresif: require("../assets/Humeurs/Agresif.png"),
    Enforme: require("../assets/Humeurs/Enforme.png"),
    Fatigue: require("../assets/Humeurs/Fatigue.png"),
  };

  const [JoyActive, setJoyActive] = useState(false);
  const [TriActive, setTriActive] = useState(false);
  const [DepActive, setDepActive] = useState(false);
  const [InqActive, setInqActive] = useState(false);
  const [ApeActive, setApeActive] = useState(false);
  const [AgreActive, setAgreActive] = useState(false);
  const [EnfActive, setEnfActive] = useState(false);
  const [FatActive, setFatActive] = useState(false);

  function setTsHumeurs() {
    const humeurs = [];

    JoyActive ? humeurs.push("Joyeux(se)") : null;
    TriActive ? humeurs.push("Triste") : null;
    DepActive ? humeurs.push("Déprimé(e)") : null;
    InqActive ? humeurs.push("Inquiet(e)") : null;
    ApeActive ? humeurs.push("Apeuré(e)") : null;
    AgreActive ? humeurs.push("Agressif(ve)") : null;
    EnfActive ? humeurs.push("En forme") : null;
    FatActive ? humeurs.push("Fatigué(e)") : null;

    const tsh = {
      tsWhen: treaSh.tsWhen,
      tsSoins: treaSh.tsSoins,
      tsTraitements: treaSh.tsTraitements,
      tsHumeurs: humeurs,
      tsRemarques: "",
      tsPatientId: "",
    };

    navigation.navigate("TsStep5", {
      patientId: patientId,
      patientName: patientName,
      treaSh: tsh,
    });
  }

  return (
    <View>
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
              <Text style={styles.textBlack}>Quelle était l’humeur de </Text>
              <Text style={styles.textSecondary}> {patientName} </Text>
              <Text style={styles.textBlack}>aujourd’hui ?</Text>
            </Text>
          </View>
          <VStack space="xl" style={styles.containerList}>
            <HStack space="lg" style={styles.containerListH}>
              <TouchableOpacity
                onPress={() => setJoyActive(!JoyActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listHumours[0].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: JoyActive
                        ? listHumours[0].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listHumours[0].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listHumours[0].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTriActive(!TriActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listHumours[1].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: TriActive
                        ? listHumours[1].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listHumours[1].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listHumours[1].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setDepActive(!DepActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listHumours[2].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: DepActive
                        ? listHumours[2].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listHumours[2].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listHumours[2].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
            </HStack>
            <HStack space="lg" style={styles.containerListH}>
              <TouchableOpacity
                onPress={() => setInqActive(!InqActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listHumours[3].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: InqActive
                        ? listHumours[3].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listHumours[3].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listHumours[3].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setApeActive(!ApeActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listHumours[4].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: ApeActive
                        ? listHumours[4].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listHumours[4].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listHumours[4].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setAgreActive(!AgreActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listHumours[5].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: AgreActive
                        ? listHumours[5].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listHumours[5].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listHumours[5].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
            </HStack>
            <HStack
              space="lg"
              style={[styles.containerListH, { alignSelf: "center" }]}
            >
              <TouchableOpacity
                onPress={() => setEnfActive(!EnfActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listHumours[6].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: EnfActive
                        ? listHumours[6].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listHumours[6].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listHumours[6].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setFatActive(!FatActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listHumours[7].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: FatActive
                        ? listHumours[7].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listHumours[7].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listHumours[7].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
            </HStack>
          </VStack>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <BtnPrimary
          mode="contained"
          text="Continuer"
          outline={false}
          disabled={false}
          onPress={() => setTsHumeurs()}
        ></BtnPrimary>
      </View>
    </View>
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
  containerList: {
    marginTop: 60,
    marginBottom: 80,
  },
  containerListH: {
    flexShrink: 1,
  },
  containerSoin: {
    width: "30%",
    alignItems: "center",
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
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        // Styles spécifiques à iOS
        justifyContent: "flex-end",
        position: "absolute",
        bottom: 10,
        left: 0,
        width: "100%",
        alignItems: "center",
      },
      android: {
        // Styles spécifiques à Android
        justifyContent: "flex-end",
        position: "absolute",
        bottom: 10,
        left: 0,
        width: "100%",
        alignItems: "center",
      },
      default: {
        // Styles pour les autres plateformes
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 10,
      },
    }),
  },
});
