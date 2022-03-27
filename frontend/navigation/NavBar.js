import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CompareGamesPage from "../screens/CompareGamesPage";
import Account from "../screens/Account";
import TradeStackNavigator from "./TradeStackNav";

const Tab = createMaterialBottomTabNavigator();

export default function NavBar() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Account"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
      tabBarOptions={{
        barStyle: { position: "absolute" },
      }}
    >
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarColor: "#60489d",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="CompareGames"
        component={CompareGamesPage}
        options={{
          tabBarColor: "#694fad",
          tabBarLabel: "Compare",
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
        name="TradePage"
        component={TradeStackNavigator}
        options={{
          tabBarColor: "#7357ba",
          tabBarLabel: "Trade",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="swap-vertical-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />

      {/* <Tab.Screen
          name="Login"
          component={LoginPage}
          options={{
            tabBarLabel: "Login",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={RegisterPage}
          options={{
            tabBarLabel: "Register",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        /> */}
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
