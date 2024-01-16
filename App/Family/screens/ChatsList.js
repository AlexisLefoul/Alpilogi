import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import {
  Input,
  InputSlot,
  InputIcon,
  InputField,
  SearchIcon,
  VStack,
} from "@gluestack-ui/themed";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import BottomBar from "../components/BottomBar";
import MessageForList from "../components/MessageForList";
import data from "../datas.json";

export default function ChatsList() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState(""); // État pour stocker le texte de recherche
  const listProfessionnels = data.professionnels;

  const filteredList = listProfessionnels.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Input
            variant="rounded"
            size="lg"
            style={styles.seachbar}
            borderWidth={0}
          >
            <InputSlot pl="$3" alignItems="center">
              <InputIcon as={SearchIcon} style={styles.seachbarIcon} />
            </InputSlot>
            <InputField
              placeholder="Chercher un contact"
              style={styles.seachbarField}
              placeholderTextColor={Color.white}
              onChangeText={(text) => setSearchText(text)}
              multiline={true}
            />
          </Input>
        </View>
        <View style={styles.body}>
          <VStack space="lg" style={styles.listMessage}>
            {filteredList.map((l) => (
              <TouchableOpacity
                key={l.id}
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                  navigation.navigate("Chat", {
                    userDesti: l,
                  });
                }}
              >
                <MessageForList name={l.name} url={l.img} />
              </TouchableOpacity>
            ))}
          </VStack>
        </View>
      </ScrollView>
      <BottomBar active="chatslist" />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  top: {
    flexDirection: "row",
    marginTop: 60,
    marginRight: 15,
    marginLeft: 15,
    alignItems: "center",
  },
  marginBotBar: {
    marginTop: 20,
    marginBottom: 85,
  },
  textBlack: { color: Color.black },
  textSecondary: { color: Color.orange },
  titleName: { flexDirection: "row" },
  textTitre: {
    fontSize: FontSize.title_size,
    fontFamily: FontFamily.title,
  },
  sousTitre: {
    color: Color.bleu1,
    opacity: 0.5,
    fontSize: FontSize.size_15,
    fontFamily: FontFamily.corps,
  },
  body: {
    height: "100%",
    marginLeft: 15,
  },
  seachbar: {
    width: "100%",
    backgroundColor: Color.bleu1,
  },
  seachbarIcon: {
    color: Color.white,
  },
  seachbarField: {
    color: Color.white,
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.corps,
  },
  icon: {
    backgroundColor: Color.bleu1,
    borderRadius: Border.br_40,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 10,
    paddingTop: 10,
  },
  line: {
    height: 7,
  },
  listMessage: {
    marginTop: 40,
    marginBottom: 10,
  },
});
