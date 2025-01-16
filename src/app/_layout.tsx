import * as SplashScreen from 'expo-splash-screen';

import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [ fontsLoaded, error] = useFonts({
    "SF-Regular": require("../assets/fonts/SF-Pro.ttf"),
    "SF-Pro-Text-HeavyItalic": require("../assets/fonts/SF-Pro-Text-HeavyItalic.otf"),
    "SF-Pro-Italic": require("../assets/fonts/SF-Pro-Italic.ttf")
  })

  useEffect(()=> {
    if(error) throw error
    if(fontsLoaded) SplashScreen.hideAsync()
  },[fontsLoaded])

  if(!fontsLoaded && !error) return null

  return (
  
    <SafeAreaView style={styles.wrapper} edges={['left', 'right']}>
      <Stack>
          <Stack.Screen name="index" options={{headerShown: false}} />
          <Stack.Screen name="(steps)" options={{ headerShown: false }} />
          <Stack.Screen name="search/[id]" options={{ headerShown: false }} />
          <Stack.Screen name="(record)" options={{ headerShown: false }} />
          <Stack.Screen name="(subscribe)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="dark" backgroundColor="#000000" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  wrapper : {
    flex: 1
  }
})
