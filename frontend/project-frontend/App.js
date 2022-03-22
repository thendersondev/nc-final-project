import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import CompareGamesPage from './screens/CompareGamesPage';
import NavBar from './shared/NavBar.js';
import Drawer from './shared/Drawer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen
          name="CompareGames"
          component={CompareGamesPage}
          options={{ title: 'Compare Games' }}
        /> */}
        <NavBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
