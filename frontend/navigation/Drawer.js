import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Account from "../screens/Account.js";
import HomePage from "../screens/HomePage.js";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Styles } from "react-native";
import Basket from "../screens/Basket";
import LoginPage from "../screens/auth/LoginPage.js";
import RegisterPage from "../screens/auth/RegisterPage.js";
import NavBar from "./NavBar.js";

const Drawer = createDrawerNavigator();

const accountIcon = () => {
  <MaterialCommunityIcons name="account" size={30} color="#3e2465" />;
};

export default function MyDrawer(props) {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerTintColor: "#694fad",
        drawerIcon: ({ focused }) => (
          <MaterialCommunityIcons name="home" size={30} color="#3e2465" />
        ),
      }}
    >
      <Drawer.Screen
        name="Home"
        component={NavBar}
        options={{
          title: "Home",
          // headerTitle: () => (
          //   <Image source={require("../assets/hotel_logo.jpg")} />
          // ),
          headerRight: () => (
            <View>
              <MaterialCommunityIcons
                name="cart"
                size={25}
                style={{ margin: 10 }}
                onPress={() => console.log("in Basket")}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          title: "Account",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons name="account" size={30} color="#3e2465" />
          ),
        }}
      />
      <Drawer.Screen
        name="Log In"
        component={LoginPage}
        options={{
          title: "Login",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons name="login" size={30} color="#3e2465" />
          ),
        }}
      />
      <Drawer.Screen
        name="Register"
        component={RegisterPage}
        options={{
          title: "Register",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons name="pencil" size={30} color="#3e2465" />
          ),
        }}
      />

      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}
