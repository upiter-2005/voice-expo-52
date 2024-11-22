import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import {Text} from 'react-native'
import React from 'react';

SplashScreen.preventAutoHideAsync();

export default function StepsLayout() {
 
  return (
    <Stack>
        <Stack.Screen name="steps" options={{headerShown: false}} />
    </Stack>
  );
}
