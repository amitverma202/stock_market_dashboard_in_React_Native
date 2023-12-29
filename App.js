import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/components/Dashboard';
import Auth from './src/components/Auth';
import StockContext from './src/context/StockContext';
import ThemeContext from './src/context/ThemeContext';

const Stack = createStackNavigator();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState('MSFT');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Auth"
              component={() => <Auth onLogin={handleLogin} />}
            />
            {isLoggedIn && (
              <Stack.Screen
                name="Dashboard"
                component={() => <Dashboard onLogout={handleLogout} />}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
