import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.button,
        active
          ? { backgroundColor: '#4A90E2', borderColor: '#4A90E2' }
          : { borderColor: '#4A90E2' },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          active ? { color: '#fff' } : { color: '#4A90E2' },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 32,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  buttonText: {
    fontSize: 14,
  },
});

export default ChartFilter;
