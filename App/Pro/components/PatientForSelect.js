import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  Avatar,
  AvatarImage,
  VStack,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export default function PatientForSelect({
  id,
  name,
  lname,
  img,
  onSelect,
  sp,
}) {
  const isActive = sp === id;

  const handlePress = () => {
    onSelect(id, isActive ? false : true);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <VStack space="md" style={styles.center}>
        <Avatar
          bgColor={Color.bleu1}
          size="lg"
          borderRadius="$full"
          borderColor={isActive ? Color.orange : null}
          borderWidth={isActive ? 2 : 0}
        >
          <AvatarFallbackText>{name + " " + lname}</AvatarFallbackText>
          <AvatarImage source={{ uri: img }} alt={Color.bleu1} />
        </Avatar>
        <Text
          style={[
            styles.text,
            isActive ? styles.textSecondary : styles.textPrimary,
          ]}
        >
          {name}
        </Text>
      </VStack>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
  text: {
    fontFamily: FontFamily.robo_medium,
    fontSize: FontSize.size_15,
  },
  textPrimary: {
    color: Color.bleu1,
  },
  textSecondary: {
    color: Color.orange,
  },
});
