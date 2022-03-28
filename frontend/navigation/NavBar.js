import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CompareGamesPage from '../screens/CompareGamesPage';
import HomePage from '../screens/HomePage';
import TradeStackNavigator from './TradeStackNav';

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
          tabBarColor: '#60489d',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="CompareGames"
        component={CompareGamesPage}
        options={{
          tabBarColor: '#694fad',
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
        component={TradeStackNavigator}
        options={{
          tabBarColor: '#7357ba',
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
    </Tab.Navigator>
  );
}
