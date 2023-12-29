import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import StockContext from '../context/StockContext';
import ThemeContext from '../context/ThemeContext';

const SearchResults = ({ results }) => {
  const { darkMode } = useContext(ThemeContext);
  const { setStockSymbol } = useContext(StockContext);

  return (
    <ScrollView
      style={[
        styles.resultsContainer,
        {
          backgroundColor: darkMode ? '#282c34' : '#ffffff',
          borderColor: darkMode ? '#495057' : '#d1d1d1',
        },
      ]}
    >
      {results.map((item) => (
        <TouchableOpacity
          key={item.symbol}
          style={[
            styles.resultItem,
            {
              backgroundColor: darkMode ? '#1e2128' : '#ffffff',
              borderColor: darkMode ? '#495057' : '#d1d1d1',
            },
          ]}
          onPress={() => setStockSymbol(item.symbol)}
        >
          <Text style={styles.symbolText}>{item.symbol}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  resultsContainer: {
    position: 'absolute',
    top: 60,
    borderWidth: 2,
    borderRadius: 8,
    maxHeight: 160,
    width: '100%',
  },
  resultItem: {
    padding: 12,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
  },
  symbolText: {
    fontSize: 16,
    color: '#A9A9A9',
  },
  descriptionText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default SearchResults;
