import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, Fida Fazilatun</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#990921",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
