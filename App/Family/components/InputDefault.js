import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const InputDefault = ({ mode, onchange, value, placeholder }) => {
  const handleTextChange = (input) => {
    // Retirer les espaces du texte saisi
    const formattedText = input.replace(/\s/g, "");
    onchange(formattedText);
  };
  return (
    <TextInput
      style={[styles.input]}
      inputMode={mode}
      onChangeText={handleTextChange}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={Color.bleu1}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    borderRadius: Border.br_15,
    backgroundColor: Color.bleu2,
    marginVertical: 10,
    padding: 10,
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_14,
  },
});

export default InputDefault;
