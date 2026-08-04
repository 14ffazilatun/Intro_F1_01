import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export function StandingsScreen() {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.jolpi.ca/ergast/f1/current/driverStandings.json")
      .then((response) => response.json())
      .then((data) => {
        setStandings(
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings,
        );
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator />;
  return (
    <View style={{ marginTop: 40 }}>
      <FlatList
        data={standings}
        keyExtractor={(item) => item["Driver"]["driverId"]}
        renderItem={({ item }) => (
          <View style={styles.standingItem}>
            <Text style={styles.DriverNames}>
              {item["position"]}. {item["Driver"]["givenName"]}{" "}
              {item["Driver"]["familyName"]}
            </Text>
            <Text style={styles.standingText}>
              {item["Constructors"][0]["name"]}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                textAlign: "right",
                marginBottom: 2,
                fontFamily: "Audiowide-Regular",
              }}
            >
              {item["points"]} pts
            </Text>
          </View>
        )}
      />
    </View>
  );
}

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#000000", "#190303", "#6a0909"]}
        style={styles.gradient}
      >
        <ScrollView style={styles.scrollViewContainer}>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              textAlign: "center",
              marginVertical: 10,
              fontFamily: "Audiowide-Regular",
            }}
          >
            Current Standings for 2026 Season
          </Text>
          <StandingsScreen />
        </ScrollView>
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
  standingItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#b4acacab",
    backgroundColor: "#37090993",
    fontFamily: "Audiowide-Regular",
  },
  DriverNames: {
    color: "#f6f5f5dc",
    fontSize: 18,
    fontFamily: "Michroma-Regular",
  },
  standingText: {
    color: "#aaa",
    fontFamily: "Michroma-Regular",
    textAlign: "left",
    marginBottom: 2,
  },
  scrollViewContainer: {
    width: "95%",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 120,
    backgroundColor: "#68151547",
  },
});
