import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { VStack, HStack } from "@gluestack-ui/themed";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import LineSep from "../assets/line.png";
import IconFeather from "react-native-vector-icons/Feather";

const TreatmentSheetForList = ({ date, name, personelattitre }) => {
  return (
    <VStack space="md">
      <HStack space="sm" style={styles.content}>
        <IconFeather name="file-text" size={45} color={Color.bleu1} />
        <VStack space="xs" style={styles.boxText}>
          <Text style={[styles.title, styles.textBlack]}>
            Feuille de soin de <Text style={styles.secondaryText}>{name}</Text>{" "}
            du {date}
          </Text>
          <Text style={styles.which}>Rempli par {personelattitre}</Text>
        </VStack>
      </HStack>
      <Image style={styles.line} contentFit="cover" source={LineSep} />
    </VStack>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
  },
  boxText: {
    flexShrink: 1,
  },
  line: {
    height: 7,
  },
  title: {
    fontFamily: FontFamily.robo_bold,
    fontSize: FontSize.size_14,
  },
  secondaryText: {
    color: Color.orange,
  },
  textBlack: {
    color: Color.black,
  },
  which: {
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_14,
    color: Color.black,
    opacity: 0.8,
  },
});

export default TreatmentSheetForList;
