import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Loader from "./screens/Loader";
import Home from "./screens/Home";
import LogInProfessionnel from "./screens/LogInProfessionnel";
import RegisterProfessionnel from "./screens/RegisterProfessionnel";
import HomeProfessionnel from "./screens/HomeProfessionnel";
import ChatsList from "./screens/ChatsList";
import Planning from "./screens/Planning";
import Map from "./screens/Map";
import FichePatient from "./screens/FichePatient";
import HistoryTreatmentSheets from "./screens/HistoryTreatmentSheets";
import TreatmentSheet from "./screens/TreatmentSheet";
import TsStep1 from "./screens/TsStep1";
import TsStep2 from "./screens/TsStep2";
import TsStep3 from "./screens/TsStep3";
import TsStep4 from "./screens/TsStep4";
import TsStep5 from "./screens/TsStep5";
import TsStep6 from "./screens/TsStep6";
import Chat from "./screens/Chat";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "DIN Alternate": require("./assets/fonts/DINAlternate-Bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(false);
    }, 3100);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" backgroundColor="transparent" />
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Loader />
          ) : (
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="LogInProfessionnel"
                component={LogInProfessionnel}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="RegisterProfessionnel"
                component={RegisterProfessionnel}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="HomeProfessionnel"
                component={HomeProfessionnel}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="ChatsList"
                component={ChatsList}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="Planning"
                component={Planning}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="Map"
                component={Map}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="FichePatient"
                component={FichePatient}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="HistoryTreatmentSheets"
                component={HistoryTreatmentSheets}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="TreatmentSheet"
                component={TreatmentSheet}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="TsStep1"
                component={TsStep1}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="TsStep2"
                component={TsStep2}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="TsStep3"
                component={TsStep3}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="TsStep4"
                component={TsStep4}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="TsStep5"
                component={TsStep5}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="TsStep6"
                component={TsStep6}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
              <Stack.Screen
                name="Chat"
                component={Chat}
                options={{
                  headerShown: false,
                  animation: "fade",
                  animationDuration: 0.01,
                }}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </GluestackUIProvider>
    </>
  );
};
export default App;
