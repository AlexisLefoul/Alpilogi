import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, AvatarImage, VStack, HStack } from "@gluestack-ui/themed";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import Icon from "react-native-vector-icons/Ionicons";

const RdvForList = ({ name, url, heures }) => {
  return (
    <HStack space="md" style={styles.boxRdv}>
      <Avatar
        bgColor={Color.bleu1}
        size="lg"
        borderRadius="$full"
        style={styles.imgMessage}
      >
        <AvatarImage
          source={{
            uri: url,
          }}
        />
      </Avatar>
      <VStack space="xs" style={styles.taille}>
        <Text style={styles.nameRdv}>{name}</Text>
        <Text style={styles.heures}>{heures}</Text>
      </VStack>
      <View style={styles.icon}>
        <Icon name="ellipsis-vertical" size={25} color={Color.bleu1} />
      </View>
    </HStack>
  );
};

const styles = StyleSheet.create({
  boxRdv: {
    width: "95%",
    backgroundColor: Color.bleu3,
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
  heureMessage: {
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_10,
    color: Color.black,
    opacity: 0.5,
  },
  icon: {
    alignSelf: "center",
  },
});

export default RdvForList;
