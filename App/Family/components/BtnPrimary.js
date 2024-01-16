import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet, Platform } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const BtnPrimary = ({ text, mode, outline, onPress }) => {
  const labelDefaultStyle = outline ? styles.labelBtnOutline : styles.labelBtn;
  const contentStyle = outline ? styles.btnPrimaryOutline : styles.btnPrimary;
  const borderStyle = outline ? styles.borderOutline : styles.border;
  const labelAndroidStyle =
    (Platform.OS === "android" || Platform.OS === "ios") && outline
      ? styles.androidLabelBtnOutline
      : styles.androidLabelBtn;

  const labelStyle =
    Platform.OS === "android" || Platform.OS === "ios"
      ? labelAndroidStyle
      : labelDefaultStyle;

  return (
    <Button
      mode={mode}
      labelStyle={labelStyle}
      contentStyle={contentStyle}
      style={borderStyle}
      onPress={onPress}
      buttonColor="none"
    >
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  labelBtnOutline: {
    color: Color.bleu1,
    fontSize: FontSize.corps_size,
    fontFamily: FontFamily.corps,
  },
  labelBtn: {
    color: Color.white,
    fontSize: FontSize.corps_size,
    fontFamily: FontFamily.corps,
  },
  btnPrimaryOutline: {
    height: 60,
    width: 230,
  },
  btnPrimary: {
    height: 60,
    width: 230,
    backgroundColor: Color.bleu1,
  },
  borderOutline: {
    borderColor: Color.bleu1,
    borderWidth: 1,
    borderRadius: Border.br_15,
  },
  border: {
    borderRadius: Border.br_15,
  },
  androidLabelBtnOutline: {
    fontSize: FontSize.sous_title_size,
    color: Color.bleu1,
    fontFamily: FontFamily.corps,
  },
  androidLabelBtn: {
    color: Color.white,
    fontSize: FontSize.sous_title_size,
    fontFamily: FontFamily.corps,
  },
});

export default BtnPrimary;
