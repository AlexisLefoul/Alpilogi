import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import {
  useToast,
  Toast,
  VStack,
  ToastTitle,
  ToastDescription,
} from "@gluestack-ui/themed";
import { useUser } from "../UserContext";
import Icon from "react-native-vector-icons/Octicons";
import BtnPrimary from "../components/BtnPrimary";
import InputDefault from "../components/InputDefault";
import InputPassword from "../components/InputPassword";
import data from "../datas.json";

export default function LogInProfessionnel() {
  const navigation = useNavigation();
  const { userId, setUser } = useUser();
  const toast = useToast();
  const inputRefs = {
    input_1: React.useRef(null),
    input_2: React.useRef(null),
    input_3: React.useRef(null),
    input_4: React.useRef(null),
  };

  var user = {
    codepin: "",
    name: "",
    password: "",
  };

  // les Données
  const [nameUser, onChangenameUser] = React.useState("");
  const [mdpUser, onChangemdpUser] = React.useState("");
  const [num1, onChangenum1] = React.useState("");
  const [num2, onChangenum2] = React.useState("");
  const [num3, onChangenum3] = React.useState("");
  const [num4, onChangenum4] = React.useState("");

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
  const handleLogin = () => {
    // Concaténer les 4 valeurs du code PIN
    user.codepin = num1 + num2 + num3 + num4;

    // Remplir les autres champs de l'objet user avec les données des inputs
    user.name = nameUser;
    user.password = mdpUser;

    // Afficher l'objet user dans la console
    console.log(user);

    var emptyUser =
      user.codepin.length === 0 ||
      user.name.length === 0 ||
      user.password.length === 0;

    // Naviguer vers la page suivante (vous pouvez personnaliser cette partie)
    if (!isUser(user) || emptyUser) {
      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast nativeID={"toast-" + id} action="error" variant="accent">
              <VStack space="xs">
                <ToastTitle>Erreur</ToastTitle>
                <ToastDescription>
                  Votre code pin ou nom d'utilisateur ou mot de passe n'est pas
                  correct !
                </ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
    } else {
      var userdata = data.users.find(
        (u) =>
          u.codepin === user.codepin &&
          u.login === user.name &&
          u.password === user.password
      );
      setUser(userdata.id);
      onChangenum1("");
      onChangenum2("");
      onChangenum3("");
      onChangenum4("");
      onChangenameUser("");
      onChangemdpUser("");

      navigation.navigate("HomeProfessionnel");
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
          <Text style={styles.textTitre}>Connecter</Text>
          <Text style={styles.sousTitre}>votre compte professionnel !</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.inputLabel}>Code organisme</Text>
        <View style={styles.containerNums}>
          <TextInput
            style={[styles.inputNum]}
            ref={inputRefs.input_1}
            secureTextEntry={true}
            inputMode="numeric"
            maxLength={1}
            textAlign="center"
            onChangeText={(text) => Changenum1(text, inputRefs.input_2)}
            value={num1}
          />
          <TextInput
            style={[styles.inputNum]}
            ref={inputRefs.input_2}
            secureTextEntry={true}
            inputMode="numeric"
            maxLength={1}
            textAlign="center"
            value={num2}
            onChangeText={(text) => Changenum2(text, inputRefs.input_3)}
          />
          <TextInput
            style={[styles.inputNum]}
            ref={inputRefs.input_3}
            secureTextEntry={true}
            inputMode="numeric"
            maxLength={1}
            textAlign="center"
            value={num3}
            onChangeText={(text) => Changenum3(text, inputRefs.input_4)}
          />
          <TextInput
            style={[styles.inputNum]}
            ref={inputRefs.input_4}
            secureTextEntry={true}
            inputMode="numeric"
            maxLength={1}
            textAlign="center"
            value={num4}
            onChangeText={(text) => Changenum4(text, inputRefs.input_4)}
          />
        </View>
        <Text style={styles.inputLabel}>Nom d’utilisateur</Text>
        <InputDefault
          mode="text"
          onchange={onChangenameUser}
          value={nameUser}
          placeholder="Saisissez votre nom d’utilisateur"
        />
        <Text style={styles.inputLabel}>Mot de passe</Text>
        <InputPassword
          inputMode="text"
          onchange={onChangemdpUser}
          value={mdpUser}
          placeholderTextColor={Color.bleu1}
        />
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.containerForgotMdp}
        >
          <Text style={[styles.textSecondary, styles.Text14]}>
            Mot de passe oublié ?
          </Text>
        </Pressable>
        <View style={styles.btns}>
          <BtnPrimary
            mode="contained"
            text="Se connecter"
            outline={false}
            onPress={handleLogin}
            disabled={false}
          ></BtnPrimary>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.textCorps}>Vous n’avez pas de compte ? </Text>
          <Pressable
            onPress={() => navigation.navigate("RegisterProfessionnel")}
            style={styles.containerForgotMdp}
          >
            <Text style={[styles.textSecondary, styles.Text16]}>
              S’inscrire
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
  inputNum: {
    height: 70,
    width: 60,
    borderRadius: Border.br_15,
    backgroundColor: Color.bleu2,
    marginVertical: 10,
    padding: 10,
  },
  containerNums: {
    flexDirection: "row",
    gap: 35,
  },
  containerForgotMdp: {
    alignItems: "flex-end",
  },
  textSecondary: {
    color: Color.orange,
    fontFamily: FontFamily.corps,
    fontFamily: FontFamily.robo_bold,
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
});

function isUser(user) {
  var usersdata = data.users;
  // Vérifier si un utilisateur avec le codepin, le nom d'utilisateur et le mot de passe existe
  const existingUser = usersdata.find(
    (u) =>
      u.codepin === user.codepin &&
      u.login === user.name &&
      u.password === user.password
  );
  // Si un utilisateur correspondant est trouvé, retourner true, sinon retourner false
  return !!existingUser;
}
