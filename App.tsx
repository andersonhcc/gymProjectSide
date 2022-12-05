import React, { useCallback, useMemo } from "react";
import { useColorScheme } from 'react-native';
import { LightTheme, DarkTheme } from "./src/styles";
import { SignIn } from "./src/screens/SignIn";
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';


import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular_Italic,
} from '@expo-google-fonts/poppins'

import {
  PTSans_700Bold,
} from '@expo-google-fonts/pt-sans'

SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();

export default function App() {

  const deviceColor = useColorScheme();

  const themes = useMemo(() => {
    if (!deviceColor) return LightTheme;
    return deviceColor === "dark" ? DarkTheme : LightTheme;
  }, [deviceColor]);


  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_400Regular_Italic,
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
  )
}

