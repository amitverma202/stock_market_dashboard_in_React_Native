import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import ThemeContext from '../context/ThemeContext';

const Card = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.cardContainer,
        {
          backgroundColor: darkMode ? '#333' : '#fff',
          borderColor: darkMode ? '#222' : '#ddd',
        },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    padding: 20,
    borderWidth: 2,
  },
});

export default Card;
