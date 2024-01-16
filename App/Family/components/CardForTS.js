import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { VStack } from "@gluestack-ui/themed";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const CardForTS = ({ color, img, value }) => {
  return (
    <VStack space="md" style={styles.containerSoin}>
      <View
        style={{
          borderWidth: 3,
          borderColor: color,
          borderRadius: 15,
          padding: 20,
          backgroundColor: "transparent",
        }}
      >
        <Image style={styles.img} source={img} resizeMode="contain" />
      </View>
      <Text style={styles.textValue}>{value}</Text>
    </VStack>
  );
};

const styles = StyleSheet.create({
  containerSoin: {
    alignItems: "center",
  },
  img: {
    height: 60,
    width: 60,
    alignSelf: "center",
  },
  textValue: {
    fontSize: FontSize.size_15,
    fontFamily: FontFamily.corps,
    textAlign: "center",
    color: Color.black,
  },
});

export default CardForTS;
