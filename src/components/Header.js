import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Search from './Search';
import ThemeIcon from './ThemeIcon';

const Header = ({ name }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{name}</Text>
        <Search />
      </View>
      <ThemeIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Header;
