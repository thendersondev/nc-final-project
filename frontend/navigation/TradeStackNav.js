import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessagePage from '../Components/MessagePage';
import PostTrade from '../Components/PostTrade';
import PostReview from '../Components/PostReview';
import UserPage from '../Components/UserPage';
import TradePage from '../screens/TradePage';

const Stack = createNativeStackNavigator();

export default function TradeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Trade"
        component={TradePage}
        options={{
          headerTintColor: '694fad',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#694fad',
          },
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostTrade}
        options={{
          headerTintColor: '694fad',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#694fad',
          },
        }}
      />
      <Stack.Screen
        name="Review"
        component={PostReview}
        options={{
          headerTintColor: '694fad',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#694fad',
          },
        }}
      />
      <Stack.Screen
        name="Message"
        component={MessagePage}
        options={{
          headerTintColor: '694fad',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#694fad',
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={UserPage}
        options={{
          headerTintColor: '694fad',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#694fad',
          },
        }}
      />
    </Stack.Navigator>
  );
}
