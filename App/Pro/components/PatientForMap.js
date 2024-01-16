import * as React from "react";
import { StyleSheet, Text, View, Linking, Platform } from "react-native";
import {
  Avatar,
  AvatarImage,
  VStack,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ButtonText,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import { Marker } from "react-native-maps";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export default function PatientForMap({ name, lname, img, lat, long }) {
  const [showModal, setShowModal] = React.useState(false);

  const openGoogleMaps = (latitude, longitude, name) => {
    const scheme = Platform.OS === "ios" ? "maps:0,0?q=" : "geo:0,0?q=";
    const latLng = `${latitude},${longitude}`;
    const label = name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };
  return (
    <>
      <Marker
        coordinate={{
          latitude: lat,
          longitude: long,
        }}
        onPress={() => setShowModal(true)}
      >
        <VStack space="md" style={styles.center}>
          <Avatar bgColor={Color.bleu1} size="lg" borderRadius="$full">
            <AvatarFallbackText>{name + " " + lname}</AvatarFallbackText>
            <AvatarImage source={{ uri: img }} alt={Color.bleu1} />
          </Avatar>
          <Text style={styles.text}>{name}</Text>
        </VStack>
      </Marker>
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <ModalBackdrop />
          <ModalContent width="75%" borderRadius={Border.br_15}>
            <ModalHeader></ModalHeader>
            <ModalBody>
              <Text style={styles.textBody}>
                Souhaitez-vous ouvrir votre application GPS par défaut ?
              </Text>
              <View style={styles.btns}>
                <Button
                  size="xl"
                  borderWidth="$0"
                  onPress={() => {
                    openGoogleMaps(lat, long, name);
                  }}
                  backgroundColor={Color.bleu1}
                  borderRadius={10}
                  width="100%"
                >
                  <ButtonText
                    fontFamily={FontFamily.corps}
                    fontSize={FontSize.size_15}
                  >
                    Ouvrir l’application
                  </ButtonText>
                </Button>
                <Button
                  size="xl"
                  width="100%"
                  borderWidth="$0"
                  onPress={() => {
                    setShowModal(false);
                  }}
                  backgroundColor={Color.orange}
                  borderRadius={10}
                >
                  <ButtonText
                    fontFamily={FontFamily.corps}
                    fontSize={FontSize.size_15}
                  >
                    Ne pas ouvrir l’application
                  </ButtonText>
                </Button>
              </View>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    backgroundColor: Color.white,
    borderRadius: Border.br_40,
    elevation: 5,
    shadowColor: "#636363",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  text: {
    fontFamily: FontFamily.robo_bold,
    fontSize: FontSize.size_15,
    color: Color.orange,
    paddingBottom: 10,
  },
  textBody: {
    fontFamily: FontFamily.title,
    fontSize: FontSize.size_16,
    color: Color.black,
    textAlign: "center",
  },
  btns: {
    alignItems: "center",
    gap: 10,
    marginTop: 40,
  },
});
