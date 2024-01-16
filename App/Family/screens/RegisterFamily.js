import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import {
  useToast,
  Toast,
  VStack,
  ToastTitle,
  ToastDescription,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
} from "@gluestack-ui/themed";

import Icon from "react-native-vector-icons/Octicons";
import BtnPrimary from "../components/BtnPrimary";
import InputDefault from "../components/InputDefault";
import InputPassword from "../components/InputPassword";

export default function RegisterFamily() {
  const navigation = useNavigation();
  const toast = useToast();

  var user = {
    name: "",
    organismeName: "",
    codepin: "",
    postalAddress: "",
    email: "",
    password: "",
    checkConditions: false,
  };

  // les Données
  const [nameUser, onChangenameUser] = React.useState("");
  const [organismeName, onChangeOrganismeName] = React.useState("");
  const [num1, onChangenum1] = React.useState("");
  const [num2, onChangenum2] = React.useState("");
  const [num3, onChangenum3] = React.useState("");
  const [num4, onChangenum4] = React.useState("");
  const [postalAddress, onChangePostalAddress] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [mdpUser, onChangemdpUser] = React.useState("");
  const [checks, setChecks] = React.useState(false);
  const inputRefs = {
    input_1: React.useRef(null),
    input_2: React.useRef(null),
    input_3: React.useRef(null),
    input_4: React.useRef(null),
  };

  const Changenum1 = (text, nextInputRef) => {
    onChangenum1(text);
    if (text.length === 1 && nextInputRef && nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };
  const Changenum2 = (text, nextInputRef) => {
    onChangenum2(text);
    if (text.length === 1 && nextInputRef && nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };
  const Changenum3 = (text, nextInputRef) => {
    onChangenum3(text);
    if (text.length === 1 && nextInputRef && nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };
  const Changenum4 = (text, nextInputRef) => {
    onChangenum4(text);
    if (text.length === 1 && nextInputRef && nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };

  const handleRegister = () => {
    // Remplir les autres champs de l'objet user avec les données des inputs
    user.name = nameUser;
    user.organismeName = organismeName;
    user.codepin = num1 + num2 + num3 + num4;
    user.postalAddress = postalAddress;
    user.email = email;
    user.password = mdpUser;
    user.checkConditions = checks;

    // Afficher l'objet user dans la console
    console.log(user);

    // Naviguer vers la page suivante (vous pouvez personnaliser cette partie)
    if (
      user.name.length === 0 ||
      user.organismeName.length === 0 ||
      user.codepin.length === 0 ||
      user.postalAddress.length === 0 ||
      user.email.length === 0 ||
      user.password.length === 0 ||
      user.checkConditions === false
    ) {
      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast nativeID={"toast-" + id} action="error" variant="accent">
              <VStack space="xs">
                <ToastTitle>Erreur</ToastTitle>
                <ToastDescription>
                  Votre formulaire n'est pas correct !
                </ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
    } else {
      navigation.navigate("HomeFamily");
    }
  };

  return (
    <ScrollView>
      <View style={styles.top}>
        <View>
          <Icon
            name="chevron-left"
            size={50}
            color={Color.bleu1}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <View>
          <Text style={styles.textTitre}>Créer</Text>
          <Text style={styles.sousTitre}>votre compte particulier !</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.inputLabel}>Nom d’utilisateur</Text>
        <InputDefault
          mode="text"
          onchange={onChangenameUser}
          value={nameUser}
          placeholder="Saisissez votre nom d’utilisateur"
        />
        <Text style={styles.inputLabel}>
          Organisme de rattachement du proche
        </Text>
        <InputDefault
          mode="text"
          onchange={onChangeOrganismeName}
          value={organismeName}
          placeholder="Saisissez votre organisme de rattachement"
        />
        <Text style={styles.inputLabel}>
          Code de votre proche dans l'organisme
        </Text>
        <View style={styles.containerNums}>
          <TextInput
            style={[styles.inputNum]}
            ref={inputRefs.input_1}
            inputMode="numeric"
            maxLength={1}
            textAlign="center"
            onChangeText={(text) => Changenum1(text, inputRefs.input_2)}
            value={num1}
          />
          <TextInput
            style={[styles.inputNum]}
            ref={inputRefs.input_2}
            inputMode="numeric"
            maxLength={1}
            textAlign="center"
            value={num2}
            onChangeText={(text) => Changenum2(text, inputRefs.input_3)}
          />
          <TextInput
            style={[styles.inputNum]}
            ref={inputRefs.input_3}
            inputMode="numeric"
            maxLength={1}
            textAlign="center"
            value={num3}
            onChangeText={(text) => Changenum3(text, inputRefs.input_4)}
          />
          <TextInput
            style={[styles.inputNum]}
            ref={inputRefs.input_4}
            inputMode="numeric"
            maxLength={1}
            textAlign="center"
            value={num4}
            onChangeText={(text) => Changenum4(text, inputRefs.input_4)}
          />
        </View>
        <Text style={styles.inputLabel}>Adresse postale</Text>
        <InputDefault
          mode="text"
          onchange={onChangePostalAddress}
          value={postalAddress}
          placeholder="Saisissez votre adresse postale"
        />
        <Text style={styles.inputLabel}>Adresse mail</Text>
        <InputDefault
          mode="text"
          onchange={onChangeEmail}
          value={email}
          placeholder="Saisissez votre adresse mail"
        />
        <Text style={styles.inputLabel}>Mot de passe</Text>
        <InputPassword
          inputMode="text"
          onchange={onChangemdpUser}
          value={mdpUser}
          placeholderTextColor={Color.bleu1}
        />
        <Checkbox
          size="md"
          isInvalid={false}
          isDisabled={false}
          aria-label="J’accepte les conditions d’utilisation et la politique de confidentialité"
          value={checks}
          onChange={() => setChecks(true)}
          style={styles.checkBox}
        >
          <CheckboxIndicator mr="$2" style={styles.checkBoxIndi}>
            <CheckboxIcon as={CheckIcon} style={styles.iconCheckBox} />
          </CheckboxIndicator>
          <CheckboxLabel style={styles.textCheck}>
            J’acceptes les conditions d’utilisation et la politique de
            confidentialité
          </CheckboxLabel>
        </Checkbox>
        <View style={styles.btns}>
          <BtnPrimary
            mode="contained"
            text="S’inscrire"
            outline={false}
            onPress={handleRegister}
          ></BtnPrimary>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.textCorps}>Vous avez déjà un compte ? </Text>
          <Pressable
            onPress={() => navigation.navigate("LogInProfessionnel")}
            style={styles.containerForgotMdp}
          >
            <Text style={[styles.textSecondary, styles.Text16]}>
              Se connecter
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Text16: {
    fontSize: FontSize.size_16,
  },
  Text14: {
    fontSize: FontSize.size_14,
  },
  textTitre: {
    color: Color.black,
    fontSize: FontSize.title_size,
    fontFamily: FontFamily.title,
  },
  sousTitre: {
    color: Color.orange,
    fontSize: FontSize.sous_title_size,
    fontFamily: FontFamily.corps,
  },
  iconBack: {
    width: 20,
    height: 32,
  },
  top: {
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 20,
    gap: 30,
    alignItems: "center",
  },
  body: {
    marginHorizontal: "5%",
    marginTop: 80,
  },
  inputLabel: {
    fontSize: FontSize.size_16,
    color: Color.black,
    fontFamily: FontFamily.robo_medium,
    marginTop: 15,
  },
  containerForgotMdp: {
    alignItems: "flex-end",
  },
  textSecondary: {
    color: Color.orange,
    fontFamily: FontFamily.corps,
    fontFamily: FontFamily.robo_bold,
  },
  containerNums: {
    flexDirection: "row",
    gap: 35,
  },
  inputNum: {
    height: 70,
    width: 60,
    borderRadius: Border.br_15,
    backgroundColor: Color.bleu2,
    marginVertical: 10,
    padding: 10,
  },
  btns: {
    alignItems: "center",
    marginTop: "10%",
  },
  containerText: {
    flexDirection: "row",
    marginTop: "25%",
    justifyContent: "center",
  },
  textCorps: {
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_16,
    color: Color.bleu1,
  },
  checkBox: { marginTop: 20 },
  checkBoxIndi: {
    borderColor: Color.bleu1,
  },
  iconCheckBox: {
    backgroundColor: Color.bleu1,
  },
  textCheck: {
    color: Color.bleu1,
    fontFamily: FontFamily.corps,
    fontSize: FontSize.size_14,
  },
});
