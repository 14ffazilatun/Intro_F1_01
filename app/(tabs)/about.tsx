import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#000000", "#190303", "#6a0909"]}
        style={styles.gradient}
      >
        <View style={styles.buttonContainer}>
          <Link href="/about" asChild style={styles.navigationButton}>
            <Pressable>
              <Text style={styles.navigationButtonText}>About</Text>
            </Pressable>
          </Link>
        </View>
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
  text: {
    fontFamily: "Audiowide-Regular",
    fontSize: 30,
    color: "#fff",
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 100,
  },
  navigationButton: {
    fontSize: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 80,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 100,
    width: 390,
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    borderWidth: 2,
    borderColor: "rgba(69, 6, 6, 0.64)",
    backdropFilter: "blur(20px)", // works on web
  },
  navigationButtonText: {
    fontFamily: "Michroma-Regular",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});
