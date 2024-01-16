import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const BtnSelect = ({ text, sr, onSelect }) => {
  const isActive = sr === text;
  const handlePress = () => {
    onSelect(text, isActive ? false : true);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.btn, isActive ? styles.btnactive : null]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: Color.bleu3,
    color: Color.bleu1,
    fontFamily: FontFamily.robo_medium,
    borderRadius: Border.br_40,
    borderWidth: 1,
    borderColor: Color.bleu1,
    fontSize: 12,
    ...Platform.select({
      ios: {
        overflow: "hidden",
        borderRadius: Border.br_15,
        fontSize: FontSize.size_14,
      },
    }),
  },
  btnactive: {
    backgroundColor: Color.bleu1,
    color: Color.white,
  },
});

export default BtnSelect;
