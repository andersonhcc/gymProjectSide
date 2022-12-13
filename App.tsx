import React, { useCallback, useMemo } from "react";
import { useColorScheme } from "react-native";
import { LightTheme, DarkTheme } from "./src/styles";
import { SignIn } from "./src/screens/SignIn";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";

import {
  Itim_400Regular,
} from "@expo-google-fonts/itim";


import {
  useFonts,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_300Light
} from "@expo-google-fonts/lato";

import {
  PTSans_700Bold,
} from "@expo-google-fonts/pt-sans";

SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();

export default function App() {

  const deviceColor = useColorScheme();

  const themes = useMemo(() => {
    if (!deviceColor) return LightTheme;
    return deviceColor === "dark" ? DarkTheme : LightTheme;
  }, [deviceColor]);


  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_300Light,
    PTSans_700Bold,
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;


  return (
    <ThemeProvider theme={themes}>
      <SignIn />
    </ThemeProvider>
  );
}

