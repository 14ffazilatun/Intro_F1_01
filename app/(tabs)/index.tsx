import { Image } from "expo-image"; // Will light up once used below
import { LinearGradient } from "expo-linear-gradient"; // Will light up once used below
import { StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      {/* Using the component here automatically activates the faded import */}
      <Image
        source={require("../../assets/images/checkered flag.png")}
        style={styles.image}
        placeholder={{ blurhash: "L5H2EC=PM+yV0g-mq.wG9c010J}I" }}
        contentFit="cover"
        transition={1000}
      />

      <LinearGradient
        colors={["#fc0808", "#000000"]}
        style={styles.linearGradient}
      >
        <Text
          style={{
            fontFamily: "Michroma",
            fontSize: 24,
            color: "#fff",
            height: 100,
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            fontFamily: "Audiowide",
            fontSize: 90,
            fontWeight: "bold",
            color: "#fff",
            justifyContent: "flex-start",
            alignItems: "center",
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
  image: {
    position: "absolute",
    zIndex: 10,
    width: "100%",
    height: "20%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  linearGradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
