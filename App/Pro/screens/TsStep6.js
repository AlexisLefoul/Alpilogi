import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { HStack, Image } from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import Check from "../assets/check.png";

export default function TsStep6({ route }) {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const { patientName } = route.params;
  const { treaSh } = route.params;
  console.log(treaSh);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, []);

  return isLoading ? (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.textContainer}>
          <Text style={styles.textBlack}>
            Nous avons actualisé la feuille de soin de
          </Text>
          <Text style={styles.textSecondary}> {patientName} </Text>
        </Text>
        <Image
          size="2xl"
          borderRadius="$none"
          source={Check}
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
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <Text style={[styles.textContainer, styles.textBlack]}>
        Nous actualisons la feuille de soin...
      </Text>
      <ActivityIndicator size={300} color={Color.bleu1} />
    </View>
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
