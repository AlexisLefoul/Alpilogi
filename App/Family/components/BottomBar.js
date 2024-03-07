import * as React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

export default function BottomBar({ active }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeFamily");
          }}
        >
          <View style={active == "homeFam" ? styles.tab : styles.centerItem}>
            <Icon
              name="home-outline"
              size={active == "homeFam" ? 30 : 29}
              color={active == "homeFam" ? Color.white : Color.bleu2}
            />
          </View>
          <Text style={styles.textBottombar}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HistoryTreatmentSheets");
          }}
        >
          <View
            style={
              active == "historyTreatmentSheets"
                ? styles.tab
                : styles.centerItem
            }
          >
            <Icon
              name="file-tray-full-outline"
              size={active == "historyTreatmentSheets" ? 30 : 29}
              color={
                active == "historyTreatmentSheets" ? Color.white : Color.bleu2
              }
            />
          </View>
          <Text style={styles.textBottombar}>Soins</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ChatsList");
          }}
        >
          <View style={active == "chatslist" ? styles.tab : styles.centerItem}>
            <Icon
              name="chatbox-ellipses-outline"
              size={active == "chatslist" ? 32 : 30}
              color={active == "chatslist" ? Color.white : Color.bleu2}
            />
          </View>
          <Text style={styles.textBottombar}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Planning");
          }}
        >
          <View style={active == "planning" ? styles.tab : styles.centerItem}>
            <Icon
              name="calendar-outline"
              size={active == "planning" ? 32 : 30}
              color={active == "planning" ? Color.white : Color.bleu2}
            />
          </View>
          <Text style={styles.textBottombar}>Rendez-vous</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    marginBottom: 5,
    paddingHorizontal: 5,
    ...Platform.select({
      ios: {
        justifyContent: "flex-end",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
      },
      android: {
        justifyContent: "flex-end",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
      },
      default: {
        justifyContent: "flex-end",
      },
    }),
  },
  bottomBar: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    backgroundColor: Color.bleu1,
    borderRadius: Border.br_40,
  },
  tab: {
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 8,
    backgroundColor: "#D6E4E580",
    borderRadius: Border.br_40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  centerItem: {
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 8,
  },
  textBottombar: {
    textAlign: "center",
    marginTop: 2,
    color: Color.white,
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_12,
  },
});
