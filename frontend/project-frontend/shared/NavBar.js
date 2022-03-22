import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomePage from "../screens/HomePage";
import GamePage from "../screens/GamePage";
import LoginPage from "../screens/LoginPage";

const Tab = createMaterialBottomTabNavigator();

export default function NavBar({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        barStyle: { backgroundColor: "black", position: "absolute" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Games"
        component={GamePage}
        options={{
          tabBarLabel: "Games",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="microsoft-xbox-controller"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginPage}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
