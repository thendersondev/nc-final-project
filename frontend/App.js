import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { LogBox } from "react-native";
import LogInStackNav from "./navigation/LogInStackNav";

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <MyDrawer /> */}
        <LogInStackNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
LogBox.ignoreAllLogs(); //Ignore all log notifications
