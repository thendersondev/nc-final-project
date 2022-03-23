import { createStackNavigator } from "@react-navigation/stack";
import CompareGamesPage from "../screens/CompareGamesPage";

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="About" component={CompareGamesPage} />
    </Stack.Navigator>
  );
}
