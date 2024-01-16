import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

export default function BottomBar({ active }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={active == "homeFam" ? styles.tab : null}
          onPress={() => {
            navigation.navigate("HomeFamily");
          }}
        >
          <Icon
            name="home-outline"
            size={active == "homeFam" ? 32 : 30}
            color={active == "homeFam" ? Color.white : Color.bleu2}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={active == "historyTreatmentSheets" ? styles.tab : null}
          onPress={() => {
            navigation.navigate("HistoryTreatmentSheets");
          }}
        >
          <Icon
            name="file-tray-full-outline"
            size={active == "historyTreatmentSheets" ? 32 : 30}
            color={
              active == "historyTreatmentSheets" ? Color.white : Color.bleu2
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={active == "chatslist" ? styles.tab : null}
          onPress={() => {
            navigation.navigate("ChatsList");
          }}
        >
          <Icon
            name="chatbox-ellipses-outline"
            size={active == "chatslist" ? 32 : 30}
            color={active == "chatslist" ? Color.white : Color.bleu2}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={active == "planning" ? styles.tab : null}
          onPress={() => {
            navigation.navigate("Planning");
          }}
        >
          <Icon
            name="calendar-outline"
            size={active == "planning" ? 32 : 30}
            color={active == "planning" ? Color.white : Color.bleu2}
          />
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
    paddingHorizontal: 30,
    backgroundColor: Color.bleu1,
    borderRadius: Border.br_40,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 13,
    backgroundColor: "#D6E4E580",
    borderRadius: Border.br_40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
});
