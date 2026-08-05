import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#a10010",
        tabBarInactiveTintColor: "#421d1d",
        headerShown: false,
        headerStyle: {
          backgroundColor: "#3e1316",
        },
        headerShadowVisible: false,
        headerTintColor: "#171717",
        tabBarStyle: {
          backgroundColor: "rgb(21, 0, 0)",
        }
      }}
    >
     
      <Tabs.Screen
        name="Home"
        options={{
          headerTitle: "Home",
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
              name ={focused ? "flag" : "flag-outline"}
              color={color}
              size = {24} />)
        }}
      />
      <Tabs.Screen
        name="Championship"
        options={{
          headerTitle: "Championship",
          tabBarIcon: ({focused, color}) =>(
             <Ionicons
              name ={focused ? "trophy-sharp" : "trophy-outline"}
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
