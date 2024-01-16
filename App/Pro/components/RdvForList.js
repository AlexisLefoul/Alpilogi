import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Avatar,
  AvatarImage,
  VStack,
  HStack,
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverBody,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import Icon from "react-native-vector-icons/Ionicons";

const RdvForList = ({ name, url, heures, todo }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [toDo, setToDo] = React.useState(todo);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setToDo(true);
    setIsOpen(false);
  };
  const boxRdvStyle = toDo
    ? { ...styles.boxRdv, display: "none" }
    : { ...styles.boxRdv, display: "flex" };

  return (
    <>
      <HStack space="md" style={boxRdvStyle}>
        <Avatar
          bgColor={Color.bleu1}
          size="lg"
          borderRadius="$full"
          style={styles.imgMessage}
        >
          <AvatarFallbackText>{name}</AvatarFallbackText>
          <AvatarImage
            alt={Color.bleu1}
            source={{
              uri: url,
            }}
          />
        </Avatar>
        <VStack space="xs" style={styles.taille}>
          <Text style={styles.nameRdv}>{name}</Text>
          <Text style={styles.heures}>{heures}</Text>
        </VStack>
        <View style={styles.icon}>
          <Popover
            isOpen={isOpen}
            onClose={handleOpenClose}
            placement="bottom right"
            size="xs"
            trigger={(triggerProps) => {
              return (
                <TouchableOpacity {...triggerProps} onPress={handleOpenClose}>
                  <Icon
                    name="ellipsis-vertical"
                    size={25}
                    color={Color.bleu1}
                  />
                </TouchableOpacity>
              );
            }}
          >
            <PopoverBackdrop backgroundColor="transparent" />
            <PopoverContent style={styles.menuItem}>
              <PopoverBody marginTop={5}>
                <TouchableOpacity onPress={handleClose}>
                  <Text style={styles.menuItemText}>✓ Fait</Text>
                </TouchableOpacity>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </View>
      </HStack>
    </>
  );
};

const styles = StyleSheet.create({
  boxRdv: {
    width: "95%",
    backgroundColor: Color.bleu3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: Border.br_15,
    // Ajoute de l'ombre sur Android
    elevation: 3,
    // Ajoute de l'ombre sur iOS
    shadowColor: "#636363",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  imgMessage: {
    alignSelf: "center",
  },
  taille: {
    width: "60%",
    alignSelf: "center",
  },
  nameRdv: {
    fontFamily: FontFamily.robo_medium,
    fontSize: FontSize.size_15,
    color: Color.bleu1,
  },
  heures: {
    fontFamily: FontFamily.robo_medium,
    fontSize: FontSize.size_15,
    color: Color.black,
  },
  heureMessage: {
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_10,
    color: Color.black,
    opacity: 0.5,
  },
  icon: {
    alignSelf: "center",
  },
  menuItem: {
    backgroundColor: Color.bleu1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: Border.br_15,
    borderBottomLeftRadius: Border.br_15,
    borderTopLeftRadius: Border.br_15,
    width: 100,
  },
  menuItemText: {
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_15,
    color: Color.bleu1,
    backgroundColor: Color.bleu3,
    paddingVertical: 5,
    borderRadius: 12,
    textAlign: "center",
    overflow: "hidden",
  },
});

export default RdvForList;
