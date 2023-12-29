import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
import ThemeContext from '../context/ThemeContext';

const Details = ({ details }) => {
  const { darkMode } = useContext(ThemeContext);

  const detailsList = {
    companyName: 'Name',
    currency: 'Currency',
    iexOpen: 'Opening Price',
    iexClose: 'Closing Price',
    marketCap: 'Market Capitalization',
    latestTime: 'Last Opening Date',
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Card>
      <View
        style={[
          styles.detailsContainer,
          { borderBottomColor: darkMode ? '#282c34' : '#f8f9fa' },
        ]}
      >
        {Object.keys(detailsList).map((item) => (
          <View
            key={item}
            style={[
              styles.detailsItem,
              { borderColor: darkMode ? '#282c34' : '#f8f9fa' },
            ]}
          >
            <Text style={styles.detailsText}>{detailsList[item]}</Text>
            <Text style={[styles.detailsText, styles.fontBold]}>
              {item === 'marketCap'
                ? `${convertMillionToBillion(details[item])}B`
                : details[item]}
            </Text>
          </View>
        ))}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  detailsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  detailsText: {
    fontSize: 16,
    color: '#000000',
  },
  fontBold: {
    fontWeight: 'bold',
  },
});

export default Details;
