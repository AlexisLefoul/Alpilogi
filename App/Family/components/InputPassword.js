import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Color, Border } from "../GlobalStyles";

const InputPassword = ({ mode, onchange, value }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Fonction pour valider le mot de passe
  const isPasswordValid = (password) => {
    // Vous pouvez personnaliser cette vérification selon vos besoins.
    // Cela vérifie si le mot de passe contient des espaces.
    return !/\s/.test(password);
  };

  const handlePasswordChange = (text) => {
    // Vérifie si le nouveau texte contient des espaces
    if (isPasswordValid(text)) {
      onchange(text);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        inputMode={mode}
        secureTextEntry={!isPasswordVisible}
        onChangeText={handlePasswordChange} // Utilisez la fonction de validation ici
        value={value}
        placeholder="Saisissez votre mot de passe"
        placeholderTextColor={Color.bleu1}
      />
      <Icon
        name={isPasswordVisible ? "visibility" : "visibility-off"}
        size={24}
        color={Color.black}
        onPress={togglePasswordVisibility}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: "100%",
    borderRadius: Border.br_15,
    backgroundColor: Color.bleu2,
    marginVertical: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 8,
  },
});

export default InputPassword;
