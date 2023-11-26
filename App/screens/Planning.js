import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Image,
} from "react-native";
import {
  Input,
  InputSlot,
  InputIcon,
  InputField,
  SearchIcon,
  VStack,
  HStack,
} from "@gluestack-ui/themed";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import BottomBar from "../components/BottomBar";
import RdvForList from "../components/RdvForList";

export default function Planning() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState(""); // État pour stocker le texte de recherche
  const [selectedDayIndex, setSelectedDayIndex] = React.useState(3);
  const [list, setList] = React.useState([]);

  const list1 = [
    {
      id: "1",
      name: "John",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      heures: "9h00 - 10h30",
    },
    {
      id: "2",
      name: "Marie",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "11h00 - 12h00",
    },
    {
      id: "3",
      name: "Android",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "13h15 - 14h00",
    },
    {
      id: "4",
      name: "Loading",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "14h30 - 15h00",
    },
    {
      id: "5",
      name: "Please",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "16h00 - 17h30",
    },
  ];
  const list2 = [
    {
      id: "1",
      name: "Android",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "13h15 - 14h00",
    },
    {
      id: "2",
      name: "Loading",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "14h30 - 15h00",
    },
    {
      id: "3",
      name: "Please",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "16h00 - 17h30",
    },
  ];
  const list3 = [
    {
      id: "1",
      name: "John",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      heures: "9h00 - 10h30",
    },
    {
      id: "2",
      name: "Marie",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "11h00 - 12h00",
    },
    {
      id: "3",
      name: "Android",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "13h15 - 14h00",
    },
  ];
  const list4 = [
    {
      id: "1",
      name: "John",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      heures: "9h00 - 10h30",
    },
  ];
  const list5 = [
    {
      id: "1",
      name: "Loading",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "14h30 - 15h00",
    },
    {
      id: "2",
      name: "Please",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "16h00 - 17h30",
    },
  ];
  const list6 = [
    {
      id: "1",
      name: "John",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      heures: "9h00 - 10h30",
    },
    {
      id: "2",
      name: "Marie",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "11h00 - 12h00",
    },
    {
      id: "3",
      name: "Android",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "13h15 - 14h00",
    },
    {
      id: "4",
      name: "Loading",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "14h30 - 15h00",
    },
    {
      id: "5",
      name: "Please",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "16h00 - 17h30",
    },
  ];
  const list7 = [
    {
      id: "1",
      name: "John",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      heures: "9h00 - 10h30",
    },
    {
      id: "2",
      name: "Marie",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "11h00 - 12h00",
    },
    {
      id: "3",
      name: "Please",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "16h00 - 17h30",
    },
  ];

  // Fonction pour obtenir le nom du jour abrégé
  const getDayName = (date) => {
    const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    return dayNames[date.getDay()];
  };

  // Fonction pour obtenir une liste de jours
  const getDaysList = () => {
    const daysList = [];
    const today = new Date();

    for (let i = -3; i <= 3; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const dayName = getDayName(date);
      const dayNumber = date.getDate();
      daysList.push({ dayName, dayNumber });
    }

    return daysList;
  };

  // Utilisation de la fonction pour obtenir la liste de jours
  const days = getDaysList();

  const renderSelectedDayRdvList = () => {
    switch (selectedDayIndex) {
      case 0:
        setList(list1);
        break;
      case 1:
        setList(list2);
        break;
      case 2:
        setList(list3);
        break;
      case 3:
        setList(list4);
        break;
      case 4:
        setList(list5);
        break;
      case 5:
        setList(list6);
        break;
      case 6:
        setList(list7);
        break;
      default:
        return [];
    }
  };

  React.useEffect(() => {
    setList(list3);
  }, []);

  const filteredList = list.filter((rdv) =>
    rdv.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.marginBotBar}>
        <View style={styles.top}>
          <Input variant="rounded" size="lg" style={styles.seachbar}>
            <InputSlot pl="$3">
              <InputIcon as={SearchIcon} style={styles.seachbarIcon} />
            </InputSlot>
            <InputField
              placeholder="Chercher un rendez-vous"
              style={styles.seachbarField}
              placeholderTextColor={Color.white}
              onChangeText={(text) => setSearchText(text)}
            />
          </Input>
          <TouchableOpacity
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              navigation.navigate("Planning");
            }}
            style={styles.icon}
          >
            <Icon name="add" size={26} color={Color.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <VStack space="md" style={styles.containerInfo}>
            <View style={styles.headercalendar}>
              <Text style={styles.sousTitle}>Juin 2023</Text>
              <HStack space="sm">
                <Icon name="chevron-back" size={25} color={Color.bleu1} />
                <Icon name="chevron-forward" size={25} color={Color.bleu1} />
              </HStack>
            </View>
            <View>
              <HStack space="lg" style={styles.boxCalendar}>
                {days.map((l, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSelectedDayIndex(index);
                      renderSelectedDayRdvList();
                    }}
                  >
                    <VStack
                      space="md"
                      style={[
                        selectedDayIndex === index
                          ? styles.active
                          : styles.center,
                      ]}
                    >
                      <Text
                        style={[
                          styles.dayRdv,
                          selectedDayIndex === index
                            ? styles.textBlack
                            : styles.textbleu1,
                        ]}
                      >
                        {l.dayName}
                      </Text>
                      <Text
                        style={[
                          styles.date,
                          selectedDayIndex === index
                            ? styles.textBlack
                            : styles.textbleu1,
                        ]}
                      >
                        {l.dayNumber}
                      </Text>
                    </VStack>
                  </TouchableOpacity>
                ))}
              </HStack>
            </View>
          </VStack>
          <VStack space="sm" style={styles.containerInfo}>
            <Text style={styles.sousTitle}>Rendez-vous</Text>
            <VStack space="lg" style={styles.listRdv}>
              {filteredList.map((l) => (
                <RdvForList
                  name={l.name}
                  url={l.img}
                  heures={l.heures}
                  key={l.id}
                />
              ))}
            </VStack>
          </VStack>
        </View>
      </ScrollView>
      <BottomBar active="planning" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  top: {
    flexDirection: "row",
    marginTop: 60,
    marginRight: 15,
    marginLeft: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  marginBotBar: {
    marginTop: 20,
    marginBottom: 85,
  },
  textBlack: { color: Color.black },
  textbleu1: { color: Color.bleu1 },
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
  seachbar: {
    width: "82%",
    backgroundColor: Color.bleu1,
  },
  seachbarIcon: {
    color: Color.white,
  },
  seachbarField: {
    color: Color.white,
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.corps,
  },
  icon: {
    backgroundColor: Color.bleu1,
    borderRadius: Border.br_40,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 8,
    paddingTop: 8,
  },
  boxCalendar: {
    width: "95%",
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.bleu2,
    borderRadius: Border.br_15,
  },
  dayRdv: {
    fontFamily: FontFamily.robo_medium,
    fontSize: FontSize.size_15,
  },
  date: {
    fontFamily: FontFamily.robo_bold,
    fontSize: FontSize.size_17,
  },
  center: {
    alignItems: "center",
  },
  active: {
    backgroundColor: Color.white,
    borderRadius: Border.br_40,
    paddingVertical: 15,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  headercalendar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
  },
  containerInfo: {
    marginTop: 50,
  },
  sousTitle: {
    fontFamily: FontFamily.title,
    fontSize: FontSize.sous_title_size,
    color: Color.black,
  },
  listRdv: {
    marginTop: 15,
    marginBottom: 15,
  },
});
