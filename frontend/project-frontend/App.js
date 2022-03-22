import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./screens/HomePage";
import CompareGamesPage from "./screens/CompareGamesPage";
import NavBar from "./shared/NavBar.js";
import MyDrawer from "./shared/Drawer";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <MyDrawer />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ title: "Overview" }}
          />
          <Stack.Screen
            name="CompareGames"
            component={CompareGamesPage}
            options={{ title: "Compare Games" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <NavBar />
    </SafeAreaProvider>
  );
}
