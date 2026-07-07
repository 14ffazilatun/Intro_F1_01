import { useFonts } from "expo-font";
import { Stack } from "expo-router";
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

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Audiowide: require("../assets/fonts/Audiowide-Regular.ttf"),
    Michroma: require("../assets/fonts/Michroma-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

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
