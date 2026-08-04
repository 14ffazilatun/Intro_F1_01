import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#6f0e0e",
        headerShown: false,
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e"
        }
      }}
    >
     
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Index",
          tabBarStyle: { display: "none" },
          tabBarIcon: ({focused, color}) =>(
             <Ionicons
              name ={focused ? "home-sharp" : "home-outline"}
              color={color}
              size = {24} />)
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          tabBarIcon: ({focused, color}) =>(
             <Ionicons
              name ={focused ? "information-circle-sharp" : "information-circle-outline"}
              color={color}
              size = {24} />)
        }}
      />
     
      <Tabs.Screen
        name="+not-found"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
