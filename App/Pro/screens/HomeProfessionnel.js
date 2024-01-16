import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  VStack,
  HStack,
} from "@gluestack-ui/themed";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import frLocale from "date-fns/locale/fr"; // Importez la localisation française
import BottomBar from "../components/BottomBar";
import LineSep from "../assets/line.png";
import PatientForlistHome from "../components/PatientForlistHome";
import MessageForList from "../components/MessageForList";
import data from "../datas.json";

export default function HomeProfessionnel() {
  const navigation = useNavigation();
  const [currentDateTime, setCurrentDateTime] = React.useState(new Date());

  const listPatients = data.patients;
  const listFamille = data.persFamilles;
  const listPatientsAvenir = data.patientsAvenir;

  // Mettez à jour la date et l'heure actuelle toutes les secondes
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Assurez-vous de nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = format(currentDateTime, "EEEE d MMMM yyyy, HH:mm", {
    locale: frLocale, // Utilisez la locale française
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.marginBotBar}>
        <View style={styles.top}>
          <View>
            <View style={styles.titleName}>
              <Text style={[styles.textTitre, styles.textBlack]}>
                Bonjour,{" "}
              </Text>
              <Text style={[styles.textTitre, styles.textSecondary]}>
                Christine
              </Text>
            </View>
            <Text style={styles.sousTitre}>{formattedDateTime}</Text>
          </View>
          <Avatar bgColor={Color.bleu1} size="md" borderRadius="$full">
            <AvatarFallbackText>Christine Bernard</AvatarFallbackText>
            <AvatarImage
              alt={Color.bleu1}
              source={{
                uri: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
          </Avatar>
        </View>
        <View style={styles.body}>
          <VStack space="sm" style={styles.containerInfo}>
            <Text style={styles.sousTitle}>Derniers patients consultés</Text>
            <Image style={styles.line} contentFit="cover" source={LineSep} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space="xl" style={styles.containerList}>
                {listPatients?.map((l) => (
                  <TouchableOpacity
                    key={l.id}
                    onPress={() =>
                      navigation.navigate("FichePatient", {
                        patientId: l.id,
                        from: "HP",
                      })
                    }
                  >
                    <PatientForlistHome
                      name={l.name}
                      lname={l.lname}
                      img={l.img}
                    />
                  </TouchableOpacity>
                ))}
              </HStack>
            </ScrollView>
          </VStack>
          <VStack space="sm" style={styles.containerInfo}>
            <Text style={styles.sousTitle}>Patients à venir</Text>
            <Image style={styles.line} contentFit="cover" source={LineSep} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space="xl" style={styles.containerList}>
                {listPatientsAvenir?.map((l) => (
                  <PatientForlistHome
                    name={l.name}
                    lname={l.lname}
                    img={l.img}
                    key={l.id}
                  />
                ))}
              </HStack>
            </ScrollView>
          </VStack>
          <VStack space="sm" style={styles.containerInfo}>
            <Text style={styles.sousTitle}>Derniers messages</Text>
            <Image style={styles.line} contentFit="cover" source={LineSep} />
            <VStack space="lg" style={styles.listMessage}>
              {listFamille?.map((l) => (
                <TouchableOpacity
                  key={l.id}
                  onPress={() => {
                    navigation.navigate("Chat", {
                      userDesti: l,
                    });
                  }}
                >
                  <MessageForList name={l.name} url={l.img} />
                </TouchableOpacity>
              ))}
            </VStack>
          </VStack>
        </View>
      </ScrollView>
      <BottomBar active="homePro" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  top: {
    flexDirection: "row",
    marginTop: 60,
    marginHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textBlack: { color: Color.black },
  textSecondary: { color: Color.orange },
  titleName: { flexDirection: "row" },
  textTitre: {
    fontSize: FontSize.title_size,
    fontFamily: FontFamily.title,
  },
  sousTitre: {
    color: Color.bleu1,
    opacity: 0.5,
    fontSize: FontSize.size_15,
    fontFamily: FontFamily.corps,
  },
  body: {
    height: "100%",
    marginLeft: 15,
  },
  containerInfo: {
    marginTop: 50,
  },
  sousTitle: {
    fontFamily: FontFamily.title,
    fontSize: FontSize.sous_title_size,
    color: Color.bleu1,
  },
  line: {
    height: 7,
  },
  containerList: {
    marginTop: 20,
    marginRight: 20,
  },
  text: {
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_16,
    color: Color.black,
  },
  marginBotBar: {
    marginBottom: 85,
  },
  boxMessage: {
    width: "95%",
    backgroundColor: Color.white,
    padding: 8,
    borderRadius: 15,
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
  imgMessage: {
    alignSelf: "center",
  },
  listMessage: {
    marginTop: 15,
    marginBottom: 10,
  },
});
