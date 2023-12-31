import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
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

// @TODO : voir comment améliorer le système "Fait" pour les rdv

export default function Planning() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);

  const list1 = [
    {
      id: "1",
      name: "John",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      heures: "9h00 - 10h30",
      toDo: false,
    },
    {
      id: "2",
      name: "Marie",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "11h00 - 12h00",
      toDo: false,
    },
    {
      id: "3",
      name: "Android",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "13h15 - 14h00",
      toDo: false,
    },
    {
      id: "4",
      name: "Loading",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "14h30 - 15h00",
      toDo: false,
    },
    {
      id: "5",
      name: "Please",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "16h00 - 17h30",
      toDo: false,
    },
  ];
  const list2 = [
    {
      id: "1",
      name: "Android",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "13h15 - 14h00",
      toDo: false,
    },
    {
      id: "2",
      name: "Loading",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "14h30 - 15h00",
      toDo: false,
    },
    {
      id: "3",
      name: "Please",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "16h00 - 17h30",
      toDo: false,
    },
  ];
  const list3 = [
    {
      id: "1",
      name: "John",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      heures: "9h00 - 10h30",
      toDo: false,
    },
    {
      id: "2",
      name: "Marie",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "11h00 - 12h00",
      toDo: false,
    },
    {
      id: "3",
      name: "Android",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "13h15 - 14h00",
      toDo: false,
    },
  ];
  const list4 = [
    {
      id: "1",
      name: "John",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      heures: "9h00 - 10h30",
      toDo: false,
    },
  ];
  const list5 = [
    {
      id: "1",
      name: "Loading",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "14h30 - 15h00",
      toDo: false,
    },
    {
      id: "2",
      name: "Please",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "16h00 - 17h30",
      toDo: false,
    },
  ];
  const list6 = [
    {
      id: "1",
      name: "John",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      heures: "9h00 - 10h30",
      toDo: false,
    },
    {
      id: "2",
      name: "Marie",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "11h00 - 12h00",
      toDo: false,
    },
    {
      id: "3",
      name: "Android",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "13h15 - 14h00",
      toDo: false,
    },
    {
      id: "4",
      name: "Loading",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "14h30 - 15h00",
      toDo: false,
    },
    {
      id: "5",
      name: "Please",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "16h00 - 17h30",
      toDo: false,
    },
  ];
  const list7 = [
    {
      id: "1",
      name: "John",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      heures: "9h00 - 10h30",
      toDo: false,
    },
    {
      id: "2",
      name: "Marie",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "11h00 - 12h00",
      toDo: false,
    },
    {
      id: "3",
      name: "Please",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heures: "16h00 - 17h30",
      toDo: false,
    },
  ];

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const getDayName = (date) => {
    const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    return dayNames[date.getDay()];
  };

  const renderSelectedDayRdvList = (index) => {
    const lists = [list1, list2, list3, list4, list5, list6, list7];
    return lists[index] || [];
  };

  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    const weekDaysList = getWeekDaysList(currentWeekStart);
    setDays(weekDaysList);
  }, [currentWeekStart]);

  useEffect(() => {
    const today = new Date();
    const currentDayIndex = days.findIndex(
      (day) => day.dayNumber === today.getDate()
    );
    const initialIndex = currentDayIndex >= 0 ? currentDayIndex : 0;

    setSelectedDayIndex(initialIndex);
    setList(renderSelectedDayRdvList(initialIndex));
  }, [days]);

  useEffect(() => {
    setList(renderSelectedDayRdvList(selectedDayIndex));
  }, [selectedDayIndex]);

  const getWeekDaysList = (date) => {
    const daysList = [];
    const dayOfWeek = date.getDay();
    const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const weekStart = new Date(date.setDate(diff));

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(weekStart);
      currentDate.setDate(weekStart.getDate() + i);
      const dayName = getDayName(currentDate);
      const dayNumber = currentDate.getDate();
      daysList.push({ dayName, dayNumber });
    }

    return daysList;
  };

  const handleLastWeek = () => {
    const prevWeekStart = new Date(currentWeekStart);
    prevWeekStart.setDate(prevWeekStart.getDate() - 7);
    setCurrentWeekStart(prevWeekStart);
    setSelectedDayIndex(0);
  };

  const handleNextWeek = () => {
    const nextWeekStart = new Date(currentWeekStart);
    nextWeekStart.setDate(nextWeekStart.getDate() + 7);
    setCurrentWeekStart(nextWeekStart);
    setSelectedDayIndex(0);
  };

  const handleDayClick = (index) => {
    setSelectedDayIndex(index);
    setList(renderSelectedDayRdvList(index));
  };

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
              <Text style={styles.sousTitle}>{`${
                currentWeekStart
                  .toLocaleString("default", { month: "long" })
                  .charAt(0)
                  .toUpperCase() +
                currentWeekStart
                  .toLocaleString("default", { month: "long" })
                  .slice(1)
              } ${currentWeekStart.getFullYear()}`}</Text>
              <HStack space="sm">
                <TouchableOpacity onPress={handleLastWeek} id="lastWeek">
                  <Icon name="chevron-back" size={25} color={Color.bleu1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNextWeek} id="nextWeek">
                  <Icon name="chevron-forward" size={25} color={Color.bleu1} />
                </TouchableOpacity>
              </HStack>
            </View>
            <View>
              <HStack space="lg" style={styles.boxCalendar}>
                {days.map((l, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleDayClick(index)}
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
                  todo={l.toDo}
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
