import * as React from "react";
import { StyleSheet, View, Text, Platform, ScrollView } from "react-native";
import { Avatar, AvatarFallbackText, AvatarImage } from "@gluestack-ui/themed";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import BottomBar from "../components/BottomBar";

export default function Map() {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.top}>
          <View></View>
          <View></View>
        </View>
        <View style={styles.body}>
          <Text>ss</Text>
        </View>
      </ScrollView>
      <BottomBar active="map" />
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
  },
});
