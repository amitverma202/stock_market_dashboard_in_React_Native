import React, { useContext, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ThemeContext from '../context/ThemeContext';
import { searchSymbol } from '../utils/api/stock-api';
import SearchResults from './SearchResults';
// import { SearchIcon, XIcon } from '@heroicons/react/solid';

const Search = () => {
  const { darkMode } = useContext(ThemeContext);
  const [input, setInput] = useState('');
  const [bestMatches, setBestMatches] = useState([]);

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchSymbol(input);
        setBestMatches(searchResults);
      }
    } catch (error) {
      setBestMatches([]);
      console.log(error);
    }
  };

  const clear = () => {
    setInput('');
    setBestMatches([]);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        // style={[
        //   styles.input,
        //   { backgroundColor: darkMode ? '#282c34' : '#ffffff' },
        // ]}
        value={input}
        placeholder="Search stock..."
        // placeholderTextColor={darkMode ? '#A9A9A9' : '#666666'}
        onChangeText={(text) => setInput(text)}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === 'Enter') {
            updateBestMatches();
          }
        }}
      />
      {input ? (
        <TouchableOpacity onPress={clear} style={styles.clearButton}>
          style={styles.clearIcon} 
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity onPress={updateBestMatches} style={styles.searchButton}>
         style={styles.searchIcon} 
      </TouchableOpacity>
      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderWidth: 2,
    borderRadius: 8,
    width: 250,
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  },
  clearButton: {
    padding: 8,
  },
  clearIcon: {
    height: 20,
    width: 20,
    color: '#808080',
  },
  searchButton: {
    padding: 8,
    backgroundColor: '#4b0082',
    borderRadius: 8,
  },
  searchIcon: {
    height: 20,
    width: 20,
    color: '#ffffff',
  },
});

export default Search;
