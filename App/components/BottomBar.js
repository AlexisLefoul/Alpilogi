import * as React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { FontFamily, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import BackgroundImage from "../assets/bg-botbar.png";
import BackgroundImageBtnAdd from "../assets/bgbtnadd.png";

export default function BottomBar({ active }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Image source={BackgroundImage} style={styles.backgroundImage} />
        <TouchableOpacity
          style={[styles.btnAdd, styles.btnLayout]}
          onPress={() => {
            navigation.navigate("TreatmentSheet");
          }}
        >
          <Image
            style={styles.btnLayout}
            contentFit="cover"
            source={BackgroundImageBtnAdd}
          />
          <Text style={[styles.text, styles.addIconStyle]}>+</Text>
        </TouchableOpacity>
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              navigation.navigate("HomeProfessionnel");
            }}
          >
            <Icon
              name="home-outline"
              size={active == "homePro" ? 32 : 30}
              color={active == "homePro" ? Color.white : Color.bleu2}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, styles.marginright]}
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
            style={styles.tab}
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

          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              navigation.navigate("Map");
            }}
          >
            <Icon
              name="location-outline"
              size={active == "map" ? 32 : 30}
              color={active == "map" ? Color.white : Color.bleu2}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        // Styles spécifiques à iOS
        justifyContent: "flex-end",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
      },
      android: {
        // Styles spécifiques à Android
        justifyContent: "flex-end",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
      },
      default: {
        // Styles pour les autres plateformes
        justifyContent: "flex-end",
      },
    }),
  },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 85,
  },
  btnAdd: {
    alignSelf: "center",
    paddingTop: 10,
  },
  btnLayout: {
    height: 70,
    width: 70,
  },
  text: {
    fontSize: 45,
    fontFamily: FontFamily.corps,
    color: Color.white,
    textAlign: "center",
    alignSelf: "center",
    position: "absolute",
  },
  addIconStyle: {
    ...Platform.select({
      ios: {
        top: "35%",
      },
      android: {
        top: "15%",
      },
      default: {
        top: "25%",
      },
    }),
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between", // Espacement équitable entre les onglets
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  tab: {
    alignItems: "center", // Centrer le contenu de chaque onglet
  },
  marginright: {
    marginRight: 70,
  },
});
