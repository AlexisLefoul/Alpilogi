import * as React from "react";
import { StyleSheet, Text, Platform } from "react-native";
import { Avatar, AvatarImage, VStack } from "@gluestack-ui/themed";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export default function PatientForlistHome({ name, img }) {
  return (
    <VStack space="md" style={styles.center}>
      <Avatar bgColor={Color.bleu1} size="lg" borderRadius="$full">
        <AvatarImage source={{ uri: img }} alt={Color.bleu1} />
      </Avatar>
      <Text style={styles.text}>{name}</Text>
    </VStack>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
  text: {
    fontFamily: FontFamily.robo_medium,
    fontSize: FontSize.size_15,
    color: Color.bleu1,
  },
});
