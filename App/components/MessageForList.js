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

const MessageForList = ({ name, url }) => {
  return (
    <HStack space="md" style={styles.boxMessage}>
      <Avatar
        bgColor={Color.bleu1}
        size="md"
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
        <Text style={styles.nameMessage}>{name}</Text>
        <Text style={styles.message}>
          Bonjour Christine, j’ai vu que ma mère...
        </Text>
      </VStack>
      <Text style={styles.heureMessage}>16h51</Text>
    </HStack>
  );
};

const styles = StyleSheet.create({
  boxMessage: {
    width: "95%",
    backgroundColor: Color.white,
    padding: 8,
    borderRadius: Border.br_15,
    // Ajoute de l'ombre sur Android
    elevation: 5,
    // Ajoute de l'ombre sur iOS
    shadowColor: "#636363",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  imgMessage: {
    alignSelf: "center",
  },
  taille: {
    width: "70%",
  },
  nameMessage: {
    fontFamily: FontFamily.robo_bold,
    fontSize: FontSize.size_14,
    color: Color.black,
  },
  message: {
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_14,
    color: Color.black,
    opacity: 0.8,
  },
  heureMessage: {
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_10,
    color: Color.black,
    opacity: 0.5,
  },
});

export default MessageForList;
