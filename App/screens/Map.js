import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import MapView, { Marker } from "react-native-maps";
import {
  Input,
  InputSlot,
  InputIcon,
  InputField,
  SearchIcon,
} from "@gluestack-ui/themed";
import BottomBar from "../components/BottomBar";
import PatientForMap from "../components/PatientForMap";
import data from "../datas.json";

export default function Map() {
  const listPatientsAvenir = data.patientsAvenir;
  const [searchText, setSearchText] = React.useState("");

  const filteredList = listPatientsAvenir.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 48.136021929401075,
          longitude: -1.6730418302964114,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        mapType="standard"
        showsCompass={false}
        loadingEnabled={false}
        loadingIndicatorColor={Color.bleu1}
      >
        {filteredList?.map((p) => (
          <PatientForMap
            name={p.name}
            img={p.img}
            key={p.id}
            lat={p.pos.lat}
            long={p.pos.long}
          />
        ))}
      </MapView>
      <Input
        variant="rounded"
        size="lg"
        style={styles.seachbar}
        borderWidth={0}
      >
        <InputField
          placeholder="Rechercher un patient"
          style={styles.seachbarField}
          placeholderTextColor={Color.bleu1}
          onChangeText={(text) => setSearchText(text)}
        />
        <InputSlot pl="$3" backgroundColor={Color.bleu1} paddingHorizontal={20}>
          <InputIcon as={SearchIcon} style={styles.seachbarIcon} />
        </InputSlot>
      </Input>
      <BottomBar active="map" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  seachbar: {
    flex: 1,
    ...Platform.select({
      ios: {
        // Styles spécifiques à iOS
        justifyContent: "center",
        position: "absolute",
        top: 60,
        width: "90%",
        marginHorizontal: 20,
      },
      android: {
        // Styles spécifiques à Android
        justifyContent: "center",
        position: "absolute",
        top: 60,
        width: "90%",
        marginHorizontal: 20,
      },
      default: {
        // Styles pour les autres plateformes
        top: 60,
        justifyContent: "center",
      },
    }),
  },
  seachbarIcon: {
    color: Color.white,
  },
  seachbarField: {
    color: Color.black,
    fontSize: FontSize.size_17,
    fontFamily: FontFamily.corps,
    backgroundColor: Color.white,
    padding: 5,
  },
});
