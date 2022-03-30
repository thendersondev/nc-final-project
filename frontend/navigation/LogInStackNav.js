import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/Account';
import LoginPage from '../screens/auth/LoginPage';
import RegisterPage from '../screens/auth/RegisterPage';
import NavBar from './NavBar';

const Stack = createNativeStackNavigator();

export default function LogInStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Nav"
        component={NavBar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
