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

export default function TsStep3({ route }) {
  const navigation = useNavigation();
  const { patientId } = route.params;
  const { patientName } = route.params;
  const { treaSh } = route.params;

  const listTraitements = data.traitements;

  const images = {
    Injections: require("../assets/Traitements/Injections.png"),
    Pansement: require("../assets/Traitements/Pansement.png"),
    Patchs: require("../assets/Traitements/Patchs.png"),
    Medica: require("../assets/Traitements/Medica.png"),
    Prelevement_sanguin: require("../assets/Traitements/Prelevement_sanguin.png"),
    Temperature: require("../assets/Traitements/Temperature.png"),
    Poids: require("../assets/Traitements/Poids.png"),
    Tension: require("../assets/Traitements/Tension.png"),
  };

  const [InjActive, setInjActive] = useState(false);
  const [PanActive, setPanActive] = useState(false);
  const [PatActive, setPatActive] = useState(false);
  const [MedActive, setMedActive] = useState(false);
  const [PsActive, setPsActive] = useState(false);
  const [TempActive, setTempActive] = useState(false);
  const [PdActive, setPdActive] = useState(false);
  const [TsActive, setTsActive] = useState(false);

  function setTsTraitements() {
    const traitements = [];

    InjActive ? traitements.push("Injection") : null;
    PanActive ? traitements.push("Pansement") : null;
    PatActive ? traitements.push("Patchs") : null;
    MedActive ? traitements.push("Médicaments") : null;
    PsActive ? traitements.push("Prélèvement sanguin") : null;
    TempActive ? traitements.push("Température") : null;
    PdActive ? traitements.push("Poids") : null;
    TsActive ? traitements.push("Tension") : null;

    const tsh = {
      tsWhen: treaSh.tsWhen,
      tsSoins: treaSh.tsSoins,
      tsTraitements: traitements,
      tsHumeurs: [],
      tsRemarques: "",
      tsPatientId: "",
    };

    navigation.navigate("TsStep4", {
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
              <Text style={styles.textBlack}>
                Quels ont été les traitements apportés à
              </Text>
              <Text style={styles.textSecondary}> {patientName} ?</Text>
            </Text>
          </View>
          <VStack space="xl" style={styles.containerList}>
            <HStack space="lg" style={styles.containerListH}>
              <TouchableOpacity
                onPress={() => setInjActive(!InjActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listTraitements[0].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: InjActive
                        ? listTraitements[0].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listTraitements[0].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listTraitements[0].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPanActive(!PanActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listTraitements[1].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: PanActive
                        ? listTraitements[1].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listTraitements[1].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listTraitements[1].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPatActive(!PatActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listTraitements[2].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: PatActive
                        ? listTraitements[2].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listTraitements[2].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listTraitements[2].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
            </HStack>
            <HStack space="lg" style={styles.containerListH}>
              <TouchableOpacity
                onPress={() => setMedActive(!MedActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listTraitements[3].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: MedActive
                        ? listTraitements[3].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listTraitements[3].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listTraitements[3].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPsActive(!PsActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listTraitements[4].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: PsActive
                        ? listTraitements[4].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listTraitements[4].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listTraitements[4].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTempActive(!TempActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listTraitements[5].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: TempActive
                        ? listTraitements[5].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listTraitements[5].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listTraitements[5].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
            </HStack>
            <HStack
              space="lg"
              style={[styles.containerListH, { alignSelf: "center" }]}
            >
              <TouchableOpacity
                onPress={() => setPdActive(!PdActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listTraitements[6].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: PdActive
                        ? listTraitements[6].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listTraitements[6].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listTraitements[6].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTsActive(!TsActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listTraitements[7].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: TsActive
                        ? listTraitements[7].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listTraitements[7].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listTraitements[7].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
            </HStack>
          </VStack>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setTsTraitements()}>
          <BtnPrimary
            mode="contained"
            text="Continuer"
            outline={false}
          ></BtnPrimary>
        </TouchableOpacity>
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
