import * as React from "react";
import { StyleSheet, View, Text, Image, Platform } from "react-native";
import BtnPrimary from "../components/BtnPrimary";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const stylesImages =
    Platform.OS === "android" || Platform.OS === "ios"
      ? styles.imageAndroid
      : styles.top;
      
  return (
    <View style={styles.home}>
      <View style={stylesImages}>
        <Image
          style={styles.imageContainer}
          resizeMode="cover"
          resizeMethod="scale"
          source={require("../assets/Image_home_pro.png")}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.textContainer}>
          <Text style={styles.textSecondary}>Digitalisez </Text>
          <Text style={styles.textBlack}>vos soins à domicile</Text>
        </Text>
        <View style={styles.btns}>
          <BtnPrimary
            mode="contained"
            text="Se connecter"
            outline={false}
            onPress={() => navigation.navigate("LogInProfessionnel")}
          ></BtnPrimary>
          <BtnPrimary
            mode="outlined"
            text="S'inscrire"
            outline={true}
            onPress={() => navigation.navigate("RegisterProfessionnel")}
          ></BtnPrimary>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btns: {
    alignItems: "center",
    gap: 20,
  },
  textSecondary: {
    color: Color.orange,
  },
  textBlack: {
    color: Color.black,
  },
  textContainer: {
    fontSize: FontSize.title_size,
    fontFamily: FontFamily.title,
    textAlign: "center",
    width: "100%",
    marginBottom: "12%",
  },
  top: {
    height: "56%",
    width: "85%",
    margin: "auto",
    marginTop: "8%",
    marginBottom: 0,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    marginTop: "8%",
  },
  home: {
    backgroundColor: Color.bleu3,
    flex: 1,
    overflow: "hidden",
  },
  imageContainer: {
    height: "100%",
    borderRadius: Border.br_40,
  },
  imageAndroid: {
    height: "50%",
    width: "85%",
    margin: "6%",
    marginTop: "8%",
    marginBottom: 0,
  },
});
