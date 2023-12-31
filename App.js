// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './src/components/Auth';
import Dashboard from './src/components//Dashboard';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ title: 'Dashboard' }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            options={{ headerShown: false }}
          >
            {(props) => <Auth {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
