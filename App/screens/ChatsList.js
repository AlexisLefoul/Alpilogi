import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Image,
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

export default function ChatsList() {
  const navigation = useNavigation();

  const [searchText, setSearchText] = React.useState(""); // État pour stocker le texte de recherche

  const list = [
    {
      id: "1",
      name: "John",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "2",
      name: "Marie",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      name: "Android",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "4",
      name: "Loading",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "5",
      name: "Please",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "6",
      name: "Zip",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "7",
      name: "Question",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const filteredList = list.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.marginBotBar}>
        <View style={styles.top}>
          <Input variant="rounded" size="lg" style={styles.seachbar}>
            <InputSlot pl="$3">
              <InputIcon as={SearchIcon} style={styles.seachbarIcon} />
            </InputSlot>
            <InputField
              placeholder="Chercher un contact"
              style={styles.seachbarField}
              placeholderTextColor={Color.white}
              onChangeText={(text) => setSearchText(text)}
            />
          </Input>
          <TouchableOpacity
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
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
              <MessageForList name={l.name} url={l.img} key={l.id} />
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
