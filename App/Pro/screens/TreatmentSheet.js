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
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import {
  Input,
  InputSlot,
  InputIcon,
  InputField,
  SearchIcon,
  VStack,
} from "@gluestack-ui/themed";
import LineSep from "../assets/line.png";
import Icon from "react-native-vector-icons/Octicons";
import PatientForlist from "../components/PatientForList";
import data from "../datas.json";

export default function TreatmentSheet() {
  const navigation = useNavigation();
  const listPatients = data.patients;
  const [searchText, setSearchText] = React.useState(""); // État pour stocker le texte de recherche
  const filteredList = listPatients.filter(
    (p) =>
      p.name.toLowerCase().includes(searchText.toLowerCase()) ||
      p.lname.toLowerCase().includes(searchText.toLowerCase())
  );

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
          <Text style={[styles.textTitre]}>Remplir une feuille de soin</Text>
        </View>
        <Input
          variant="underlined"
          size="lg"
          style={styles.seachbar}
          borderBottomWidth={0}
        >
          <InputField
            placeholder="Rechercher un patient"
            style={styles.seachbarField}
            placeholderTextColor={Color.bleu1}
            onChangeText={(text) => setSearchText(text)}
          />
          <InputSlot pl="$3">
            <InputIcon as={SearchIcon} style={styles.seachbarIcon} />
          </InputSlot>
        </Input>
        <Image style={styles.line} contentFit="cover" source={LineSep} />
        <VStack space="xl" style={styles.containerList}>
          {filteredList?.map((l) => (
            <PatientForlist
              name={l.name}
              lname={l.lname}
              img={l.img}
              key={l.id}
              adress={l.adresse}
              patientId={l.id}
            />
          ))}
        </VStack>
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
  body: {
    marginHorizontal: "5%",
    marginTop: 20,
  },
  textTitre: {
    fontSize: FontSize.title_size,
    fontFamily: FontFamily.title,
    color: Color.black,
  },
  seachbar: {
    marginTop: 30,
    borderColor: Color.bleu2,
  },
  seachbarIcon: {
    color: Color.bleu1,
  },
  seachbarField: {
    color: Color.black,
    fontSize: FontSize.size_17,
    fontFamily: FontFamily.corps,
  },
  containerList: {
    marginTop: 20,
    marginBottom: 20,
  },
  line: {
    height: 5,
  },
});
