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

export default function TsStep2({ route }) {
  const navigation = useNavigation();
  const { patientId } = route.params;
  const { patientName } = route.params;
  const { treaSh } = route.params;
  const listSoins = data.soins;

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
  };

  const [TpActive, setTpActive] = useState(false);
  const [TcActive, setTcActive] = useState(false);
  const [DoucheActive, setDoucheActive] = useState(false);
  const [SpActive, setSpActive] = useState(false);
  const [RaActive, setRaActive] = useState(false);
  const [BcActive, setBcActive] = useState(false);
  const [HbActive, setHbActive] = useState(false);
  const [McActive, setMcActive] = useState(false);
  const [ScActive, setScActive] = useState(false);
  const [VbActive, setVbActive] = useState(false);
  const [PeActive, setPeActive] = useState(false);
  const [CgActive, setCgActive] = useState(false);

  function setTsSoins() {
    const soins = [];

    TpActive ? soins.push("Toilette partielle") : null;
    TcActive ? soins.push("Toilette complète") : null;
    DoucheActive ? soins.push("Douche") : null;
    SpActive ? soins.push("Shampoing") : null;
    RaActive ? soins.push("Rasage") : null;
    BcActive ? soins.push("Bouche") : null;
    HbActive ? soins.push("Habillage") : null;
    McActive ? soins.push("Manucure / pédicure") : null;
    ScActive ? soins.push("Soins cutanés") : null;
    VbActive ? soins.push("Bas à varice / bande") : null;
    PeActive ? soins.push("Prévention escarre") : null;
    CgActive ? soins.push("Change partiel / complet") : null;

    const tsh = {
      tsWhen: treaSh.tsWhen,
      tsSoins: soins,
      tsTraitements: [],
      tsHumeurs: [],
      tsRemarques: "",
      tsPatientId: "",
    };

    navigation.navigate("TsStep3", {
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
                Quels ont été les soins apportés à{" "}
              </Text>
              <Text style={styles.textSecondary}>{patientName} </Text>
              <Text style={styles.textBlack}>aujourd’hui ?</Text>
            </Text>
          </View>
          <VStack space="xl" style={styles.containerList}>
            <HStack space="lg" style={styles.containerListH}>
              <TouchableOpacity
                onPress={() => setTpActive(!TpActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listSoins[0].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: TpActive
                        ? listSoins[0].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listSoins[0].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listSoins[0].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTcActive(!TcActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listSoins[1].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: TcActive
                        ? listSoins[1].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listSoins[1].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listSoins[1].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setDoucheActive(!DoucheActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listSoins[2].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: DoucheActive
                        ? listSoins[2].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listSoins[2].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listSoins[2].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
            </HStack>
            <HStack space="lg" style={styles.containerListH}>
              <TouchableOpacity
                onPress={() => setSpActive(!SpActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listSoins[3].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: SpActive
                        ? listSoins[3].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listSoins[3].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listSoins[3].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setRaActive(!RaActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listSoins[4].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: RaActive
                        ? listSoins[4].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listSoins[4].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listSoins[4].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBcActive(!BcActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listSoins[5].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: BcActive
                        ? listSoins[5].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listSoins[5].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listSoins[5].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
            </HStack>
            <HStack space="lg" style={styles.containerListH}>
              <TouchableOpacity
                onPress={() => setHbActive(!HbActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listSoins[6].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: HbActive
                        ? listSoins[6].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listSoins[6].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listSoins[6].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setMcActive(!McActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listSoins[7].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: McActive
                        ? listSoins[7].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listSoins[7].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listSoins[7].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setScActive(!ScActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listSoins[8].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: ScActive
                        ? listSoins[8].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listSoins[8].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listSoins[8].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
            </HStack>
            <HStack space="lg" style={styles.containerListH}>
              <TouchableOpacity
                onPress={() => setVbActive(!VbActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listSoins[9].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: VbActive
                        ? listSoins[9].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listSoins[9].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listSoins[9].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPeActive(!PeActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listSoins[10].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: PeActive
                        ? listSoins[10].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listSoins[10].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listSoins[10].value}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setCgActive(!CgActive)}
                style={styles.containerSoin}
              >
                <VStack space="md">
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: listSoins[11].color,
                      borderRadius: 15,
                      padding: 20,
                      backgroundColor: CgActive
                        ? listSoins[11].color + "33"
                        : "transparent",
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={images[listSoins[11].img]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.textValue, styles.textBlack]}>
                    {listSoins[11].value}
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
          onPress={() => setTsSoins()}
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
