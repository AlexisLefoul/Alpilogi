import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { UserProvider } from "./UserContext";
import Loader from "./screens/Loader";
import Home from "./screens/Home";
import LogInFamily from "./screens/LogInFamily";
import RegisterFamily from "./screens/RegisterFamily";
import HomeFamily from "./screens/HomeFamily";
import ChatsList from "./screens/ChatsList";
import Chat from "./screens/Chat";
import FichePatient from "./screens/FichePatient";
import HistoryTreatmentSheets from "./screens/HistoryTreatmentSheets";
import Planning from "./screens/Planning";
import TreatmentSheet from "./screens/TreatmentSheet";
import Profil from "./screens/Profil";
import EditProfil from "./screens/EditProfil";
import Error from "./screens/Error";

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
        <UserProvider>
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
                  name="LogInFamily"
                  component={LogInFamily}
                  options={{
                    headerShown: false,
                    animation: "fade",
                    animationDuration: 0.01,
                  }}
                />
                <Stack.Screen
                  name="RegisterFamily"
                  component={RegisterFamily}
                  options={{
                    headerShown: false,
                    animation: "fade",
                    animationDuration: 0.01,
                  }}
                />
                <Stack.Screen
                  name="HomeFamily"
                  component={HomeFamily}
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
                  name="Chat"
                  component={Chat}
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
                  name="Planning"
                  component={Planning}
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
                  name="Profil"
                  component={Profil}
                  options={{
                    headerShown: false,
                    animation: "fade",
                    animationDuration: 0.01,
                  }}
                />
                <Stack.Screen
                  name="EditProfil"
                  component={EditProfil}
                  options={{
                    headerShown: false,
                    animation: "fade",
                    animationDuration: 0.01,
                  }}
                />
                <Stack.Screen
                  name="Error"
                  component={Error}
                  options={{
                    headerShown: false,
                    animation: "fade",
                    animationDuration: 0.01,
                  }}
                />
              </Stack.Navigator>
            )}
          </NavigationContainer>
        </UserProvider>
      </GluestackUIProvider>
    </>
  );
};
export default App;
