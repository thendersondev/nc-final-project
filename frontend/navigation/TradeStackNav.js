import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagePage from "../Components/MessagePage";
import PostTrade from "../Components/PostTrade";
import PostReview from "../Components/PostReview";
import UserPage from "../Components/UserPage";
import TradePage from "../screens/TradePage";
import ChatsPage from "../screens/ChatsPage";

const Stack = createNativeStackNavigator();

export default function TradeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Trade"
        component={TradePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Post"
        component={PostTrade}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Review"
        component={PostReview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Message"
        component={MessagePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={UserPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chats"
        component={ChatsPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
