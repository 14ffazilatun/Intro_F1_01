import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const AppButton = (props: any) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: props.disabled
            ? "#ccc"
            : pressed
              ? "#9a3030a3"
              : props.color || "red",
        },
        props.buttonStyles,
      ]}
      disabled={props.disabled}
      onPress={props.onPress}
      accessible
      accessibilityLabel={props.accessibilityLabel || "A Button"}
    >
      <Text
        style={{ fontFamily: "Michroma-Regular", fontSize: 16, color: "#fff" }}
      >
        {props.children || "Press Me"}
      </Text>
    </Pressable>
  );
};

export default function App() {
  // Pass the actual asset files directly via the require method
  const [fontsLoaded] = useFonts({
    "Michroma-Regular": require("../../assets/fonts/Michroma-Regular.ttf"),
    "Audiowide-Regular": require("../../assets/fonts/Audiowide-Regular.ttf"),
  });

  // Block the screen layout until the font map compiles cleanly
  if (!fontsLoaded) {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: "#000", justifyContent: "center" },
        ]}
      >
        <ActivityIndicator size="large" color="#6e1e1e" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#ff0000", "#6f0d0d", "#360c0c", "#000000"]}
        style={styles.gradient}
      >
        <Text
          style={{
            fontFamily: "Michroma-Regular",
            fontSize: 24,
            color: "#fff",
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            fontFamily: "Audiowide-Regular",
            fontSize: 70,
            fontWeight: "regular",
            color: "#fff",
            paddingVertical: 30,
          }}
        >
          THE PADDOCK CLUB
        </Text>
        <AppButton
          color="rgba(255,255,255,0.15)"
          buttonStyles={{
            fontsize: 40,
            paddingVertical: 20,
            paddingHorizontal: 80,
            borderRadius: 100,
            width: 300,
            alignItems: "flex-end",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            borderWidth: 2,
            borderColor: "rgb(161, 6, 6)",
            backdropFilter: "blur(20px)", // works on web
          }}
          onPress={() => console.log("Begin")}
        >
          Click to begin
        </AppButton>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
