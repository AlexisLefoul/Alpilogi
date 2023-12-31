import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Avatar, AvatarImage, VStack, HStack } from "@gluestack-ui/themed";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

export default function PatientForlist({
  name,
  img,
  adress,
  lname,
  patientId,
}) {
  const navigation = useNavigation();
  adress = adress.split(",")[1];

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("FichePatient", {
          patientId: patientId,
          from: "TS",
        })
      }
    >
      <HStack space="4xl" style={styles.boxMessage}>
        <Avatar
          bgColor={Color.bleu1}
          size="lg"
          borderRadius="$full"
          style={styles.imgMessage}
        >
          <AvatarImage
            alt={Color.bleu1}
            source={{
              uri: img,
            }}
          />
        </Avatar>
        <VStack space="xs" style={styles.taille}>
          <Text style={styles.nameMessage}>
            {name} {lname}
          </Text>
          <HStack space="none">
            <Icon name="location-outline" size={20} color={Color.black50} />
            <Text style={styles.message}>{adress}</Text>
          </HStack>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boxMessage: {
    width: "100%",
    backgroundColor: Color.white,
    padding: 8,
    paddingLeft: 20,
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
    fontFamily: FontFamily.corps,
    fontSize: FontSize.sous_title_size,
    color: Color.black,
  },
  message: {
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_15,
    color: Color.black50,
  },
});
