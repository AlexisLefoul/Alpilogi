import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import data from "../datas.json";
import {
  VStack,
  HStack,
  useToast,
  Toast,
  ToastTitle,
  ToastDescription,
} from "@gluestack-ui/themed";
import PatientForSelect from "../components/PatientForSelect";
import DateTimePicker from "@react-native-community/datetimepicker";
import LineSep from "../assets/line.png";
import { format } from "date-fns";
import frLocale from "date-fns/locale/fr";
import BtnSelect from "../components/BtnSelect";

export default function AddRdv() {
  const navigation = useNavigation();
  const toast = useToast();
  const listPatients = data.patients;
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [timeStart, setTimeStart] = useState(new Date());
  const [showTimeStart, setShowTimeStart] = useState(false);
  const [timeEnd, setTimeEnd] = useState(new Date());
  const [showTimeEnd, setShowTimeEnd] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedRecurrence, setSelectedRecurrence] = useState(null);
  const [rdv, setRdv] = useState({
    id: "",
    idPatient: "",
    date: "",
    heure: "",
    recurrence: "",
  });

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    const newDate = new Date();
    if (currentDate > newDate) {
      setShow(Platform.OS === "ios");
      setDate(currentDate);
    } else {
      setShow(false);
      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast nativeID={"toast-" + id} action="error" variant="accent">
              <VStack space="xs">
                <ToastTitle>Erreur</ToastTitle>
                <ToastDescription>
                  La date doit être plus grande que la date actuelle !
                </ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
    }
  };

  const showDatePicker = () => {
    setShow(true);
    setShowTimeStart(false);
    setShowTimeEnd(false);
  };

  const onChangeTimeStart = (event, selectedTime) => {
    const currentTime = selectedTime || timeStart;
    setShowTimeStart(Platform.OS === "ios"); // Pour iOS, affiche le composant DatePicker en mode modal
    setTimeStart(currentTime);
  };

  const showTimePickerStart = () => {
    setShow(false);
    setShowTimeStart(true);
    setShowTimeEnd(false);
  };

  const onChangeTimeEnd = (event, selectedTime) => {
    const currentTime = selectedTime || timeEnd;
    const newTimeEnd = new Date(currentTime);

    // Vérifier si la nouvelle heure de fin est plus grande que l'heure de début
    if (newTimeEnd > timeStart) {
      setShowTimeEnd(Platform.OS === "ios");
      setTimeEnd(newTimeEnd);
    } else {
      setShowTimeEnd(false);
      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast nativeID={"toast-" + id} action="error" variant="accent">
              <VStack space="xs">
                <ToastTitle>Erreur</ToastTitle>
                <ToastDescription>
                  L'heure de fin doit être plus grande que l'heure de début !
                </ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
    }
  };

  const showTimePickerEnd = () => {
    setShow(false);
    setShowTimeStart(false);
    setShowTimeEnd(true);
  };

  const handlePatientSelect = (id, isActive) => {
    if (isActive) {
      // Si un patient est déjà sélectionné, ne faites rien
      if (selectedPatient === id) {
        return;
      }

      // Sinon, mettez à jour l'ID du patient sélectionné
      setSelectedPatient(id);
    } else {
      // Désélectionnez le patient
      setSelectedPatient(null);
    }

    // Mettez à jour le rendez-vous
    updateRdv();
  };

  const handleRecurrenceSelect = (value, isActive) => {
    if (isActive) {
      if (selectedRecurrence === value) {
        return;
      }
      setSelectedRecurrence(value);
    } else {
      setSelectedRecurrence(null);
    }
    // Mettez à jour le rendez-vous
    updateRdv();
  };

  const updateRdv = () => {
    setRdv((prevRdv) => ({
      ...prevRdv,
      idPatient: selectedPatient || "",
      recurrence: selectedRecurrence || "",
      date: format(date, "EEEE dd MMMM yyyy", { locale: frLocale }),
      heure:
        format(timeStart, "HH:mm", { locale: frLocale }).replace(":", "h") +
        " - " +
        format(timeEnd, "HH:mm", { locale: frLocale }).replace(":", "h"),
    }));
  };

  const submitAdd = () => {
    if (selectedPatient && selectedRecurrence) {
      // Enregistrez le rendez-vous ou effectuez d'autres actions ici
      console.log(rdv);
      navigation.navigate("Planning");
    } else {
      // Affichez un message d'erreur ou prenez d'autres mesures nécessaires
      console.log("Veuillez sélectionner un patient et une récurrence");
    }
  };

  useEffect(() => {
    updateRdv();
  }, [selectedPatient, selectedRecurrence, date, timeStart, timeEnd]);

  return (
    <ScrollView>
      <View style={styles.top}>
        <View>
          <Octicons
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
            <Text style={styles.textBlack}>Créer un nouveau </Text>
            <Text style={styles.textSecondary}>rendez-vous</Text>
          </Text>
        </View>
        <VStack space="3xl">
          <VStack space="sm" style={styles.containerInfo}>
            <Text style={styles.sousTitle}>Patient concerné</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space="xl" style={styles.containerList}>
                {listPatients?.map((l) => (
                  <PatientForSelect
                    key={l.id}
                    id={l.id}
                    name={l.name}
                    lname={l.lname}
                    img={l.img}
                    sp={selectedPatient}
                    onSelect={(id, isActive) =>
                      handlePatientSelect(id, isActive)
                    }
                  />
                ))}
              </HStack>
            </ScrollView>
          </VStack>
          <VStack space="sm">
            <Text style={styles.sousTitle}>Date</Text>
            <TouchableOpacity onPress={showDatePicker}>
              <HStack style={styles.date}>
                <Text style={styles.dateText}>
                  {format(date, "EEEE dd MMMM yyyy", { locale: frLocale })}
                </Text>
                <Ionicons name="calendar" size={30} color={Color.bleu1} />
              </HStack>
              <Image style={styles.line} contentFit="cover" source={LineSep} />
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChangeDate}
              />
            )}
          </VStack>
          <HStack style={styles.containerTime}>
            <VStack space="sm">
              <Text style={styles.sousTitle}>Heure de début</Text>
              <TouchableOpacity onPress={showTimePickerStart}>
                <HStack style={styles.date}>
                  <Text style={styles.dateText}>
                    {format(timeStart, "HH : mm", { locale: frLocale })}
                  </Text>
                </HStack>
                <Image
                  style={styles.lineTime}
                  contentFit="cover"
                  source={LineSep}
                />
              </TouchableOpacity>
              {showTimeStart && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={timeStart}
                  mode="time"
                  is24Hour={true}
                  display="default"
                  onChange={onChangeTimeStart}
                />
              )}
            </VStack>
            <VStack space="sm">
              <Text style={styles.sousTitle}>Heure de fin</Text>
              <TouchableOpacity onPress={showTimePickerEnd}>
                <HStack style={styles.date}>
                  <Text style={styles.dateText}>
                    {format(timeEnd, "HH : mm", { locale: frLocale })}
                  </Text>
                </HStack>
                <Image
                  style={styles.lineTime}
                  contentFit="cover"
                  source={LineSep}
                />
              </TouchableOpacity>
              {showTimeEnd && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={timeEnd}
                  mode="time"
                  is24Hour={true}
                  display="default"
                  onChange={onChangeTimeEnd}
                />
              )}
            </VStack>
          </HStack>
          <VStack space="sm">
            <Text style={styles.sousTitle}>Récurrence</Text>
            <HStack space="md" style={styles.btns}>
              <BtnSelect
                text="Jamais"
                sr={selectedRecurrence}
                onSelect={(value, isActive) =>
                  handleRecurrenceSelect(value, isActive)
                }
              />
              <BtnSelect
                text="Tous les jours"
                sr={selectedRecurrence}
                onSelect={(value, isActive) =>
                  handleRecurrenceSelect(value, isActive)
                }
              />
              <BtnSelect
                text="Toutes les semaines"
                sr={selectedRecurrence}
                onSelect={(value, isActive) =>
                  handleRecurrenceSelect(value, isActive)
                }
              />
            </HStack>
            <HStack space="md" style={styles.btns}>
              <BtnSelect
                text="Toutes les 2 semaines"
                sr={selectedRecurrence}
                onSelect={(value, isActive) =>
                  handleRecurrenceSelect(value, isActive)
                }
              />
              <BtnSelect
                text="Tous les mois"
                sr={selectedRecurrence}
                onSelect={(value, isActive) =>
                  handleRecurrenceSelect(value, isActive)
                }
              />
            </HStack>
            <HStack space="md" style={styles.btns}>
              <BtnSelect
                text="Tous les ans"
                sr={selectedRecurrence}
                onSelect={(value, isActive) =>
                  handleRecurrenceSelect(value, isActive)
                }
              />
            </HStack>
          </VStack>
          <View style={{ marginBottom: 20 }}>
            <TouchableOpacity onPress={submitAdd}>
              <Text style={styles.btn}>Créer le rendez-vous</Text>
            </TouchableOpacity>
          </View>
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
  containerInfo: {
    marginTop: 40,
  },
  sousTitle: {
    fontFamily: FontFamily.robo_medium,
    fontSize: FontSize.size_17,
    color: Color.black,
  },
  containerList: {
    marginTop: 20,
    marginRight: 20,
  },
  line: {
    height: 3,
  },
  lineTime: {
    height: 3,
    width: "110%",
  },
  date: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  dateText: {
    fontFamily: FontFamily.robo_medium,
    fontSize: FontSize.size_14,
    color: Color.bleu1,
  },
  containerTime: {
    gap: 50,
  },
  btns: {
    marginBottom: 10,
    ...Platform.select({
      ios: {
        justifyContent: "space-evenly",
      },
    }),
  },
  btn: {
    paddingHorizontal: 35,
    paddingVertical: 12,
    backgroundColor: Color.bleu1,
    color: Color.white,
    fontFamily: FontFamily.corps,
    borderRadius: Border.br_15,
    fontSize: FontSize.corps_size,
    alignSelf: "center",
    ...Platform.select({
      ios: {
        overflow: "hidden",
        borderRadius: 5,
      },
    }),
  },
});
