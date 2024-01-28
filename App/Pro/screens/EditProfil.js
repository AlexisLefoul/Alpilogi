import React, { useCallback, useMemo, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../UserContext";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import {
  VStack,
  Avatar,
  AvatarFallbackText,
  HStack,
  AvatarImage,
  Input,
  InputField,
  Select,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectItem,
  Button,
  ButtonText,
  Menu,
  MenuItem,
  MenuItemLabel,
  KeyboardAvoidingView,
} from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import IconOcticons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BottomBar from "../components/BottomBar";
import data from "../datas.json";
import LineSep from "../assets/line.png";
import { format } from "date-fns";
import frLocale from "date-fns/locale/fr";

export default function EditProfil() {
  const keyboardAvoidingViewBehaviour =
    Platform.OS === "ios" ? "padding" : null;
  const navigation = useNavigation();
  const { userId } = useUser();
  const [btnActive, setbtnActive] = React.useState(false);
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [chosenDate, setChosenDate] = React.useState(new Date());
  const [currentUser, setCurrentUser] = React.useState(
    data.users.find((u) => u.id === userId)
  );
  const [newUser, setNewUser] = React.useState({
    lname: currentUser.lname,
    fname: currentUser.fname,
    birthday: currentUser.birthday,
    genre: currentUser.genre,
    img: currentUser.img,
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setNewUser({ ...newUser, img: result.assets[0].uri });
      setbtnActive(true);
    }
  };

  const openCamera = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission d'accès à la caméra requise!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      // Mise à jour de l'image dans les données et le composant
      setNewUser({ ...newUser, img: result.assets[0].uri });
      setbtnActive(true);
      // TODO: Sauvegarder les changements sur le serveur ou localement
      // data.users = data.users.map(u => (u.id === userId ? updatedUser : u));
    }
  };

  const deletedImgUser = () => {
    const imgUserDefault =
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";

    setNewUser({ ...newUser, img: imgUserDefault });
    console.log("test");
    setbtnActive(true);
  };

  const handleChangeFname = (Nfname) => {
    setNewUser({ ...newUser, fname: Nfname });
    setbtnActive(true);
  };

  const handleChangeLname = (Nlname) => {
    setNewUser({ ...newUser, lname: Nlname });
    setbtnActive(true);
  };

  const handleChangeBirthday = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setChosenDate(selectedDate);
      const formattedDate = format(selectedDate, "dd/MM/yyyy", {
        locale: frLocale,
      });
      setNewUser({ ...newUser, birthday: formattedDate });
      setbtnActive(true);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleChangeGenre = (text) => {
    setNewUser({ ...newUser, genre: text });
    setbtnActive(true);
  };

  const updateUser = () => {
    console.log(newUser);
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.bgDbl}></View>
      <View style={styles.container}>
        <ScrollView style={styles.marginBotBar}>
          <View style={styles.top}>
            <IconOcticons
              name="chevron-left"
              size={50}
              color={Color.white}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.body}>
            <VStack space="2xl" style={styles.boxAvatar}>
              <Avatar bgColor={Color.bleu1} size="2xl" borderRadius="$full">
                <AvatarFallbackText>
                  {currentUser.fname + " " + currentUser.lname}
                </AvatarFallbackText>
                <AvatarImage
                  alt={Color.bleu1}
                  source={{
                    uri: newUser.img,
                  }}
                />
                <Menu
                  borderRadius={Border.br_15}
                  placement="bottom"
                  trigger={({ ...triggerProps }) => {
                    return (
                      <Pressable {...triggerProps} style={styles.editImg}>
                        <MaterialCommunityIcons
                          name="pencil-outline"
                          size={24}
                          color={Color.bleu1}
                        />
                      </Pressable>
                    );
                  }}
                >
                  <MenuItem
                    key="pickImage"
                    textValue="pickImage"
                    onPress={() => pickImage()}
                  >
                    <MaterialCommunityIcons
                      name="folder-outline"
                      size={22}
                      color={Color.bleu1}
                    />
                    <MenuItemLabel size="sm" style={styles.itemLabel}>
                      Choisir dans la bibliothèque
                    </MenuItemLabel>
                  </MenuItem>
                  <MenuItem
                    key="openCamera"
                    textValue="openCamera"
                    onPress={() => openCamera()}
                  >
                    <MaterialCommunityIcons
                      name="camera-outline"
                      size={22}
                      color={Color.bleu1}
                    />
                    <MenuItemLabel size="sm" style={styles.itemLabel}>
                      Prendre une photo
                    </MenuItemLabel>
                  </MenuItem>
                  <MenuItem
                    key="deleteImage"
                    textValue="deleteImage"
                    onPress={() => deletedImgUser()}
                  >
                    <MaterialCommunityIcons
                      name="trash-can-outline"
                      size={22}
                      color={Color.orange}
                    />
                    <MenuItemLabel
                      size="sm"
                      style={[styles.itemLabel, { color: Color.orange }]}
                    >
                      Supprimer la photo actuelle
                    </MenuItemLabel>
                  </MenuItem>
                </Menu>
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
              <HStack style={styles.containerAction}>
                <VStack width="90%">
                  <Text style={styles.textLabel}>Prénom</Text>
                  <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                  >
                    <Input
                      variant="underlined"
                      size="lg"
                      style={styles.input}
                      borderBottomWidth={0}
                    >
                      <InputField
                        placeholder="Votre prénom"
                        style={styles.inputField}
                        placeholderTextColor={Color.bleu1}
                        onChangeText={(text) => handleChangeFname(text)}
                        value={newUser.fname}
                      />
                    </Input>
                  </KeyboardAvoidingView>
                  <Image
                    style={styles.line}
                    contentFit="cover"
                    source={LineSep}
                  />
                </VStack>
                <IconOcticons
                  name="chevron-down"
                  size={24}
                  color={Color.bleu1}
                />
              </HStack>
              <HStack style={styles.containerAction}>
                <VStack width="90%">
                  <Text style={styles.textLabel}>Nom</Text>
                  <Input
                    variant="underlined"
                    size="lg"
                    style={styles.input}
                    borderBottomWidth={0}
                  >
                    <InputField
                      placeholder="Votre nom"
                      style={styles.inputField}
                      placeholderTextColor={Color.bleu1}
                      onChangeText={(text) => handleChangeLname(text)}
                      value={newUser.lname}
                    />
                  </Input>
                  <Image
                    style={styles.line}
                    contentFit="cover"
                    source={LineSep}
                  />
                </VStack>
                <IconOcticons
                  name="chevron-down"
                  size={24}
                  color={Color.bleu1}
                />
              </HStack>
              <HStack style={styles.containerAction}>
                <VStack width="90%">
                  <Text style={styles.textLabel}>Date de naissance</Text>
                  <Pressable onPress={showDatepicker}>
                    <Input
                      variant="underlined"
                      size="lg"
                      style={styles.input}
                      borderBottomWidth={0}
                    >
                      <Text style={[styles.inputField, { marginTop: 12 }]}>
                        {newUser.birthday}
                      </Text>
                    </Input>
                  </Pressable>
                  {showDatePicker && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={chosenDate}
                      mode="date"
                      is24Hour={true}
                      display="default"
                      onChange={handleChangeBirthday}
                    />
                  )}
                  <Image
                    style={styles.line}
                    contentFit="cover"
                    source={LineSep}
                  />
                </VStack>
                <IconOcticons
                  name="chevron-down"
                  size={24}
                  color={Color.bleu1}
                />
              </HStack>
              <HStack style={styles.containerAction}>
                <VStack width="90%">
                  <Text style={styles.textLabel}>Genre</Text>
                  <Select
                    selectedValue={newUser.genre}
                    onValueChange={(text) => handleChangeGenre(text)}
                  >
                    <SelectTrigger
                      variant="underlined"
                      size="md"
                      borderBottomWidth={0}
                    >
                      <SelectInput
                        placeholder="Selectionnez votre genre"
                        style={styles.inputField}
                        placeholderTextColor={Color.bleu1}
                      />
                    </SelectTrigger>
                    <SelectPortal>
                      <SelectBackdrop backgroundColor="transparent" />
                      <SelectContent>
                        <SelectItem label="Homme" value="Homme" />
                        <SelectItem label="Femme" value="Femme" />
                        <SelectItem label="Autre" value="Autre" />
                      </SelectContent>
                    </SelectPortal>
                  </Select>
                  <Image
                    style={styles.line}
                    contentFit="cover"
                    source={LineSep}
                  />
                </VStack>
                <IconOcticons
                  name="chevron-down"
                  size={24}
                  color={Color.bleu1}
                />
              </HStack>
            </VStack>
            <View style={styles.btns}>
              <Button
                size="xl"
                height={60}
                borderWidth="$0"
                onPress={() => updateUser()}
                backgroundColor={Color.bleu1}
                borderRadius={10}
                width="95%"
                isDisabled={!btnActive}
              >
                <ButtonText
                  fontFamily={FontFamily.corps}
                  fontSize={FontSize.corps_size}
                >
                  Valider
                </ButtonText>
              </Button>
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
    marginBottom: 85,
  },
  top: {
    marginTop: 45,
    marginLeft: 20,
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
  containerAction: {
    padding: 18,
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    height: 3,
    width: "100%",
  },
  textLabel: {
    fontSize: FontSize.sous_title_size,
    fontFamily: FontFamily.robo_medium,
    color: Color.black,
  },
  input: {
    borderColor: Color.bleu2,
  },
  inputField: {
    color: Color.bleu1,
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.robo_medium,
  },
  btns: {
    alignItems: "center",
    marginTop: "8%",
  },
  containerBottomSheet: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainerBottomSheet: {
    flex: 1,
    alignItems: "center",
  },
  itemLabel: {
    marginLeft: 10,
    fontFamily: FontFamily.title,
    fontSize: FontSize.size_15,
    color: Color.black,
  },
});
