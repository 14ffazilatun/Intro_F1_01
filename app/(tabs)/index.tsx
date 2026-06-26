import { LinearGradient } from "expo-linear-gradient"; // Will light up once used below
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Using the component here automatically activates the faded import */}
      <LinearGradient colors={["#ff0000", "#000000"]} style={styles.gradient}>
        <Text style={styles.textwelcome}>Welcome to</Text>
        <Text style={styles.texttitle}>The Paddock Club</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textwelcome: {
    color: "#fff",
    fontWeight: "bold",
  },
  texttitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
