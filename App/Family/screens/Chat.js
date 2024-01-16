import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
} from "react-native-gifted-chat";
import { Avatar, AvatarFallbackText, AvatarImage } from "@gluestack-ui/themed";
import IconOct from "react-native-vector-icons/Octicons";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import data from "../datas.json";
import "date-fns/locale/fr";

export default function Chat({ route }) {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const auth = data.user;
  const { userDesti } = route.params;

  useEffect(() => {
    setMessages([
      {
        _id: 0,
        text: "Bonjour Christine, je voulais vous remercier pour tout ce que vous faites pour ma grand-mère. À chaque fois que nous lui rendons visite elle ne cesse de nous raconter à quel point vous êtes gentille et que vous faites bien votre travail, alors merci beaucoup !",
        createdAt: new Date(),
        user: {
          _id: userDesti.id,
          name: userDesti.name,
          avatar: userDesti.img,
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <>
      <View style={styles.top}>
        <View>
          <IconOct
            name="chevron-left"
            size={50}
            color={Color.bleu1}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View>
          <Avatar
            bgColor={Color.bleu1}
            size="xl"
            borderRadius="$full"
            marginRight="38%"
          >
            <AvatarFallbackText>{userDesti.name}</AvatarFallbackText>
            <AvatarImage
              alt={Color.bleu1}
              source={{
                uri: userDesti.img,
              }}
            />
          </Avatar>
        </View>
      </View>
      <GiftedChat
        placeholder="Message..."
        placeholderTextColor="#fff"
        renderAvatar={() => null}
        locale="fr"
        timeFormat="HH:mm"
        messages={messages}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                left: {
                  backgroundColor: Color.white,
                  borderTopRightRadius: Border.br_15,
                  borderBottomRightRadius: Border.br_15,
                  borderBottomLeftRadius: 0,
                  borderTopLeftRadius: Border.br_15,
                  padding: 5,
                  marginLeft: 5,
                  elevation: 5,
                  shadowColor: "#636363",
                  shadowOffset: { width: 4, height: 4 },
                  shadowOpacity: 0.25,
                  shadowRadius: 10,
                },
                right: {
                  backgroundColor: Color.bleu1,
                  borderTopRightRadius: Border.br_15,
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: Border.br_15,
                  borderTopLeftRadius: Border.br_15,
                  padding: 5,
                  marginRight: 15,
                  marginBottom: 10,
                  elevation: 5,
                  shadowColor: "#636363",
                  shadowOffset: { width: 4, height: 4 },
                  shadowOpacity: 0.25,
                  shadowRadius: 10,
                },
              }}
            />
          );
        }}
        onSend={(messages) => onSend(messages)}
        renderSend={(props) => (
          <Send
            {...props}
            containerStyle={{
              height: 44,
              width: 44,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconMC name="send-circle" size={40} color={Color.white} />
          </Send>
        )}
        user={{
          _id: auth.id,
          name: auth.name,
          avatar: auth.img,
        }}
        renderInputToolbar={(props) => {
          return <InputToolbar {...props} containerStyle={styles.toolbar} />;
        }}
        alignTop={true}
        textInputStyle={styles.textInput}
      />
    </>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  toolbar: {
    marginHorizontal: 20,
    padding: 5,
    marginBottom: 5,
    borderRadius: Border.br_40,
    borderTopWidth: 0,
    backgroundColor: Color.bleu1,
  },
  textInput: {
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_15,
    color: Color.white,
  },
});
