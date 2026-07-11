import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "@/.expo/types/router";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
     <LinearGradient
            colors={["#000000", "#190303", "#6a0909", ]}
            style={styles.gradient}
          >
    
      <Link href="/(tabs)/index" asChild style={styles.navigationButton}>
                <Pressable>
                  <Text style={styles.buttonText}>Click to begin</Text>
                </Pressable>
              </Link>
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
  text:{
    fontFamily: "Audiowide-Regular",
    fontSize: 30,
    color: "#fff",
    paddingVertical: 20,
  }
  navigationButton: {
    backgroundColor: "#25292e",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: "Michroma-Regular",
    fontSize: 16,
    color: "#fff",
  },
});