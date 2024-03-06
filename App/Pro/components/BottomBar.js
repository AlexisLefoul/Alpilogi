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
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import BackgroundImage from "../assets/bg-botbar.png";
import BackgroundImageBtnAdd from "../assets/bgbtnadd.png";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
          <Text style={[styles.text]}>+</Text>
        </TouchableOpacity>
        <View style={styles.bottomBar}>
          <View style={styles.bottomBarItem}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("HomeProfessionnel");
              }}
              style={styles.taille}
            >
              <View
                style={active == "homePro" ? styles.tab : styles.centerItem}
              >
                <Icon
                  name="home-outline"
                  size={active == "homePro" ? 28 : 27}
                  color={active == "homePro" ? Color.white : Color.bleu2}
                />
              </View>
              <Text style={styles.textBottombar}>Accueil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ChatsList");
              }}
              style={styles.taillemess}
            >
              <View
                style={
                  active == "chatslist" ? styles.tabformess : styles.formessicon
                }
              >
                <Icon
                  name="chatbox-ellipses-outline"
                  size={active == "chatslist" ? 28 : 27}
                  color={active == "chatslist" ? Color.white : Color.bleu2}
                />
              </View>
              <Text style={styles.textBottombar}>Messagerie</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomBarItem2}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Planning");
              }}
              style={[styles.marginLeft, styles.taille]}
            >
              <View
                style={active == "planning" ? styles.tab : styles.centerItem}
              >
                <Icon
                  name="calendar-outline"
                  size={active == "planning" ? 28 : 27}
                  color={active == "planning" ? Color.white : Color.bleu2}
                />
              </View>
              <Text style={styles.textBottombar}>Planning</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Map");
              }}
              style={styles.taille}
            >
              <View style={active == "map" ? styles.tab : styles.centerItem}>
                <Icon
                  name="location-outline"
                  size={active == "map" ? 28 : 27}
                  color={active == "map" ? Color.white : Color.bleu2}
                />
              </View>
              <Text style={styles.textBottombar}>Carte</Text>
            </TouchableOpacity>
          </View>
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
  btnLayout: {
    alignSelf: "center",
    height: 70,
    width: 70,
    backgroundColor: Color.bleu1,
    borderRadius: 100,
  },
  text: {
    fontSize: 45,
    fontFamily: FontFamily.corps,
    color: Color.white,
    alignSelf: "center",
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  bottomBarItem: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: "100%",
    gap: 15,
  },
  bottomBarItem2: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: "100%",
    gap: 25,
  },
  tab: {
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 6,
    backgroundColor: "#D6E4E580",
    borderRadius: Border.br_40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  centerItem: {
    alignSelf: "center",
    paddingVertical: 6,
  },
  formessicon: {
    alignSelf: "center",
    paddingVertical: 6,
  },
  textBottombar: {
    textAlign: "center",
    marginTop: 2,
    color: Color.white,
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_12,
  },
  tabformess: {
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 5,
    width: "55%",
    backgroundColor: "#D6E4E580",
    borderRadius: Border.br_40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  marginLeft: {
    marginLeft: 10,
  },
  taille: {
    width: "25%",
  },
  taillemess: {
    width: "32%",
  },
});
