import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { VStack, HStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconOcticons from "react-native-vector-icons/Octicons";
import LineSep from "../assets/line.png";

export default function BoxAction({ nav, text, icon, last }) {
  const navigation = useNavigation();
  return (
    <VStack paddingBottom={5}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(nav);
        }}
      >
        <HStack style={styles.containerAction}>
          <HStack space="lg" alignItems="center">
            <MaterialCommunityIcons name={icon} size={24} color={Color.bleu1} />
            <Text style={styles.text}>{text}</Text>
          </HStack>
          <IconOcticons name="chevron-right" size={24} color={Color.bleu1} />
        </HStack>
      </TouchableOpacity>
      <Image
        style={last ? { display: "none" } : styles.line}
        contentFit="cover"
        source={LineSep}
      />
    </VStack>
  );
}

const styles = StyleSheet.create({
  containerAction: {
    padding: 18,
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    height: 3,
    width: "100%",
  },
  text: {
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.title,
    color: Color.black,
  },
});
