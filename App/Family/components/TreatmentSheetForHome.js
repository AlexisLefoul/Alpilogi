import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { VStack } from "@gluestack-ui/themed";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import IconFeather from "react-native-vector-icons/Feather";

export default function ({ date }) {
  return (
    <VStack space="sm" style={styles.center}>
      <IconFeather name="file-text" size={45} color={Color.bleu1} />
      <Text style={styles.text}>{date}</Text>
    </VStack>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
  text: {
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_14,
    color: Color.black,
  },
});
