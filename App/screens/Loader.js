import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Platform } from "react-native";

export default function Loader() {
  const marginImg =
    Platform.OS === "android" || Platform.OS === "ios"
      ? styles.marginAndroid
      : "";
  return (
    <View style={styles.loader}>
      <Image
        style={[styles.loaderIcon, marginImg]}
        contentFit="cover"
        source={require("../assets/loader_w_bg.gif")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loaderIcon: {
    width: "100%",
    height: "60%",
    display: "flex",
    margin: "auto",
  },
  marginAndroid: { marginVertical: "50%" },
  loader: {
    backgroundColor: "#fff",
    flex: 1,
    overflow: "hidden",
  },
});
