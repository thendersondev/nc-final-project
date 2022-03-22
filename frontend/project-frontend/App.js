import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./screens/HomePage";
import GamePage from "./screens/GamePage";
import NavBar from "./shared/NavBar.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Overview" }}
        />
        <Stack.Screen
          name="Games"
          component={GamePage}
          options={{ title: "What do you want to buy?" }}
        />
        <NavBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
