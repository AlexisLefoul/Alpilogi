import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { HStack, Image } from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import ErrorIcon from "../assets/erreurIcon.png";

export default function Error() {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.textContainer}>
          <Text style={styles.textBlack}>
            Erreur : la page est en développement !
          </Text>
        </Text>
        <Image
          size="2xl"
          borderRadius="$none"
          source={ErrorIcon}
          alt={Color.white}
          role="img"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeProfessionnel");
        }}
        style={styles.containerBackHome}
      >
        <HStack space="md" style={{ alignItems: "flex-end" }}>
          <Text style={styles.textBlack}>Revenir à l’accueil </Text>
          <Icon name="home-outline" size={32} color={Color.bleu1} />
        </HStack>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  textBlack: {
    color: Color.black,
  },
  textContainer: {
    fontSize: FontSize.size_26,
    fontFamily: FontFamily.title,
    marginBottom: 75,
    padding: 20,
  },
  textSecondary: { color: Color.orange },
  containerBackHome: {
    alignItems: "flex-end",
    margin: 20,
  },
});
