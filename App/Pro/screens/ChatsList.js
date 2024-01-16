import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
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
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import BottomBar from "../components/BottomBar";
import MessageForList from "../components/MessageForList";
import data from "../datas.json";

export default function ChatsList() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState(""); // État pour stocker le texte de recherche
  const listFamille = data.persFamilles;

  const filteredList = listFamille.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.marginBotBar}>
        <View style={styles.top}>
          <Input
            variant="rounded"
            size="lg"
            style={styles.seachbar}
            borderWidth={0}
          >
            <InputSlot pl="$3">
              <InputIcon as={SearchIcon} style={styles.seachbarIcon} />
            </InputSlot>
            <InputField
              placeholder="Chercher un contact"
              style={styles.seachbarField}
              placeholderTextColor={Color.white}
              multiline={true}
              onChangeText={(text) => setSearchText(text)}
            />
          </Input>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ChatsList");
            }}
            style={styles.icon}
          >
            <Icon name="create-outline" size={24} color={Color.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <VStack space="lg" style={styles.listMessage}>
            {filteredList.map((l) => (
              <TouchableOpacity
                key={l.id}
                onPress={() => {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  top: {
    flexDirection: "row",
    marginTop: 60,
    marginRight: 15,
    marginLeft: 15,
    justifyContent: "space-between",
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
    width: "82%",
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
