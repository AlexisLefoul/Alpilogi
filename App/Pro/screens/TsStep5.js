import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import Icon from "react-native-vector-icons/Octicons";
import BtnPrimary from "../components/BtnPrimary";
import { VStack, HStack } from "@gluestack-ui/themed";

export default function TsStep5({ route }) {
  const navigation = useNavigation();
  const { patientId } = route.params;
  const { patientName } = route.params;
  const { treaSh } = route.params;
  const [text, setText] = React.useState("");

  function setTsRemarques() {
    const tsh = {
      tsWhen: treaSh.tsWhen,
      tsSoins: treaSh.tsSoins,
      tsTraitements: treaSh.tsTraitements,
      tsHumeurs: treaSh.tsHumeurs,
      tsRemarques: text,
      tsPatientId: patientId,
    };

    navigation.navigate("TsStep6", {
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
                Avez-vous des remarques à faire à propos de{" "}
              </Text>
              <Text style={styles.textSecondary}> {patientName} ?</Text>
            </Text>
          </View>
          <VStack space="xs" style={styles.containerList}>
            <TextInput
              style={[styles.input]}
              multiline={true}
              inputMode="text"
              onChangeText={setText}
              value={text}
              placeholder="Écrivez vos remarques..."
              placeholderTextColor={Color.bleu1}
            />
          </VStack>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <BtnPrimary
          mode="contained"
          text="Continuer"
          outline={false}
          disabled={false}
          onPress={() => setTsRemarques()}
        ></BtnPrimary>
      </View>
    </View>
  );
}

const windowHeight = Dimensions.get("window").height;
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
    marginBottom: 100,
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
  input: {
    flex: 1,
    minHeight: 300,
    textAlignVertical: "top",
    height: windowHeight - 400,
    borderColor: Color.bleu1,
    borderWidth: 1,
    borderRadius: Border.br_15,
    padding: 10,
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_16,
  },
});
