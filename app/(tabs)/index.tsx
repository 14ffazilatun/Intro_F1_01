import { Image } from "expo-image"; // Will light up once used below
import { LinearGradient } from "expo-linear-gradient"; // Will light up once used below
import { StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      {/* Using the component here automatically activates the faded import */}
      <LinearGradient colors={["#ff0000", "#000000"]} style={styles.gradient}>
        <Text style={{ fontFamily: "Michroma", fontSize: 24, color: "#fff" }}>
          Welcome to
        </Text>
        <Text
          style={{
            fontFamily: "Audiowide",
            fontSize: 50,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          THE PADDOCK CLUB
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start", // <-- puts image at top
  },
  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  // textwelcome: {
  //   fontFamily: "Michroma",
  //   fontWeight: "bold",
  // },
  // texttitle: {
  //   fontFamily: "Audiowide",
  //   fontSize: 30,
  //   fontWeight: "bold",
  //   color: "#fff",
  // },
});
