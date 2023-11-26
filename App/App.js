import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
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
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LogInProfessionnel"
                component={LogInProfessionnel}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegisterProfessionnel"
                component={RegisterProfessionnel}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeProfessionnel"
                component={HomeProfessionnel}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChatsList"
                component={ChatsList}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Planning"
                component={Planning}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Map"
                component={Map}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </GluestackUIProvider>
    </>
  );
};
export default App;
