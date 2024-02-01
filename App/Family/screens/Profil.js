import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { useUser } from "../UserContext";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import {
  VStack,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@gluestack-ui/themed";
import BottomBar from "../components/BottomBar";
import BoxAction from "../components/BoxAction";
import data from "../datas.json";

export default function Profil() {
  const { userId } = useUser();
  const [currentUser, setCurrentUser] = React.useState(
    data.users.find((u) => u.id === userId)
  );
  const listActions = data.listActions;

  return (
    <>
      <View style={styles.bgDbl}></View>
      <View style={styles.container}>
        <ScrollView style={styles.marginBotBar}>
          <View style={styles.body}>
            <VStack space="2xl" style={styles.boxAvatar}>
              <Avatar bgColor={Color.bleu1} size="2xl" borderRadius="$full">
                <AvatarFallbackText>
                  {currentUser.fname + " " + currentUser.lname}
                </AvatarFallbackText>
                <AvatarImage
                  alt={Color.bleu1}
                  source={{
                    uri: currentUser.img,
                  }}
                />
              </Avatar>
              <Text style={styles.textName}>
                {currentUser.fname + " " + currentUser.lname}
              </Text>
            </VStack>
            <VStack
              backgroundColor={Color.white}
              marginTop={40}
              borderRadius={Border.br_15}
            >
              {listActions?.map((l) => (
                <BoxAction
                  key={l.id}
                  nav={l.nav}
                  text={l.text}
                  icon={l.icon}
                  last={l.last}
                />
              ))}
            </VStack>
            <View style={styles.containerAction}>
              <BoxAction
                nav={"Profil"}
                text={"Obtenir de l’aide"}
                icon={"headset"}
                last={true}
              />
            </View>
          </View>
        </ScrollView>
        <BottomBar active="" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bgDbl: {
    position: "absolute",
    backgroundColor: Color.bleu1,
    top: 0,
    left: 0,
    right: 0,
    height: "45%",
  },
  container: { flex: 1 },
  marginBotBar: {
    marginTop: 50,
    marginBottom: 85,
  },
  body: {
    paddingHorizontal: "5%",
    marginBottom: 40,
  },
  textName: {
    fontSize: FontSize.sous_title_size,
    fontFamily: FontFamily.title,
    color: Color.white,
  },
  boxAvatar: {
    alignItems: "center",
  },
  containerAction: {
    backgroundColor: Color.white,
    marginTop: 20,
    borderRadius: Border.br_15,
  },
  editImg: {
    padding: 5,
    backgroundColor: Color.white,
    borderRadius: Border.br_40,
    alignSelf: "flex-end",
    marginTop: 25,
  },
});
