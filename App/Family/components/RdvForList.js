import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  Avatar,
  AvatarImage,
  VStack,
  HStack,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RdvForList = ({ name, url, date, heures }) => {
  return (
    <>
      <HStack space="md" style={styles.boxRdv}>
        <Avatar
          bgColor={Color.bleu1}
          size="lg"
          borderRadius="$full"
          style={styles.imgMessage}
        >
          <AvatarFallbackText>{name}</AvatarFallbackText>
          <AvatarImage
            alt={Color.bleu1}
            source={{
              uri: url,
            }}
          />
        </Avatar>
        <VStack space="xs" style={styles.taille}>
          <Text style={styles.nameRdv}>{name}</Text>
          <Text style={styles.heures}>{date + " / " + heures}</Text>
        </VStack>
      </HStack>
    </>
  );
};

const styles = StyleSheet.create({
  boxRdv: {
    width: "100%",
    backgroundColor: Color.bleu2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: Border.br_15,
    // Ajoute de l'ombre sur Android
    elevation: 3,
    // Ajoute de l'ombre sur iOS
    shadowColor: "#636363",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  imgMessage: {
    alignSelf: "center",
  },
  taille: {
    width: "60%",
    alignSelf: "center",
  },
  nameRdv: {
    fontFamily: FontFamily.robo_medium,
    fontSize: FontSize.size_15,
    color: Color.bleu1,
  },
  heures: {
    fontFamily: FontFamily.robo_medium,
    fontSize: FontSize.size_15,
    color: Color.black,
  },
});

export default RdvForList;
