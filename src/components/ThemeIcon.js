import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import ThemeContext from '../context/ThemeContext';
import { MoonIcon } from '@heroicons/react/solid';

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <TouchableOpacity
      onPress={toggleDarkMode}
      style={[
        styles.themeIcon,
        {
          borderColor: darkMode ? '#495057' : '#d1d1d1',
          backgroundColor: darkMode ? '#1e2128' : '#ffffff',
        },
      ]}
    >
      <MoonIcon
        style={[
          styles.moonIcon,
          {
            color: darkMode ? '#FFD700' : 'transparent',
            borderColor: darkMode ? '#FFD700' : '#495057',
          },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  themeIcon: {
    borderRadius: 999,
    borderWidth: 1,
    padding: 8,
    position: 'absolute',
    right: 8,
    top: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    transition: 'background-color 0.3s',
  },
  moonIcon: {
    height: 24,
    width: 24,
  },
});

export default ThemeIcon;
