import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyDrawer from './navigation/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { LoginContext } from './Contexts/LoginContext';
import { LogBox } from 'react-native';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </SafeAreaProvider>
    </LoginContext.Provider>
  );
}
LogBox.ignoreAllLogs(); //Ignore all log notifications
