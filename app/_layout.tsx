import { Stack } from "expo-router";
<<<<<<< HEAD
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { LogBox } from "react-native";
import { Button,Host } from '@expo/ui';

export function BasicButtonExample() {
  return (
    <Host matchContents>
      <Button label="Press me" onPress={() => alert('Pressed!')} />
    </Host>
  );
}
SplashScreen.preventAutoHideAsync();

=======
import {LogBox} from "react-native";
>>>>>>> parent of 5a9aa52 (added Audiowide and Michroma fonts)
LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="not-found"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
