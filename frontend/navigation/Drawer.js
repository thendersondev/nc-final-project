import { createDrawerNavigator } from '@react-navigation/drawer';
import Account from '../screens/Account.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';
import LoginPage from '../screens/auth/LoginPage.js';
import RegisterPage from '../screens/auth/RegisterPage.js';
import NavBar from './NavBar.js';

const Drawer = createDrawerNavigator();

const accountIcon = () => {
  <MaterialCommunityIcons name="account" size={30} color="#3e2465" />;
};

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="LandingPage"
      screenOptions={{
        headerTintColor: '#694fad',
        drawerIcon: () => (
          <MaterialCommunityIcons name="home" size={30} color="#3e2465" />
        ),
      }}
    >
      <Drawer.Screen
        name="Test"
        component={NavBar}
        options={{
          title: 'Home',
          headerRight: () => (
            <View>
              <MaterialCommunityIcons
                name="cart"
                size={25}
                style={{ margin: 10 }}
                onPress={() => console.log('in Basket')}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Account',
          drawerIcon: () => (
            <MaterialCommunityIcons name="account" size={30} color="#3e2465" />
          ),
        }}
      />
      <Drawer.Screen
        name="Log In"
        component={LoginPage}
        options={{
          title: 'Login',
          drawerIcon: () => (
            <MaterialCommunityIcons name="login" size={30} color="#3e2465" />
          ),
        }}
      />
      <Drawer.Screen
        name="Register"
        component={RegisterPage}
        options={{
          title: 'Register',
          drawerIcon: () => (
            <MaterialCommunityIcons name="pencil" size={30} color="#3e2465" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
