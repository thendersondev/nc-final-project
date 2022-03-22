import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from '../screens/HomePage';
import CompareGamesPage from '../screens/CompareGamesPage';
import TradePage from '../screens/TradePage';
import SearchPage from '../screens/SearchPage';

const Tab = createMaterialBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
      tabBarOptions={{
        barStyle: { position: 'absolute' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="CompareGames"
        component={CompareGamesPage}
        options={{
          tabBarColor: '#f0edf6',
          tabBarLabel: 'Compare',
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
        component={TradePage}
        options={{
          tabBarLabel: 'Trade',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="swap-vertical-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          tabBarColor: '#f0edf6',
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="card-search"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
